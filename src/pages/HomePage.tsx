import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import RoleScrollShowcase from '../components/RoleScrollShowcase';
import PortalShowcase from '../components/PortalShowcase';
import Pricing from '../components/Pricing';
import { Tilt3D } from '../components/ui/tilt-3d';

const IpadShowcase = () => (
  <section className="py-20 md:py-28 bg-[#fbfbfd]">
    <div className="max-w-[1100px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-[920px]"
      >
        <Tilt3D rotation={7}>
          <div className="relative aspect-[16/10] rounded-[36px] md:rounded-[44px] bg-[#1d1d1f] p-3 md:p-4 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.45)] transition-shadow duration-500 ease-out hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.35),0_30px_70px_-15px_rgba(0,113,227,0.5),0_15px_40px_-10px_rgba(41,151,255,0.4)]">
            {/* camera dot */}
            <div className="absolute inset-x-0 top-2 flex justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b3b3d]" />
            </div>
            {/* screen */}
            <div className="relative w-full h-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-white">
              <img
                src="/dashboards/IOSUI.png"
                alt="Edullent iOS app"
                className="w-full h-full object-cover object-center"
                draggable={false}
              />
            </div>
          </div>
        </Tilt3D>
      </motion.div>
    </div>
  </section>
);

const HomePage = () => {
  return (
    <div className="bg-[#fbfbfd]">
      <Hero />
      <IpadShowcase />
      <RoleScrollShowcase />
      <PortalShowcase />
      <Pricing />
    </div>
  );
};

export default HomePage;
