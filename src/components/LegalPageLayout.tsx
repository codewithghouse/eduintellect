import { motion } from 'framer-motion';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalPageProps {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
}

const LegalPageLayout = ({ title, effectiveDate, intro, sections }: LegalPageProps) => (
  <div className="bg-[#fbfbfd]">
    <section className="pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="max-w-[820px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[#0055FF] text-[14px] font-medium tracking-[0.16em] uppercase mb-3">
            Legal
          </p>
          <h1 className="text-[40px] md:text-[56px] font-light text-[#1d1d1f] leading-[1.05] tracking-[-0.035em] mb-4">
            {title}
          </h1>
          <p className="text-[#86868b] text-[14px] font-normal mb-6">
            Effective from {effectiveDate}
          </p>
          <p className="text-[#424245] text-[17px] md:text-[18px] font-normal leading-[1.55] tracking-[0.005em]">
            {intro}
          </p>
        </motion.div>
      </div>
    </section>

    <section className="pb-24 md:pb-32">
      <div className="max-w-[820px] mx-auto px-6 space-y-10">
        {sections.map((s, i) => (
          <motion.div
            key={s.heading}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[22px] md:text-[26px] font-normal text-[#1d1d1f] leading-[1.2] tracking-[-0.02em] mb-4">
              {s.heading}
            </h2>
            <div className="space-y-4">
              {s.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-[#424245] text-[15px] md:text-[16px] font-normal leading-[1.6] tracking-[0.005em]"
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default LegalPageLayout;
