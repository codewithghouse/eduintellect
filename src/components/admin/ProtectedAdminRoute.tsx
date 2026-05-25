import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader2, Lock } from 'lucide-react';
import { useAuth } from '../../lib/auth';
import type { AdminSectionKey } from '../../lib/adminSections';
import { ADMIN_SECTIONS } from '../../lib/adminSections';

interface Props {
  children: ReactNode;
  section?: AdminSectionKey;
}

export default function ProtectedAdminRoute({ children, section }: Props) {
  const { user, isAdmin, role, hasSection, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbfbfd]">
        <Loader2 className="w-6 h-6 text-[#0071e3] animate-spin" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return (
      <Navigate
        to="/admin/login"
        replace
        state={{ from: location.pathname + location.search }}
      />
    );
  }

  if (section && role !== 'superadmin' && !hasSection(section)) {
    const label =
      ADMIN_SECTIONS.find((s) => s.key === section)?.label ?? section;
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-10">
        <div className="max-w-[420px] w-full text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#ff9500]/10 border border-[#ff9500]/30 flex items-center justify-center text-[#a55b00] mb-4">
            <Lock className="w-5 h-5" />
          </div>
          <h2 className="text-[20px] font-medium text-[#1d1d1f] tracking-[-0.01em]">
            {label} access not granted
          </h2>
          <p className="text-[13px] text-[#86868b] mt-1.5 leading-snug">
            Your admin account doesn't have permission for this section. Ask
            a superadmin to add <span className="text-[#1d1d1f] font-medium">{label}</span> to your sections.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
