import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, UserCog, GraduationCap, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import LoginModal from './LoginModal';

const portals = [
  {
    title: 'School Owner',
    role: 'Administration',
    description: 'Track growth, finances, and multi-branch performance with high-level analytics.',
    icon: <UserCog className="w-6 h-6" />,
    color: 'from-blue-600 to-cyan-500',
    features: ['Multi-branch control', 'Financial auditing', 'Growth mapping']
  },
  {
    title: 'Principal',
    role: 'Academic Head',
    description: 'Monitor teacher performance, academic risks, and overall school operations.',
    icon: <LayoutDashboard className="w-6 h-6" />,
    color: 'from-purple-600 to-indigo-500',
    features: ['Academic alerts', 'Risk intervention', 'Resource management']
  },
  {
    title: 'Teacher',
    role: 'Educator App',
    description: 'Manage attendance, grades, and utilize AI tools for student monitoring.',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'from-emerald-600 to-teal-500',
    features: ['Smart attendance', 'AI report cards', 'Class engagement']
  },
  {
    title: 'Parent',
    role: 'Family Connect',
    description: 'Stay updated with your child’s progress, attendance, and school announcements.',
    icon: <Users className="w-6 h-6" />,
    color: 'from-orange-600 to-red-500',
    features: ['Real-time tracking', 'Digital fee payment', 'Direct messaging']
  }
];

const PortalShowcase = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <section id="portals" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">One Platform, <span className="text-blue-600">Four Portals.</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">Experience a unified ecosystem where every role has specialized tools to achieve excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal, index) => (
            <motion.div
              key={portal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col h-full group transition-all hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-600/10"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${portal.color} flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-100`}>
                {portal.icon}
              </div>
              <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">{portal.role}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                {portal.title} <span className="font-light text-slate-400">Portal</span>
              </h3>
              <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed font-medium">
                {portal.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {portal.features.map((feature) => (
                  <li key= {feature} className="text-[13px] text-slate-600 font-bold flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-widest mt-auto group/btn"
              >
                Explore Portal <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </section>
  );
};

export default PortalShowcase;
