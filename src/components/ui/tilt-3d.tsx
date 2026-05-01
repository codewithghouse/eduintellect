import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect, type ReactNode } from 'react';

/**
 * Detects whether the primary input device supports hover (i.e. a real
 * mouse / trackpad). Touch-only devices return false. We use this to
 * skip the 3D tilt effect entirely on phones/tablets — otherwise the
 * tilt sticks after a tap on iOS Safari and looks broken.
 */
const useHasHover = () => {
  const [hasHover, setHasHover] = useState(true);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setHasHover(mq.matches);
    const handler = (e: MediaQueryListEvent) => setHasHover(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return hasHover;
};

export const Tilt3D = ({
  children,
  className = '',
  rotation = 12,
}: {
  children: ReactNode;
  className?: string;
  /** max tilt in degrees on each axis */
  rotation?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasHover = useHasHover();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(
    ySpring,
    [-0.5, 0.5],
    [`${rotation}deg`, `${-rotation}deg`],
  );
  const rotateY = useTransform(
    xSpring,
    [-0.5, 0.5],
    [`${-rotation}deg`, `${rotation}deg`],
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Touch devices: render a plain wrapper, no perspective, no 3D — keeps
  // text crisp and avoids the iOS sticky-hover artifact.
  if (!hasHover) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div style={{ perspective: '1200px' }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Tilt3D;
