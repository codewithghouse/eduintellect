import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Loader2,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
  Sparkles,
  Users,
  Tag,
  CheckCircle2,
  Receipt,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { auth, db } from '../lib/firebase';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface SchoolDoc {
  schoolName?: string;
  ownerName?: string;
  email?: string;
  phone?: string;
  subscriptionStatus?: string;
  paymentStatus?: string;
}

interface PriceBreakdown {
  students: number;
  perStudent: number;
  subtotal: number;
  discountAmount: number;
  discountLabel: string;
  afterDiscount: number;
  gstAmount: number;
  totalAmount: number;
  appliedCoupon: string | null;
}

const MIN_STUDENTS = 25;
const MAX_STUDENTS = 50000;

// Mirror of server-side perStudentPrice — instant UI preview before
// validateCoupon round-trip. Server is the source of truth at payment time.
function perStudentPrice(students: number): number {
  if (students <= 500) return 1500;
  if (students <= 1500) return 1200;
  return 900;
}

const formatINR = (n: number) => '₹' + n.toLocaleString('en-IN');

const ActivatePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [school, setSchool] = useState<SchoolDoc | null>(null);
  const [students, setStudents] = useState<number>(100);
  const [coupon, setCoupon] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<PriceBreakdown | null>(null);
  const [couponMsg, setCouponMsg] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);
  const [applyingCoupon, setApplyingCoupon] = useState(false);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ── Bootstrap: confirm auth + load school doc + short-circuit if already paid
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
        const data = snap.data() as SchoolDoc;
        setSchool(data);
        if (data.paymentStatus === 'paid') {
          window.location.href =
            import.meta.env.VITE_OWNER_DASHBOARD_URL || 'https://owner-dashboard-blue.vercel.app/';
          return;
        }
      } catch (err) {
        console.error('[activate] school doc read failed:', err);
      } finally {
        setLoading(false);
      }
    });
    return unsub;
  }, [navigate]);

  // ── Local price preview (no coupon) ──────────────────────────────────────────
  const previewPerStudent = perStudentPrice(students);
  const previewSubtotal = students * previewPerStudent;
  const previewGst = Math.round(previewSubtotal * 0.18);
  const previewTotal = previewSubtotal + previewGst;

  const breakdown: PriceBreakdown = appliedCoupon ?? {
    students,
    perStudent: previewPerStudent,
    subtotal: previewSubtotal,
    discountAmount: 0,
    discountLabel: '',
    afterDiscount: previewSubtotal,
    gstAmount: previewGst,
    totalAmount: previewTotal,
    appliedCoupon: null,
  };

  // ── Apply coupon (server-validated) ──────────────────────────────────────────
  const handleApplyCoupon = async () => {
    setCouponMsg(null);
    if (!coupon.trim()) {
      setAppliedCoupon(null);
      return;
    }
    if (students < MIN_STUDENTS) {
      setCouponMsg({ type: 'err', text: `Enter at least ${MIN_STUDENTS} students first.` });
      return;
    }
    setApplyingCoupon(true);
    try {
      const fn = httpsCallable(getFunctions(), 'validateCoupon');
      const res: any = await fn({ students, coupon: coupon.trim() });
      const payload = res.data || {};
      if (payload.ok) {
        setAppliedCoupon(payload.breakdown);
        setCouponMsg({ type: 'ok', text: payload.breakdown.discountLabel || 'Coupon applied.' });
      } else {
        setAppliedCoupon(null);
        setCouponMsg({ type: 'err', text: payload.message || 'Invalid coupon.' });
      }
    } catch (err: any) {
      setAppliedCoupon(null);
      setCouponMsg({ type: 'err', text: err?.message || 'Could not validate coupon.' });
    } finally {
      setApplyingCoupon(false);
    }
  };

  const handleRemoveCoupon = () => {
    setCoupon('');
    setAppliedCoupon(null);
    setCouponMsg(null);
  };

  // ── Razorpay flow ────────────────────────────────────────────────────────────
  const handlePay = async () => {
    setError(null);
    if (students < MIN_STUDENTS || students > MAX_STUDENTS) {
      setError(`Number of students must be between ${MIN_STUDENTS} and ${MAX_STUDENTS}.`);
      return;
    }
    if (typeof window.Razorpay !== 'function') {
      setError('Payment SDK not loaded. Please refresh and try again.');
      return;
    }
    setPaying(true);
    try {
      const createOrder = httpsCallable(getFunctions(), 'createRazorpayOrder');
      const orderRes: any = await createOrder({
        students,
        coupon: appliedCoupon?.appliedCoupon || coupon.trim() || null,
      });
      const { orderId, amountPaise, currency, keyId, breakdown: serverBreakdown } =
        orderRes.data || {};

      const rzp = new window.Razorpay({
        key: keyId,
        amount: amountPaise,
        currency,
        order_id: orderId,
        name: 'Edullent',
        description: `Annual subscription · ${serverBreakdown.students} students`,
        prefill: {
          name: school?.ownerName || '',
          email: school?.email || '',
          contact: school?.phone || '',
        },
        theme: { color: '#0071e3' },
        handler: async (response: any) => {
          try {
            const verify = httpsCallable(getFunctions(), 'verifyRazorpayPayment');
            await verify({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            });
            window.location.href =
              import.meta.env.VITE_OWNER_DASHBOARD_URL ||
              'https://owner-dashboard-blue.vercel.app/';
          } catch (verifyErr: any) {
            setError(verifyErr?.message || 'Payment verification failed. Contact support.');
            setPaying(false);
          }
        },
        modal: {
          ondismiss: () => setPaying(false),
        },
      });
      rzp.on('payment.failed', (resp: any) => {
        setError(resp?.error?.description || 'Payment failed. Please try again.');
        setPaying(false);
      });
      rzp.open();
    } catch (err: any) {
      setError(err?.message || 'Could not start checkout.');
      setPaying(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#fbfbfd]">
        <Loader2 className="w-6 h-6 text-[#0071e3] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 bg-[#fbfbfd]">
      <div className="max-w-[820px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-[11px] font-medium mb-4 uppercase tracking-[0.10em]"
            style={{
              background: 'linear-gradient(135deg, #FF3B30, #FF8800)',
              boxShadow: '0 6px 18px rgba(255,59,48,0.30)',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" /> Launch offer · 40 % off
          </div>
          <h1 className="text-[36px] md:text-[44px] font-normal text-[#1d1d1f] tracking-[-0.03em] mb-3">
            Activate {school?.schoolName || 'your school'}.
          </h1>
          <p className="text-[#86868b] text-[17px] max-w-[560px] mx-auto leading-[1.47]">
            One annual payment unlocks all four dashboards — Owner, Principal, Teacher and Parent.
            GST included.
          </p>
        </motion.div>

        {error && (
          <div className="mb-6 p-4 rounded-[14px] bg-[#FF3B30]/5 border border-[#FF3B30]/30 text-[#FF3B30] text-[14px] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>{error}</div>
          </div>
        )}

        <div className="bg-white border border-[#d2d2d7]/40 rounded-[20px] p-7 md:p-10 shadow-sm">
          {/* Number of students */}
          <div className="mb-7">
            <label className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#86868b] mb-2 flex items-center gap-2">
              <Users className="w-3.5 h-3.5" /> Number of students
            </label>
            <input
              type="number"
              min={MIN_STUDENTS}
              max={MAX_STUDENTS}
              value={students}
              onChange={(e) => {
                const v = Math.max(0, Math.min(MAX_STUDENTS, Number(e.target.value) || 0));
                setStudents(v);
                setAppliedCoupon(null);
                setCouponMsg(null);
              }}
              className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[12px] py-3.5 px-4 text-[#1d1d1f] text-[20px] font-normal tracking-[-0.01em] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 outline-none transition-all"
              placeholder={`Min ${MIN_STUDENTS}`}
            />
            <p className="text-[12px] text-[#86868b] mt-2">
              Tier:{' '}
              <span className="font-medium text-[#1d1d1f]">
                {students <= 500 ? 'Starter' : students <= 1500 ? 'Growth' : 'Enterprise'}
              </span>{' '}
              · {formatINR(perStudentPrice(students))} per student / year
            </p>
          </div>

          {/* Coupon */}
          <div className="mb-7 pb-7 border-b border-[#f0f0f2]">
            <label className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#86868b] mb-2 flex items-center gap-2">
              <Tag className="w-3.5 h-3.5" /> Coupon code (optional)
            </label>
            <div className="flex gap-2.5">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                placeholder="e.g. EDUZS"
                disabled={!!appliedCoupon || applyingCoupon}
                className="flex-1 bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[12px] py-3 px-4 text-[#1d1d1f] text-[15px] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 outline-none transition-all placeholder:text-[#b0b0b8] disabled:opacity-60"
              />
              {appliedCoupon ? (
                <button
                  type="button"
                  onClick={handleRemoveCoupon}
                  className="px-5 rounded-[12px] bg-[#1d1d1f] text-white text-[13px] font-medium hover:bg-black transition-all"
                >
                  Remove
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  disabled={!coupon.trim() || applyingCoupon}
                  className="px-5 rounded-[12px] bg-[#0071e3] text-white text-[13px] font-medium hover:bg-[#0077ed] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {applyingCoupon ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Apply'}
                </button>
              )}
            </div>
            {couponMsg && (
              <p
                className={`text-[12.5px] mt-2 flex items-center gap-1.5 ${
                  couponMsg.type === 'ok' ? 'text-[#34c759]' : 'text-[#FF3B30]'
                }`}
              >
                {couponMsg.type === 'ok' ? (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                ) : (
                  <AlertCircle className="w-3.5 h-3.5" />
                )}
                {couponMsg.text}
              </p>
            )}
          </div>

          {/* Breakdown */}
          <div className="mb-7">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#86868b] mb-3 flex items-center gap-2">
              <Receipt className="w-3.5 h-3.5" /> Order summary
            </p>
            <Row
              label={`${breakdown.students} students × ${formatINR(breakdown.perStudent)}`}
              value={formatINR(breakdown.subtotal)}
            />
            {breakdown.discountAmount > 0 && (
              <Row
                label={breakdown.discountLabel || 'Discount'}
                value={`− ${formatINR(breakdown.discountAmount)}`}
                accent="#34c759"
              />
            )}
            <Row label="GST (18 %)" value={formatINR(breakdown.gstAmount)} />
            <div className="border-t border-[#f0f0f2] mt-3 pt-3 flex items-baseline justify-between">
              <span className="text-[15px] font-medium text-[#1d1d1f]">Total payable</span>
              <span className="text-[28px] font-light text-[#1d1d1f] tracking-[-0.02em]">
                {formatINR(breakdown.totalAmount)}
              </span>
            </div>
          </div>

          {/* Pay button */}
          <button
            onClick={handlePay}
            disabled={paying || students < MIN_STUDENTS}
            className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-4 rounded-[14px] text-[15px] font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {paying ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Pay {formatINR(breakdown.totalAmount)} <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex items-center gap-2 justify-center mt-4 text-[12px] text-[#86868b]">
            <ShieldCheck className="w-3.5 h-3.5" />
            Secure checkout · UPI · Cards · Net-banking · Razorpay
          </div>
        </div>

        <p className="text-center mt-6 text-[12px] text-[#86868b]">
          Need help? <Link to="/contact" className="text-[#0071e3] hover:underline">Contact us</Link>
        </p>
      </div>
    </div>
  );
};

const Row = ({ label, value, accent }: { label: string; value: string; accent?: string }) => (
  <div className="flex items-baseline justify-between py-1.5">
    <span className="text-[14px] text-[#424245]">{label}</span>
    <span className="text-[14px] font-normal" style={{ color: accent || '#1d1d1f' }}>
      {value}
    </span>
  </div>
);

export default ActivatePage;
