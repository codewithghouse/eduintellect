import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UserCog, LayoutDashboard, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const roles = [
  {
    id: 'owner',
    title: 'School Owner',
    icon: <UserCog className="w-5 h-5" />,
    color: 'bg-blue-600',
    hoverColor: 'hover:border-blue-500/50',
    glow: 'group-hover:shadow-blue-500/20',
    url: import.meta.env.VITE_OWNER_DASHBOARD_URL || 'https://owner-dashboard-blue.vercel.app/'
  },
  {
    id: 'principal',
    title: 'Principal',
    icon: <LayoutDashboard className="w-5 h-5" />,
    color: 'bg-purple-600',
    hoverColor: 'hover:border-purple-500/50',
    glow: 'group-hover:shadow-purple-500/20',
    url: import.meta.env.VITE_PRINCIPAL_DASHBOARD_URL || 'https://principal-dashboard-seven.vercel.app/'
  },
  {
    id: 'teacher',
    title: 'Teacher',
    icon: <GraduationCap className="w-5 h-5" />,
    color: 'bg-emerald-600',
    hoverColor: 'hover:border-emerald-500/50',
    glow: 'group-hover:shadow-emerald-500/20',
    url: import.meta.env.VITE_TEACHER_DASHBOARD_URL || 'https://teacher-dashboard-ochre.vercel.app/'
  },
  {
    id: 'parent',
    title: 'Parent',
    icon: <Users className="w-5 h-5" />,
    color: 'bg-orange-600',
    hoverColor: 'hover:border-orange-500/50',
    glow: 'group-hover:shadow-orange-500/20',
    url: import.meta.env.VITE_PARENT_DASHBOARD_URL || 'https://parent-dashboard-ten.vercel.app/'
  }
];

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[60]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[70] p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl overflow-hidden pointer-events-auto shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
                <div>
                  <h3 className="text-xl font-bold text-white">Select Your Portal</h3>
                  <p className="text-slate-500 text-sm">Choose your role to access your dashboard</p>
                </div>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all flex items-center justify-center active:scale-90"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Roles List */}
              <div className="p-6 grid grid-cols-1 gap-3">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => {
                      if (role.url) {
                        window.open(role.url, '_blank', 'noopener,noreferrer');
                      }
                      onClose();
                    }}
                    className={cn(
                      "group relative flex items-center justify-between p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 transition-all active:scale-[0.98] shadow-sm",
                      role.hoverColor,
                      role.glow,
                      "hover:bg-slate-800"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg",
                        role.color
                      )}>
                        {role.icon}
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-white group-hover:text-brand-400 transition-colors uppercase text-xs tracking-widest mb-0.5">Access Portal</div>
                        <div className="text-lg font-semibold text-slate-200">{role.title}</div>
                      </div>
                    </div>
                    
                    <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-500 group-hover:bg-brand-500 group-hover:text-white transition-all transform group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 bg-slate-950/50 text-center border-t border-slate-800">
                <p className="text-slate-500 text-sm">
                  First time here? <Link to="/register" onClick={onClose} className="text-brand-400 font-semibold hover:underline">Register your school</Link>
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
