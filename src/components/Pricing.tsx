import { Check, Zap, Rocket, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    description: 'Perfect for small private schools or single branches.',
    features: ['Up to 200 Students', 'Core Management Tools', 'Basic Reports', 'Email Support'],
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    color: 'border-blue-500/20',
    btnClass: 'btn-secondary'
  },
  {
    name: 'Pro',
    price: '$129',
    popular: true,
    description: 'The complete solution for growing educational institutions.',
    features: ['Unlimited Students', 'AI Risk Monitoring', 'Advanced Analytics', 'Parent-Teacher App', 'Priority Support'],
    icon: <Rocket className="w-6 h-6 text-brand-500" />,
    color: 'border-brand-500/50',
    btnClass: 'btn-primary'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Advanced features for multi-branch school networks.',
    features: ['Multi-Branch Sync', 'Custom AI Models', 'Whitelabel App', 'Dedicated Account Manager'],
    icon: <Crown className="w-6 h-6 text-purple-500" />,
    color: 'border-purple-500/20',
    btnClass: 'btn-secondary'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Simple, Transparent <span className="text-brand-400">Pricing.</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Choose the plan that fits your school's vision and start transforming today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative glass-card p-8 border ${plan.color} flex flex-col h-full overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] uppercase font-black px-4 py-1 rounded-bl-xl tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">{plan.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-500 text-sm ml-2">/ month</span>}
              </div>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>
              
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${
                plan.popular ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30' : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
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
