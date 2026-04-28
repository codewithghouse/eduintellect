import { GraduationCap, Star, Sparkles } from 'lucide-react';
import { CreativePricing, type PricingTier } from './ui/creative-pricing';

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    icon: <GraduationCap className="w-6 h-6" />,
    price: 49,
    description: 'Perfect for small schools or single branches.',
    color: 'amber',
    features: [
      'Up to 200 students',
      'Core management tools',
      'Basic reports',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    icon: <Star className="w-6 h-6" />,
    price: 129,
    description: 'The complete solution for growing institutions.',
    color: 'blue',
    popular: true,
    features: [
      'Unlimited students',
      'AI risk monitoring',
      'Advanced analytics',
      'Parent-Teacher app',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    icon: <Sparkles className="w-6 h-6" />,
    price: 'Custom',
    description: 'Advanced features for multi-branch networks.',
    color: 'purple',
    cta: 'Talk to sales',
    features: [
      'Multi-branch sync',
      'Custom AI models',
      'Whitelabel app',
      'Dedicated account manager',
    ],
  },
];

const Pricing = () => (
  <section id="pricing" className="py-24 bg-[#fbfbfd] relative">
    <CreativePricing
      tag="Pricing"
      title="Plans built for every school."
      description="Pick the plan that matches your vision — switch anytime."
      tiers={tiers}
    />
  </section>
);

export default Pricing;
