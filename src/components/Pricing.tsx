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
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4"
          >
            Simple, Transparent <span className="text-blue-600">Pricing.</span>
          </motion.h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">Choose the plan that fits your school's vision and start transforming today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-slate-50 p-10 rounded-[2.5rem] border ${plan.color.replace('border-brand', 'border-blue').replace('/30', '/10')} flex flex-col h-full overflow-hidden transition-all hover:bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-600/10`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] uppercase font-black px-6 py-2 rounded-bl-3xl tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 p-4 w-fit rounded-2xl bg-white shadow-sm border border-slate-100">{plan.icon}</div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-black text-slate-900 tracking-tight">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-500 text-base font-bold ml-2">/ month</span>}
              </div>
              <p className="text-slate-500 text-sm mb-10 leading-relaxed font-medium">
                {plan.description}
              </p>
              
              <div className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-4 text-[14px] text-slate-700 font-bold">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-black transition-all active:scale-95 uppercase tracking-widest text-sm ${
                plan.popular 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-2xl shadow-blue-600/40' 
                  : 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm'
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
