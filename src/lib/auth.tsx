import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut as fbSignOut,
  type User,
} from 'firebase/auth';
import { deleteDoc, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from './firebase';
import {
  ADMIN_SECTION_KEYS,
  type AdminSectionKey,
} from './adminSections';

export type AdminRole = 'superadmin' | 'admin' | null;

interface AuthState {
  user: User | null;
  role: AdminRole;
  sections: AdminSectionKey[];
  isAdmin: boolean;
  hasSection: (s: AdminSectionKey) => boolean;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  refreshRole: () => Promise<void>;
}

const AuthCtx = createContext<AuthState | undefined>(undefined);

const PERMANENT_SUPERADMIN_EMAILS = ['edullentofficial@gmail.com'];

const ENV_BOOTSTRAP_EMAILS = (import.meta.env.VITE_ADMIN_BOOTSTRAP_EMAILS ?? '')
  .split(',')
  .map((s: string) => s.trim().toLowerCase())
  .filter(Boolean);

const BOOTSTRAP_EMAILS = Array.from(
  new Set([...PERMANENT_SUPERADMIN_EMAILS, ...ENV_BOOTSTRAP_EMAILS]),
);

export function isPermanentSuperadmin(email: string | null | undefined): boolean {
  if (!email) return false;
  return PERMANENT_SUPERADMIN_EMAILS.includes(email.toLowerCase());
}

function inviteIdForEmail(email: string): string {
  return `invite_${email.replace(/[^a-z0-9]/g, '_')}`;
}

interface ResolvedRole {
  role: AdminRole;
  sections: AdminSectionKey[];
}

function normalizeSections(raw: unknown): AdminSectionKey[] {
  if (!Array.isArray(raw)) return [];
  const out: AdminSectionKey[] = [];
  for (const v of raw) {
    if (typeof v === 'string' && (ADMIN_SECTION_KEYS as readonly string[]).includes(v)) {
      out.push(v as AdminSectionKey);
    }
  }
  return out;
}

async function resolveRole(user: User): Promise<ResolvedRole> {
  const email = user.email?.toLowerCase();

  if (email && PERMANENT_SUPERADMIN_EMAILS.includes(email)) {
    try {
      await setDoc(
        doc(db, 'admins', user.uid),
        {
          email,
          displayName: user.displayName ?? null,
          photoURL: user.photoURL ?? null,
          role: 'superadmin',
          permanent: true,
          lastSeenAt: serverTimestamp(),
        },
        { merge: true },
      );
    } catch (err) {
      console.warn('[auth] permanent superadmin sync failed:', err);
    }
    // Superadmin implicitly has every section.
    return { role: 'superadmin', sections: [...ADMIN_SECTION_KEYS] };
  }

  try {
    const snap = await getDoc(doc(db, 'admins', user.uid));
    if (snap.exists()) {
      const data = snap.data();
      const r = data?.role;
      if (r === 'superadmin' || r === 'admin') {
        // Sections come straight from the doc. Legacy docs (created before
        // sections existed) have no `sections` field — for those we keep the
        // old "god mode" behaviour: superadmins see all sections, admins see
        // none until a superadmin grants them.
        const hasField = data && Object.prototype.hasOwnProperty.call(data, 'sections');
        const stored = normalizeSections(data?.sections);
        const sections =
          hasField
            ? stored
            : r === 'superadmin'
            ? [...ADMIN_SECTION_KEYS]
            : [];
        return { role: r, sections };
      }
    }
  } catch (err) {
    console.warn('[auth] admins lookup failed:', err);
  }

  if (email) {
    try {
      const inviteRef = doc(db, 'admins', inviteIdForEmail(email));
      const inviteSnap = await getDoc(inviteRef);
      if (inviteSnap.exists()) {
        const data = inviteSnap.data();
        const r: AdminRole = data?.role === 'superadmin' ? 'superadmin' : 'admin';
        // Whatever sections the superadmin picked on the invite — respect it.
        // If the invite doc literally has no sections field (legacy invite),
        // default superadmin → all sections, admin → none.
        const inviteHasField =
          data && Object.prototype.hasOwnProperty.call(data, 'sections');
        const stored = normalizeSections(data?.sections);
        const sections = inviteHasField
          ? stored
          : r === 'superadmin'
          ? [...ADMIN_SECTION_KEYS]
          : [];
        await setDoc(doc(db, 'admins', user.uid), {
          email,
          displayName: user.displayName ?? null,
          role: r,
          sections,
          invitedBy: data?.invitedBy ?? null,
          createdAt: data?.createdAt ?? serverTimestamp(),
          promotedAt: serverTimestamp(),
        });
        await deleteDoc(inviteRef).catch(() => {});
        return { role: r, sections };
      }
    } catch (err) {
      console.warn('[auth] invite lookup failed:', err);
    }
  }

  if (email && BOOTSTRAP_EMAILS.includes(email)) {
    try {
      await setDoc(doc(db, 'admins', user.uid), {
        email,
        displayName: user.displayName ?? null,
        role: 'superadmin',
        bootstrapped: true,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.warn('[auth] bootstrap write failed (rules?):', err);
    }
    return { role: 'superadmin', sections: [...ADMIN_SECTION_KEYS] };
  }

  return { role: null, sections: [] };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<AdminRole>(null);
  const [sections, setSections] = useState<AdminSectionKey[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        const r = await resolveRole(u);
        setRole(r.role);
        setSections(r.sections);
      } else {
        setRole(null);
        setSections([]);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const signOut = async () => {
    await fbSignOut(auth);
  };

  const refreshRole = async () => {
    if (user) {
      const r = await resolveRole(user);
      setRole(r.role);
      setSections(r.sections);
    }
  };

  const hasSection = (s: AdminSectionKey) =>
    role === 'superadmin' || sections.includes(s);

  return (
    <AuthCtx.Provider
      value={{
        user,
        role,
        sections,
        isAdmin: role === 'admin' || role === 'superadmin',
        hasSection,
        loading,
        signInWithGoogle,
        signOut,
        refreshRole,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
