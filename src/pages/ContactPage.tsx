import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  User,
  School as SchoolIcon,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Loader2,
  CheckCircle2,
  MessageSquare,
  Rocket,
} from 'lucide-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

// ── Field caps — must match firestore.rules size limits on contact_submissions
const MAX_NAME     = 120;
const MAX_SCHOOL   = 200;
const MAX_EMAIL    = 200;
const MAX_PHONE    = 25;
const MAX_LOCATION = 300;

const clean = (s: string, max: number) => s.trim().slice(0, max);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s\-()]{7,20}$/;

interface FormState {
  name: string;
  schoolName: string;
  email: string;
  phone: string;
  location: string;
}

const initial: FormState = {
  name: '',
  schoolName: '',
  email: '',
  phone: '',
  location: '',
};

const ContactPage = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.schoolName.trim() || !form.email.trim() || !form.phone.trim() || !form.location.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!PHONE_RE.test(form.phone.trim())) {
      setError('Please enter a valid phone number.');
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'contact_submissions'), {
        name:       clean(form.name,       MAX_NAME),
        schoolName: clean(form.schoolName, MAX_SCHOOL),
        email:      clean(form.email,      MAX_EMAIL).toLowerCase(),
        phone:      clean(form.phone,      MAX_PHONE),
        location:   clean(form.location,   MAX_LOCATION),
        status:     'new',
        createdAt:  serverTimestamp(),
      });
      setSuccess(true);
      setForm(initial);
    } catch (err) {
      console.error('[contact] submit failed:', err);
      setError('Could not submit your enquiry. Please try again or email support@edullent.com.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6 py-20 bg-[#fbfbfd]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#34c759]/10 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-[#34c759]" />
          </div>
          <h1 className="text-[28px] font-normal tracking-[-0.02em] text-[#1d1d1f]">
            Thanks — we'll be in touch.
          </h1>
          <p className="text-[#86868b] text-[15px] mt-3 leading-[1.5]">
            Our team has received your enquiry and will get back to you within
            one business day at the email and phone you provided.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-7 inline-flex items-center gap-1.5 text-[14px] text-[#0071e3] hover:underline"
          >
            Send another enquiry
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-[#fbfbfd]">
      <div className="max-w-[980px] mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071e3]/10 text-[#0071e3] text-[12px] font-medium mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Contact us
          </div>
          <h1 className="text-[40px] sm:text-[48px] font-normal tracking-[-0.025em] text-[#1d1d1f] leading-[1.08]">
            Let's bring Edullent to your school.
          </h1>
          <p className="mt-4 text-[17px] sm:text-[19px] text-[#424245] max-w-[640px] mx-auto leading-[1.42]">
            Tell us a bit about your school and our team will reach out to walk
            you through pricing, onboarding and a live demo.
          </p>

          {/* Direct registration CTA — for schools who already know they want in */}
          <div className="mt-6 inline-flex items-center gap-2 text-[13.5px] text-[#424245]">
            <span>Already decided?</span>
            <Link
              to="/register"
              className="inline-flex items-center gap-1 text-[#0071e3] font-medium hover:underline"
            >
              Register your school directly
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="bg-white border border-[#d2d2d7]/50 rounded-[20px] p-6 sm:p-8 space-y-5"
          >
            <Field
              label="Your name"
              name="name"
              icon={<User className="w-4 h-4" />}
              value={form.name}
              onChange={onChange}
              placeholder="Aarav Kapoor"
              maxLength={MAX_NAME}
              autoComplete="name"
            />
            <Field
              label="School name"
              name="schoolName"
              icon={<SchoolIcon className="w-4 h-4" />}
              value={form.schoolName}
              onChange={onChange}
              placeholder="Greenfield Public School"
              maxLength={MAX_SCHOOL}
              autoComplete="organization"
            />
            <Field
              label="Email (Gmail or work)"
              name="email"
              type="email"
              icon={<Mail className="w-4 h-4" />}
              value={form.email}
              onChange={onChange}
              placeholder="principal@school.edu"
              maxLength={MAX_EMAIL}
              autoComplete="email"
            />
            <Field
              label="Phone number"
              name="phone"
              type="tel"
              icon={<Phone className="w-4 h-4" />}
              value={form.phone}
              onChange={onChange}
              placeholder="+91 98765 43210"
              maxLength={MAX_PHONE}
              autoComplete="tel"
            />
            <Field
              label="School location"
              name="location"
              icon={<MapPin className="w-4 h-4" />}
              value={form.location}
              onChange={onChange}
              placeholder="Hyderabad, Telangana"
              maxLength={MAX_LOCATION}
              autoComplete="address-level2"
            />

            {error && (
              <div className="rounded-[12px] bg-[#ff3b30]/5 border border-[#ff3b30]/25 text-[#b3221a] text-[13px] px-3.5 py-2.5">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#0071e3] hover:bg-[#0066cc] text-white font-medium text-[15px] py-3 rounded-[12px] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Send enquiry
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-[11.5px] text-[#86868b] text-center mt-2 leading-[1.45]">
              By submitting this form, you agree to be contacted by Edullent
              regarding your enquiry. We never share your details with third
              parties.
            </p>
          </motion.form>

          {/* Side panel */}
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            <SidePanel
              icon={<Mail className="w-4 h-4 text-[#0071e3]" />}
              title="Email us"
              body={<a href="mailto:support@edullent.com" className="text-[#0071e3] hover:underline">support@edullent.com</a>}
            />
            <SidePanel
              icon={<Phone className="w-4 h-4 text-[#0071e3]" />}
              title="Call us"
              body={<a href="tel:+919876543210" className="text-[#0071e3] hover:underline">+91 98765 43210</a>}
            />
            <SidePanel
              icon={<MapPin className="w-4 h-4 text-[#0071e3]" />}
              title="Office"
              body={<>Hyderabad, Telangana,<br />India 500032</>}
            />
            <div className="rounded-[16px] bg-gradient-to-br from-[#0071e3]/8 to-[#0071e3]/3 border border-[#0071e3]/15 p-5">
              <div className="text-[13px] font-medium text-[#1d1d1f]">
                Looking for a quick demo?
              </div>
              <p className="text-[12.5px] text-[#424245] mt-1.5 leading-[1.45]">
                Mention "demo request" in your enquiry and we'll prioritise a
                30-minute walkthrough at a time that suits your team.
              </p>
            </div>

            {/* School registration shortcut — keeps the existing /register
                flow one click away for schools that don't need to talk first. */}
            <Link
              to="/register"
              className="block rounded-[16px] bg-[#1d1d1f] text-white p-5 hover:bg-[#0a0a0a] transition group"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-[10px] bg-white/10 flex items-center justify-center shrink-0">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] font-medium">Register your school</div>
                  <div className="text-[12px] text-white/70 mt-1 leading-[1.45]">
                    Skip the call — create your school account in 2 minutes and
                    get instant access to the owner dashboard.
                  </div>
                  <div className="mt-2.5 inline-flex items-center gap-1 text-[12px] text-white font-medium">
                    Go to registration
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

interface FieldProps {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  autoComplete?: string;
}

const Field = ({ label, name, value, onChange, icon, placeholder, type = 'text', maxLength, autoComplete }: FieldProps) => (
  <label className="block">
    <span className="text-[13px] font-medium text-[#1d1d1f] mb-1.5 block">{label}</span>
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
        required
        className="w-full pl-10 pr-3.5 py-2.5 rounded-[12px] border border-[#d2d2d7] focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/15 outline-none text-[14px] text-[#1d1d1f] placeholder:text-[#86868b]/70 bg-white transition"
      />
    </div>
  </label>
);

const SidePanel = ({ icon, title, body }: { icon: React.ReactNode; title: string; body: React.ReactNode }) => (
  <div className="bg-white border border-[#d2d2d7]/50 rounded-[16px] p-5 flex items-start gap-3">
    <div className="w-9 h-9 rounded-[10px] bg-[#0071e3]/10 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <div className="text-[13px] font-medium text-[#1d1d1f]">{title}</div>
      <div className="text-[13px] text-[#424245] mt-1 leading-[1.45]">{body}</div>
    </div>
  </div>
);

export default ContactPage;
