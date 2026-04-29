import React, { useRef } from 'react';
import { useScroll, useTransform, motion, type MotionValue } from 'framer-motion';

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={containerRef}
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
    >
      <div className="py-6 md:py-24 w-full relative" style={{ perspective: '1000px' }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => (
  <motion.div
    style={{ translateY: translate }}
    className="div max-w-5xl mx-auto text-center"
  >
    {titleComponent}
  </motion.div>
);

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      // Inner highlight (white-ish 1.5px ring) sits inside via box-shadow inset
      // so it reads as a real iPad bezel without taking layout space.
      boxShadow:
        '0 0 0 1.5px #2c2c2e, 0 30px 80px rgba(15,23,42,0.25), 0 80px 160px rgba(15,23,42,0.18)',
    }}
    className="relative max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full p-3 md:p-3.5 bg-[#1c1c1e] rounded-[28px] md:rounded-[40px] transition-[box-shadow] duration-500 ease-out hover:shadow-[0_0_0_1.5px_rgba(0,85,255,0.45),0_0_40px_rgba(0,85,255,0.28),0_30px_80px_rgba(0,85,255,0.30),0_80px_160px_rgba(0,85,255,0.22)]"
  >
    {/* Camera dot — top edge center, premium iPad Pro M4 detail */}
    <div
      className="absolute left-1/2 -translate-x-1/2 rounded-full bg-[#3a3a3c] pointer-events-none"
      style={{ top: 6, width: 5, height: 5 }}
    />
    {/* SCREEN */}
    <div className="h-full w-full overflow-hidden rounded-[18px] md:rounded-[26px] bg-[#EEF4FF]">
      {children}
    </div>
  </motion.div>
);
