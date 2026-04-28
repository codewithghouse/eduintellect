import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export interface ColorChangeCardProps {
  eyebrow?: string;
  heading: string;
  description: string;
  /** Optional background image. If omitted, `bgColor` is used. */
  imgSrc?: string;
  /** Solid background color (CSS value) used when there's no image. */
  bgColor?: string;
  onClick?: () => void;
  className?: string;
}

export function ColorChangeCard({
  eyebrow,
  heading,
  description,
  imgSrc,
  bgColor = '#1d1d1f',
  onClick,
  className = '',
}: ColorChangeCardProps) {
  return (
    <motion.div
      transition={{ staggerChildren: 0.035 }}
      whileHover="hover"
      onClick={onClick}
      style={!imgSrc ? { backgroundColor: bgColor } : undefined}
      className={`group relative h-64 w-full cursor-pointer overflow-hidden rounded-2xl ${className}`}
    >
      {imgSrc ? (
        <>
          <div
            className="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/15 transition-opacity duration-500 group-hover:from-black/65 group-hover:via-black/25 group-hover:to-transparent" />
        </>
      ) : (
        <>
          {/* subtle radial glow that brightens on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/25 transition-opacity duration-500 group-hover:opacity-70" />
          <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-white/15 blur-2xl transition-transform duration-700 group-hover:scale-150" />
        </>
      )}

      <div className="relative z-20 flex h-full flex-col justify-between p-5 text-white/85 transition-colors duration-500 group-hover:text-white">
        <ArrowRight className="ml-auto w-7 h-7 transition-transform duration-500 group-hover:-rotate-45" />
        <div>
          {eyebrow && (
            <div className="text-[11px] font-medium uppercase tracking-[0.12em] mb-2 opacity-90">
              {eyebrow}
            </div>
          )}
          <h4 className="leading-none mb-2">
            {heading.split('').map((letter, index) => (
              <AnimatedLetter letter={letter} key={index} />
            ))}
          </h4>
          <p className="text-[13px] leading-relaxed opacity-90">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

const letterVariants: Variants = {
  hover: { y: '-50%' },
};

function AnimatedLetter({ letter }: { letter: string }) {
  const ch = letter === ' ' ? ' ' : letter;
  return (
    <div className="inline-block h-[36px] overflow-hidden font-semibold text-3xl">
      <motion.span
        className="flex min-w-[4px] flex-col"
        style={{ y: '0%' }}
        variants={letterVariants}
        transition={{ duration: 0.5 }}
      >
        <span>{ch}</span>
        <span>{ch}</span>
      </motion.span>
    </div>
  );
}

export default ColorChangeCard;
