import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, UserCog, GraduationCap, ArrowRight } from 'lucide-react';
import LoginModal from './LoginModal';

const portals = [
  {
    title: 'School Owner',
    role: 'Administration',
    description: 'Track growth, finances, and multi-branch performance with high-level analytics.',
    icon: <UserCog className="w-6 h-6" />,
    color: '#0071e3',
    features: ['Multi-branch control', 'Financial auditing', 'Growth mapping']
  },
  {
    title: 'Principal',
    role: 'Academic Head',
    description: 'Monitor teacher performance, academic risks, and overall school operations.',
    icon: <LayoutDashboard className="w-6 h-6" />,
    color: '#5856d6',
    features: ['Academic alerts', 'Risk intervention', 'Resource management']
  },
  {
    title: 'Teacher',
    role: 'Educator App',
    description: 'Manage attendance, grades, and utilize AI tools for student monitoring.',
    icon: <GraduationCap className="w-6 h-6" />,
    color: '#34c759',
    features: ['Smart attendance', 'AI report cards', 'Class engagement']
  },
  {
    title: 'Parent',
    role: 'Family Connect',
    description: 'Stay updated with your child\u2019s progress, attendance, and school announcements.',
    icon: <Users className="w-6 h-6" />,
    color: '#ff9500',
    features: ['Real-time tracking', 'Digital fee payment', 'Direct messaging']
  }
];

const PortalShowcase = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <section id="portals" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0071e3] text-[17px] font-semibold mb-2 tracking-[-0.01em]"
          >
            Four dedicated portals
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[48px] font-semibold text-[#1d1d1f] mb-4 tracking-[-0.035em] leading-[1.08]"
          >
            One platform. Every role.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#86868b] text-[17px] max-w-[500px] mx-auto tracking-[0.011em]"
          >
            A unified ecosystem where every role has specialized tools to achieve excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {portals.map((portal, index) => (
            <motion.div
              key={portal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="bg-[#fbfbfd] p-7 rounded-[20px] border border-[#d2d2d7]/40 flex flex-col h-full group transition-all duration-300 hover:border-[#d2d2d7] hover:shadow-lg"
            >
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center text-white mb-6"
                style={{ backgroundColor: portal.color }}
              >
                {portal.icon}
              </div>
              <div className="text-[12px] font-medium text-[#86868b] uppercase tracking-[0.08em] mb-2">{portal.role}</div>
              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3 tracking-[-0.02em]">
                {portal.title}
              </h3>
              <p className="text-[#86868b] text-[14px] mb-6 flex-grow leading-[1.47] tracking-[-0.01em]">
                {portal.description}
              </p>

              <ul className="space-y-3 mb-8">
                {portal.features.map((feature) => (
                  <li key={feature} className="text-[13px] text-[#424245] flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: portal.color }}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="flex items-center gap-1.5 text-[14px] font-normal text-[#0071e3] hover:text-[#0077ed] transition-colors duration-300 mt-auto group/btn"
              >
                Explore Portal <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
