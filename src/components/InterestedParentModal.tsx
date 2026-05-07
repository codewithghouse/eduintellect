import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  User,
  Phone,
  School as SchoolIcon,
  Mail,
  ArrowRight,
  Loader2,
  CheckCircle2,
  HeartHandshake,
} from 'lucide-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

// ── Field caps — keep in sync with firestore.rules `interested_parents`.
const MAX_NAME   = 120;
const MAX_PHONE  = 25;
const MAX_SCHOOL = 200;
const MAX_EMAIL  = 200;

const clean = (s: string, max: number) => s.trim().slice(0, max);

const PHONE_RE = /^\+?[\d\s\-()]{7,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  phone: string;
  schoolName: string;
  email: string;
}

const initial: FormState = { name: '', phone: '', schoolName: '', email: '' };

const InterestedParentModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Reset state on open so a re-opened modal doesn't show stale success/error.
  useEffect(() => {
    if (isOpen) {
      setForm(initial);
      setSuccess(false);
      setError('');
      setLoading(false);
    }
  }, [isOpen]);

  // Esc to close.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.phone.trim() || !form.schoolName.trim()) {
      setError('Please fill name, phone and school name.');
      return;
    }
    if (!PHONE_RE.test(form.phone.trim())) {
      setError('Please enter a valid phone number.');
      return;
    }
    if (form.email.trim() && !EMAIL_RE.test(form.email.trim())) {
      setError('Please enter a valid email or leave it blank.');
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'interested_parents'), {
        name:       clean(form.name,       MAX_NAME),
        phone:      clean(form.phone,      MAX_PHONE),
        schoolName: clean(form.schoolName, MAX_SCHOOL),
        email:      clean(form.email,      MAX_EMAIL).toLowerCase(),
        status:     'new',
        createdAt:  serverTimestamp(),
      });
      setSuccess(true);
    } catch (err) {
      console.error('[interested-parent] submit failed:', err);
      setError('Could not submit. Please try again or email support@edullent.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[60]"
          />

          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[70] p-4">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Interested parent enquiry"
              className="bg-white w-full max-w-[440px] rounded-[20px] overflow-hidden pointer-events-auto shadow-2xl max-h-[92vh] flex flex-col"
            >
              {/* Header */}
              <div className="px-7 pt-7 pb-4 flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-[10px] bg-[#ff9500]/10 text-[#ff9500] flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-normal text-[#1d1d1f] tracking-[-0.02em]">
                      Interested parent
                    </h3>
                    <p className="text-[#86868b] text-[13px] mt-0.5 leading-[1.45]">
                      Drop your details — we'll reach out about bringing Edullent to your child's school.
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="w-8 h-8 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#86868b] hover:text-[#1d1d1f] transition-all duration-200 flex items-center justify-center shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {success ? (
                <div className="px-7 pb-8 pt-2 flex-1 overflow-y-auto">
                  <div className="text-center py-6">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#34c759]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-[#34c759]" />
                    </div>
                    <h4 className="text-[19px] font-normal tracking-[-0.02em] text-[#1d1d1f]">
                      Thanks — we got it.
                    </h4>
                    <p className="text-[#86868b] text-[13.5px] mt-2 leading-[1.5]">
                      Our team will reach out within one business day at the
                      number you shared.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-5 inline-flex items-center justify-center gap-1.5 bg-[#0071e3] hover:bg-[#0066cc] text-white text-[14px] font-medium px-5 py-2.5 rounded-[12px] transition"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="px-7 pb-7 pt-1 space-y-4 flex-1 overflow-y-auto">
                  <Field
                    label="Your name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    icon={<User className="w-4 h-4" />}
                    placeholder="Riya Sharma"
                    maxLength={MAX_NAME}
                    autoComplete="name"
                    required
                  />
                  <Field
                    label="Phone number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    icon={<Phone className="w-4 h-4" />}
                    placeholder="+91 98765 43210"
                    maxLength={MAX_PHONE}
                    autoComplete="tel"
                    required
                  />
                  <Field
                    label="School name"
                    name="schoolName"
                    value={form.schoolName}
                    onChange={onChange}
                    icon={<SchoolIcon className="w-4 h-4" />}
                    placeholder="Greenfield Public School"
                    maxLength={MAX_SCHOOL}
                    autoComplete="organization"
                    required
                  />
                  <Field
                    label={
                      <>
                        Email <span className="text-[#86868b] font-normal">(optional)</span>
                      </>
                    }
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    icon={<Mail className="w-4 h-4" />}
                    placeholder="riya@example.com"
                    maxLength={MAX_EMAIL}
                    autoComplete="email"
                  />

                  {error && (
                    <div className="rounded-[12px] bg-[#ff3b30]/5 border border-[#ff3b30]/25 text-[#b3221a] text-[12.5px] px-3.5 py-2.5">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-1 inline-flex items-center justify-center gap-2 bg-[#0071e3] hover:bg-[#0066cc] text-white font-medium text-[14.5px] py-2.5 rounded-[12px] transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Send my details
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#86868b] text-center leading-[1.45]">
                    We'll only use these details to contact you about Edullent.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

interface FieldProps {
  label: React.ReactNode;
  name: keyof FormState;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  autoComplete?: string;
  required?: boolean;
}

const Field: React.FC<FieldProps> = ({
  label,
  name,
  value,
  onChange,
  icon,
  placeholder,
  type = 'text',
  maxLength,
  autoComplete,
  required,
}) => (
  <label className="block">
    <span className="text-[12.5px] font-medium text-[#1d1d1f] mb-1.5 block">{label}</span>
    <div className="relative">
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#86868b]">{icon}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autoComplete}
        required={required}
        className="w-full pl-10 pr-3.5 py-2.5 rounded-[12px] border border-[#d2d2d7] focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/15 outline-none text-[14px] text-[#1d1d1f] placeholder:text-[#86868b]/70 bg-white transition"
      />
    </div>
  </label>
);

export default InterestedParentModal;
