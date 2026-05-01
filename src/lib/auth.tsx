import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut as fbSignOut,
  type User,
} from 'firebase/auth';
import { deleteDoc, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from './firebase';

export type AdminRole = 'superadmin' | 'admin' | null;

interface AuthState {
  user: User | null;
  role: AdminRole;
  isAdmin: boolean;
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

async function resolveRole(user: User): Promise<AdminRole> {
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
    return 'superadmin';
  }

  try {
    const snap = await getDoc(doc(db, 'admins', user.uid));
    if (snap.exists()) {
      const data = snap.data();
      const r = data?.role;
      if (r === 'superadmin' || r === 'admin') return r;
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
        const r = data?.role === 'superadmin' ? 'superadmin' : 'admin';
        await setDoc(doc(db, 'admins', user.uid), {
          email,
          displayName: user.displayName ?? null,
          role: r,
          invitedBy: data?.invitedBy ?? null,
          createdAt: data?.createdAt ?? serverTimestamp(),
          promotedAt: serverTimestamp(),
        });
        await deleteDoc(inviteRef).catch(() => {});
        return r;
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
    return 'superadmin';
  }

  return null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<AdminRole>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        const r = await resolveRole(u);
        setRole(r);
      } else {
        setRole(null);
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
      setRole(r);
    }
  };

  return (
    <AuthCtx.Provider
      value={{
        user,
        role,
        isAdmin: role === 'admin' || role === 'superadmin',
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
