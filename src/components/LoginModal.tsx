import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UserCog, LayoutDashboard, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const roles = [
  {
    id: 'owner',
    title: 'School Owner',
    subtitle: 'Administration & Analytics',
    icon: <UserCog className="w-5 h-5" />,
    color: '#0071e3',
    // Owner login flows through /login on this site (Google + email)
    // — internal auth page handles the redirect to the live dashboard.
    internalRoute: '/login',
  },
  {
    id: 'principal',
    title: 'Principal',
    subtitle: 'Academic Management',
    icon: <LayoutDashboard className="w-5 h-5" />,
    color: '#0055FF',
    url: import.meta.env.VITE_PRINCIPAL_DASHBOARD_URL || 'https://principal-dashboard-seven.vercel.app/',
  },
  {
    id: 'teacher',
    title: 'Teacher',
    subtitle: 'Classroom Tools',
    icon: <GraduationCap className="w-5 h-5" />,
    color: '#34c759',
    url: import.meta.env.VITE_TEACHER_DASHBOARD_URL || 'https://teacher-dashboard-ochre.vercel.app/',
  },
  {
    id: 'parent',
    title: 'Parent',
    subtitle: 'Family Connect',
    icon: <Users className="w-5 h-5" />,
    color: '#ff9500',
    url: import.meta.env.VITE_PARENT_DASHBOARD_URL || 'https://parent-dashboard-ten.vercel.app/',
  },
] as const;

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[60]"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[70] p-4">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white w-full max-w-[420px] rounded-[20px] overflow-hidden pointer-events-auto shadow-2xl"
            >
              {/* Header */}
              <div className="px-7 pt-7 pb-5 flex items-start justify-between">
                <div>
                  <h3 className="text-[22px] font-normal text-[#1d1d1f] tracking-[-0.02em]">Select Your Portal</h3>
                  <p className="text-[#86868b] text-[14px] mt-1">Choose your role to continue</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#86868b] hover:text-[#1d1d1f] transition-all duration-200 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Roles */}
              <div className="px-7 pb-3 space-y-2">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => {
                      if ('internalRoute' in role && role.internalRoute) {
                        navigate(role.internalRoute);
                      } else if ('url' in role && role.url) {
                        window.open(role.url, '_blank', 'noopener,noreferrer');
                      }
                      onClose();
                    }}
                    className="group w-full flex items-center justify-between p-4 rounded-[14px] bg-[#fbfbfd] border border-[#d2d2d7]/40 hover:border-[#d2d2d7] hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-10 h-10 rounded-[10px] flex items-center justify-center text-white"
                        style={{ backgroundColor: role.color }}
                      >
                        {role.icon}
                      </div>
                      <div className="text-left">
                        <div className="text-[15px] font-medium text-[#1d1d1f]">{role.title}</div>
                        <div className="text-[12px] text-[#86868b]">{role.subtitle}</div>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-[#86868b] group-hover:text-[#0071e3] group-hover:translate-x-0.5 transition-all duration-200" />
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="px-7 py-5 bg-[#f5f5f7] text-center border-t border-[#d2d2d7]/40">
                <p className="text-[#86868b] text-[13px]">
                  New here?{' '}
                  <Link to="/register" onClick={onClose} className="text-[#0071e3] hover:underline">
                    Register your school
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
