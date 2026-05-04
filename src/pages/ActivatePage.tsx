import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, ShieldCheck, ArrowRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

interface SchoolDoc {
  schoolName?: string;
  subscriptionStatus?: string;
  paymentStatus?: string;
}

interface Plan {
  id: 'starter' | 'pro' | 'enterprise';
  name: string;
  monthly: number | null;
  perStudent: string;
  cap: string;
  brand: string;
  cta: string;
  recommended?: boolean;
}

const PLANS: Plan[] = [
  { id: 'starter',    name: 'Starter',    monthly: 2999, perStudent: '₹15 / student / month', cap: 'Up to 200 students · single branch',   brand: '#FF9500', cta: 'Choose Starter' },
  { id: 'pro',        name: 'Pro',        monthly: 7999, perStudent: '₹16 / student / month', cap: 'Up to 500 students · 3 branches',     brand: '#0055FF', cta: 'Choose Pro', recommended: true },
  { id: 'enterprise', name: 'Enterprise', monthly: null, perStudent: 'From ₹13 / student / mo', cap: 'Unlimited students & branches',      brand: '#7B3FF4', cta: 'Talk to sales' },
];

const ActivatePage = () => {
  const navigate = useNavigate();
  const [school, setSchool] = useState<SchoolDoc | null>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Plan['id']>('pro');
  const [paying, setPaying] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        navigate('/login');
        return;
      }
      try {
        const snap = await getDoc(doc(db, 'schools', u.uid));
        if (!snap.exists()) {
          navigate('/register');
          return;
        }
        setSchool(snap.data() as SchoolDoc);
      } catch (err) {
        console.error('[activate] school doc read failed:', err);
      } finally {
        setLoading(false);
      }
    });
    return unsub;
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#fbfbfd]">
        <Loader2 className="w-6 h-6 text-[#0071e3] animate-spin" />
      </div>
    );
  }

  const isPaid = school?.subscriptionStatus === 'active';

  const handlePay = async () => {
    setPaying(true);
    // TODO: Razorpay integration
    // ─────────────────────────────────────────────────────────────────────
    // Wiring needed (NOT done yet — requires Razorpay account + keys):
    //   1. Create Razorpay account → get KEY_ID + KEY_SECRET
    //   2. Set VITE_RAZORPAY_KEY_ID in main-website .env
    //   3. Deploy Cloud Function `createRazorpayOrder` (server-side, uses KEY_SECRET)
    //   4. Deploy Cloud Function `verifyRazorpayPayment` webhook
    //         → on success: schools/{uid}.subscriptionStatus = 'active'
    //                       schools/{uid}.paymentStatus = 'paid'
    //                       schools/{uid}.activatedAt = serverTimestamp()
    //                       schools/{uid}.plan = selected
    //   5. Load https://checkout.razorpay.com/v1/checkout.js in index.html
    //   6. Replace this stub with `new Razorpay({...}).open()`
    // ─────────────────────────────────────────────────────────────────────
    setTimeout(() => {
      setPaying(false);
      alert('Payment integration coming soon. Please contact sales to activate manually.');
    }, 800);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 bg-[#fbfbfd]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0071e3]/10 text-[#0071e3] text-[12px] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Activate your school
          </div>
          <h1 className="text-[36px] md:text-[44px] font-normal text-[#1d1d1f] tracking-[-0.03em] mb-3">
            Pick a plan to unlock unlimited usage.
          </h1>
          <p className="text-[#86868b] text-[17px] max-w-[560px] mx-auto leading-[1.47]">
            Activate now and lock in your launch pricing. Cancel anytime · GST extra.
          </p>
        </motion.div>

        {/* State banner */}
        {school && (
          <div
            className={`max-w-[760px] mx-auto mb-8 p-4 rounded-[14px] flex items-center gap-3 text-[14px] ${
              isPaid
                ? 'bg-[#34c759]/10 text-[#1f8a3c] border border-[#34c759]/30'
                : 'bg-[#0071e3]/5 text-[#0055b3] border border-[#0071e3]/20'
            }`}
          >
            {isPaid ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <div>
              {isPaid
                ? <>Your school is already <strong>active</strong>. You can change plans below.</>
                : <>Pick a plan to activate your school. <strong>Launch offer — 40 % off</strong> applied automatically.</>
              }
            </div>
          </div>
        )}

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {PLANS.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              selected={selected === plan.id}
              onSelect={() => setSelected(plan.id)}
            />
          ))}
        </div>

        {/* Pay action */}
        <div className="max-w-[640px] mx-auto bg-white border border-[#d2d2d7]/40 rounded-[20px] p-7 shadow-sm">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <p className="text-[12px] font-medium tracking-[0.14em] uppercase text-[#86868b] mb-1">Selected plan</p>
              <p className="text-[20px] font-normal text-[#1d1d1f]">{PLANS.find(p => p.id === selected)?.name}</p>
              <p className="text-[13px] text-[#86868b] mt-0.5">{PLANS.find(p => p.id === selected)?.cap}</p>
            </div>
            <div className="text-right">
              <p className="text-[12px] font-medium tracking-[0.14em] uppercase text-[#86868b] mb-1">Billed</p>
              {PLANS.find(p => p.id === selected)?.monthly ? (
                <p className="text-[20px] font-light text-[#1d1d1f]">₹{PLANS.find(p => p.id === selected)!.monthly!.toLocaleString('en-IN')}<span className="text-[13px] text-[#86868b]"> / mo</span></p>
              ) : (
                <p className="text-[20px] font-light text-[#1d1d1f]">Custom</p>
              )}
            </div>
          </div>

          {selected === 'enterprise' ? (
            <Link
              to="/contact"
              className="w-full bg-[#1d1d1f] hover:bg-[#000] text-white py-3.5 rounded-[12px] text-[15px] font-medium flex items-center justify-center gap-2 transition-all"
            >
              Talk to sales <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <button
              onClick={handlePay}
              disabled={paying}
              className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-3.5 rounded-[12px] text-[15px] font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {paying ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Pay & Activate <ArrowRight className="w-4 h-4" /></>}
            </button>
          )}

          <div className="flex items-center gap-2 justify-center mt-4 text-[12px] text-[#86868b]">
            <ShieldCheck className="w-3.5 h-3.5" />
            Secure checkout · UPI, cards, net-banking · Razorpay
          </div>
        </div>

        {/* Skip activation for now */}
        {!isPaid && (
          <div className="text-center mt-6">
            <a
              href={import.meta.env.VITE_OWNER_DASHBOARD_URL || 'https://owner-dashboard-blue.vercel.app/'}
              className="text-[14px] text-[#86868b] hover:text-[#1d1d1f] transition-colors"
            >
              Take me to my dashboard →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

interface PlanCardProps {
  plan: Plan;
  selected: boolean;
  onSelect: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, selected, onSelect }) => (
  <button
    type="button"
    onClick={onSelect}
    className={`relative text-left bg-white rounded-[20px] p-6 transition-all duration-300 ${
      selected ? 'ring-2 ring-offset-2' : 'border border-[#d2d2d7]/40 hover:border-[#86868b]/60'
    }`}
    style={selected ? { boxShadow: `0 18px 40px -16px ${plan.brand}50`, ['--tw-ring-color' as any]: plan.brand } : undefined}
  >
    {plan.recommended && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-medium tracking-[0.14em] uppercase text-white whitespace-nowrap"
        style={{ background: `linear-gradient(135deg, ${plan.brand}, #1166FF)` }}>
        Most Popular
      </div>
    )}

    <p className="text-[12px] font-medium tracking-[0.14em] uppercase mb-2" style={{ color: plan.brand }}>
      {plan.name}
    </p>

    {plan.monthly !== null ? (
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-[16px] text-[#1d1d1f] mt-2">₹</span>
        <span className="text-[40px] font-light text-[#1d1d1f] tracking-[-0.03em] leading-none">
          {plan.monthly.toLocaleString('en-IN')}
        </span>
        <span className="text-[13px] text-[#86868b] ml-1">/mo</span>
      </div>
    ) : (
      <div className="text-[36px] font-light text-[#1d1d1f] tracking-[-0.03em] leading-none mb-1">Custom</div>
    )}
    <p className="text-[12px] text-[#86868b] mb-4">{plan.perStudent}</p>
    <p className="text-[13px] text-[#424245] leading-[1.45]">{plan.cap}</p>

    <div className="mt-5 pt-5 border-t border-[#f0f0f2]">
      <span
        className="inline-flex items-center gap-1.5 text-[13px] font-medium"
        style={{ color: selected ? plan.brand : '#86868b' }}
      >
        {selected ? <><CheckCircle2 className="w-4 h-4" /> Selected</> : 'Tap to select'}
      </span>
    </div>
  </button>
);

export default ActivatePage;
