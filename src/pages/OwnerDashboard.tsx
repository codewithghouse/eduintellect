import { motion } from 'framer-motion';
import { UserCog } from 'lucide-react';
import { Tilt3D } from '../components/ui/tilt-3d';

const IMG_FILTER = 'brightness(1.08) saturate(0.55) contrast(1.05)';
const IMG_CLASS = 'w-full h-auto block';

const UspImage = ({ src, alt }: { src: string; alt: string }) => (
  <Tilt3D>
    <img
      src={src}
      alt={alt}
      className={IMG_CLASS}
      style={{ filter: IMG_FILTER }}
      draggable={false}
    />
  </Tilt3D>
);

const OwnerDashboard = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-[12px] bg-[#0071e3] flex items-center justify-center text-white">
              <UserCog className="w-5 h-5" />
            </div>
            <p className="text-[#0071e3] text-[14px] font-semibold tracking-[-0.01em]">
              Administration
            </p>
          </div>
          <h1 className="text-[40px] md:text-[48px] font-semibold text-[#1d1d1f] leading-[1.08] tracking-[-0.035em] mb-4">
            Owner Dashboard
          </h1>
          <p className="text-[#86868b] text-[17px] max-w-[600px] leading-[1.47] tracking-[0.011em] mb-16">
            Complete control over your school ecosystem. Track growth, finances, and multi-branch performance.
          </p>
        </motion.div>

        {/* USP1 — image LEFT, content RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:-ml-8"
          >
            <UspImage src="/dashboards/OWNERUSP1.png" alt="Owner USP 1" />
          </motion.div>
          <div className="relative">{/* content for USP1 */}</div>
        </div>

        {/* USP2 — content LEFT, image RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <div className="relative order-2 lg:order-1">{/* content for USP2 */}</div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:-mr-8 order-1 lg:order-2"
          >
            <UspImage src="/dashboards/OWNERUSP2.png" alt="Owner USP 2" />
          </motion.div>
        </div>

        {/* USP3 — image LEFT, content RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:-ml-8"
          >
            <UspImage src="/dashboards/OWNERUSP3.png" alt="Owner USP 3" />
          </motion.div>
          <div className="relative">{/* content for USP3 */}</div>
        </div>

        {/* USP4 — content LEFT, image RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <div className="relative order-2 lg:order-1">{/* content for USP4 */}</div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:-mr-8 order-1 lg:order-2"
          >
            <UspImage src="/dashboards/OWNERUSP4.png" alt="Owner USP 4" />
          </motion.div>
        </div>

        {/* USP5 — image LEFT, content RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:-ml-8"
          >
            <UspImage src="/dashboards/OWNERUSP5.png" alt="Owner USP 5" />
          </motion.div>
          <div className="relative">{/* content for USP5 */}</div>
        </div>

        {/* USP6 — content LEFT, image RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">{/* content for USP6 */}</div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:-mr-8 order-1 lg:order-2"
          >
            <UspImage src="/dashboards/OWNERUSP6.png" alt="Owner USP 6" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
