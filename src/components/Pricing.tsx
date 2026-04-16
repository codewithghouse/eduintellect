import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    description: 'Perfect for small private schools or single branches.',
    features: ['Up to 200 Students', 'Core Management Tools', 'Basic Reports', 'Email Support'],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$129',
    popular: true,
    description: 'The complete solution for growing educational institutions.',
    features: ['Unlimited Students', 'AI Risk Monitoring', 'Advanced Analytics', 'Parent-Teacher App', 'Priority Support'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Advanced features for multi-branch school networks.',
    features: ['Multi-Branch Sync', 'Custom AI Models', 'Whitelabel App', 'Dedicated Account Manager'],
    highlighted: false,
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[#fbfbfd]">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0071e3] text-[17px] font-semibold mb-2 tracking-[-0.01em]"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[48px] font-semibold text-[#1d1d1f] mb-4 tracking-[-0.035em] leading-[1.08]"
          >
            Simple, transparent pricing.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#86868b] text-[17px] max-w-[500px] mx-auto tracking-[0.011em]"
          >
            Choose the plan that fits your school's vision and start transforming today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-8 rounded-[20px] flex flex-col h-full transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-[#1d1d1f] text-white'
                  : 'bg-white border border-[#d2d2d7]/40 hover:border-[#d2d2d7] hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0071e3] text-white text-[11px] font-medium px-4 py-1 rounded-full tracking-[-0.01em]">
                  Most Popular
                </div>
              )}

              <h3 className={`text-[22px] font-semibold mb-2 tracking-[-0.02em] ${plan.highlighted ? 'text-white' : 'text-[#1d1d1f]'}`}>
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className={`text-[48px] font-semibold tracking-[-0.04em] ${plan.highlighted ? 'text-white' : 'text-[#1d1d1f]'}`}>
                  {plan.price}
                </span>
                {plan.price !== 'Custom' && (
                  <span className={`text-[15px] ml-1 ${plan.highlighted ? 'text-[#86868b]' : 'text-[#86868b]'}`}>/ month</span>
                )}
              </div>
              <p className={`text-[14px] mb-8 leading-[1.47] tracking-[-0.01em] ${plan.highlighted ? 'text-[#86868b]' : 'text-[#86868b]'}`}>
                {plan.description}
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-[14px]">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      plan.highlighted ? 'bg-[#0071e3]' : 'bg-[#f5f5f7]'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-[#0071e3]'}`} />
                    </div>
                    <span className={plan.highlighted ? 'text-[#d2d2d7]' : 'text-[#424245]'}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3.5 rounded-full font-medium text-[15px] transition-all duration-300 tracking-[-0.01em] ${
                plan.highlighted
                  ? 'bg-[#0071e3] hover:bg-[#0077ed] text-white'
                  : 'bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f]'
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
