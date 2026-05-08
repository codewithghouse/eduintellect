import { useEffect, useState } from 'react';
import { HeartHandshake, ArrowRight } from 'lucide-react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import InterestedParentModal from './InterestedParentModal';

/**
 * Slim CTA banner that sits BELOW the navbar, in normal page flow.
 * Self-contained: owns its own modal state and live counter, so callers
 * just drop <InterestedParentBar /> wherever they want the banner.
 *
 * The counter is read from /public_stats/interested_parents (single doc,
 * publicly readable per firestore.rules) and updates in real time as
 * other parents submit the form.
 */
const InterestedParentBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, 'public_stats', 'interested_parents'),
      (snap) => {
        const data = snap.data() as { count?: number } | undefined;
        setCount(typeof data?.count === 'number' ? data.count : 0);
      },
      (err) => {
        console.warn('[interested-parent-bar] counter read failed:', err);
        setCount(0);
      },
    );
    return unsub;
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-[#fff7ed] via-[#fff3e0] to-[#fff7ed] border-b border-[#ff9500]/20">
        <div className="max-w-[980px] mx-auto px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-[#1d1d1f] text-[12.5px] sm:text-[13.5px]">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#ff9500]/30 text-[#ff9500] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </span>
            {/* Live social-proof — the count of interested submissions
                received so far. Renders only once we have a real value (>0)
                so we never flash a fake "0 interested" while loading. */}
            {count !== null && count > 0 && (
              <>
                <span className="font-semibold tabular-nums">
                  {count.toLocaleString('en-IN')}
                </span>
                <span className="text-[#1d1d1f]">
                  interested in <span className="font-mokoto">Edullent</span>
                </span>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-1.5 bg-[#1d1d1f] hover:bg-[#0a0a0a] active:scale-[0.98] text-white text-[12px] sm:text-[12.5px] font-medium px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all shadow-sm"
          >
            I'm interested
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <InterestedParentModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default InterestedParentBar;
