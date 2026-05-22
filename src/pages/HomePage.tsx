import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import DashboardLinks from '../components/DashboardLinks';
import RoleScrollShowcase from '../components/RoleScrollShowcase';
import PortalShowcase from '../components/PortalShowcase';
import USPs from '../components/USPs';
import Pricing from '../components/Pricing';
import { Tilt3D } from '../components/ui/tilt-3d';
import { useSeo } from '../lib/useSeo';

const HeroShowcase = () => (
  <section className="py-20 md:py-28 bg-[#fbfbfd]">
    <div className="max-w-[1200px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-[1080px]"
      >
        <Tilt3D rotation={5}>
          <img
            src="/dashboards/hero-mockup.png"
            alt="Edullent — Smarter School Management, All in One Place"
            className="w-full h-auto rounded-[28px] md:rounded-[36px] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.25),0_20px_50px_-15px_rgba(0,85,255,0.15)] transition-shadow duration-500 ease-out hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.30),0_30px_70px_-15px_rgba(0,113,227,0.30),0_15px_40px_-10px_rgba(41,151,255,0.25)]"
            draggable={false}
          />
        </Tilt3D>
      </motion.div>
    </div>
  </section>
);

const HomePage = () => {
  useSeo({
    title: 'EDULLENT – Advanced Intelligence System for Modern Institutions',
    description:
      'Edullent is the intelligence layer between a school and its data — AI-powered dashboards for Owners, Principals, Teachers and Parents. One platform, every role.',
    canonical: 'https://edullent.com',
    ogTitle: 'Edullent',
    ogDescription: 'Smart School Management Platform',
    ogImage: 'https://edullent.com/og-image.png',
  });

  return (
    <div className="bg-[#fbfbfd]">
      {/* Spacer clears the fixed navbar above the hero. */}
      <div className="pt-[60px] md:pt-[72px]" />
      <Hero />
      <HeroShowcase />
      <DashboardLinks />
      <RoleScrollShowcase />
      <PortalShowcase />
      <USPs />
      <Pricing />
    </div>
  );
};

export default HomePage;
