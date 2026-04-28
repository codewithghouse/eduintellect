import { useState } from 'react';
import { motion } from 'framer-motion';
import LoginModal from './LoginModal';
import { ColorChangeCard } from './ui/color-change-card';

const portals = [
  {
    title: 'School Owner',
    role: 'Administration',
    description: 'Track growth, finances, and multi-branch performance with high-level analytics.',
    bgColor: '#3b5a82', // matte steel blue
  },
  {
    title: 'Principal',
    role: 'Academic Head',
    description: 'Monitor teacher performance, academic risks, and overall school operations.',
    bgColor: '#6b5b95', // matte dusty purple
  },
  {
    title: 'Teacher',
    role: 'Educator App',
    description: 'Manage attendance, grades, and utilize AI tools for student monitoring.',
    bgColor: '#5d8b7a', // matte sage green
  },
  {
    title: 'Parent',
    role: 'Family Connect',
    description: "Stay updated with your child's progress, attendance, and school announcements.",
    bgColor: '#c87f5a', // matte terracotta
  },
];

const PortalShowcase = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <section id="portals" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0071e3] text-[17px] font-normal mb-2 tracking-[-0.01em]"
          >
            Four dedicated portals
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[48px] font-normal text-[#1d1d1f] mb-4 tracking-[-0.035em] leading-[1.08]"
          >
            One platform. Every role.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#86868b] text-[17px] max-w-[520px] mx-auto tracking-[0.011em]"
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
            >
              <ColorChangeCard
                eyebrow={portal.role}
                heading={portal.title}
                description={portal.description}
                bgColor={portal.bgColor}
                onClick={() => setIsLoginModalOpen(true)}
              />
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
