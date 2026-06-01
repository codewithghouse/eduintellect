import { Link } from 'react-router-dom';
import { ContainerScroll } from './ui/container-scroll-animation';
import PrincipalDashboardScreen from './PrincipalDashboardScreen';
import TeacherPerformanceScreen from './TeacherPerformanceScreen';
import ParentPerformanceScreen from './ParentPerformanceScreen';
import { Sparkles, ArrowRight } from 'lucide-react';

/**
 * Renders the Aceternity-style scroll-tilt container 4 times,
 * one per role, each holding a full dashboard mock inside.
 */
const RoleScrollShowcase = () => (
  <section className="bg-[#fbfbfd]">
    <OwnerShowcase />
    <RoleCta to="/owner" label="Explore Owner Dashboard" brand="#0071e3" />

    <ContainerScroll titleComponent={<Title eyebrow="For Principals" headline="Run your school with intelligence." brand="#003ECC" />}>
      <PrincipalDashboardScreen />
    </ContainerScroll>
    <RoleCta to="/principal" label="Explore Principal Dashboard" brand="#003ECC" />

    <ContainerScroll titleComponent={<Title eyebrow="For Teachers" headline="Less paperwork. More teaching." brand="#059669" />}>
      <TeacherPerformanceScreen />
    </ContainerScroll>
    <RoleCta to="/teacher" label="Explore Teacher Dashboard" brand="#059669" />

    <ContainerScroll titleComponent={<Title eyebrow="For Students & Parents" headline="Stay close to every milestone." brand="#d97706" />}>
      <ParentPerformanceScreen />
    </ContainerScroll>
    <RoleCta to="/parent" label="Explore Parent Dashboard" brand="#d97706" />
  </section>
);

/* ---------------------- Flat Owner showcase (no iPad bezel) ---------------------- */
const OwnerShowcase = () => (
  <div className="pt-16 md:pt-28 pb-10 md:pb-20 px-4 md:px-8">
    <div className="max-w-5xl mx-auto text-center mb-8 md:mb-14">
      <p
        className="inline-flex items-center gap-2 text-[14px] md:text-[15px] font-semibold mb-4 tracking-[-0.01em]"
        style={{ color: '#0071e3' }}
      >
        <Sparkles className="w-4 h-4" /> For Owners
      </p>
      <h2 className="text-[32px] md:text-[56px] lg:text-[64px] font-light text-[#1d1d1f] leading-[1.05] tracking-[-0.035em] mb-4">
        See every campus at a glance.
      </h2>
      <p className="text-[#86868b] text-[16px] md:text-[18px] max-w-[560px] mx-auto leading-[1.45]">
        The owner's bird's-eye view — every branch ranked, every metric in one frame.
      </p>
    </div>
    <div className="max-w-[1240px] mx-auto">
      <div
        className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white ring-1 ring-black/[0.06]"
        style={{
          boxShadow:
            '0 30px 80px rgba(15,23,42,0.18), 0 80px 160px rgba(15,23,42,0.12)',
        }}
      >
        <img
          src="/dashboards/owner-branch-leaderboard.png"
          alt="Edullent Owner Dashboard — Branch Leaderboard"
          className="w-full h-auto block"
          draggable={false}
        />
      </div>
    </div>
  </div>
);

/* ---------------------- Per-role CTA below each scroll container ---------------------- */
const RoleCta = ({
  to,
  label,
  brand,
}: {
  to: string;
  label: string;
  brand: string;
}) => (
  <div className="relative z-20 flex justify-center mt-8 md:mt-10 mb-14 md:mb-24 px-6">
    <Link
      to={to}
      className="group inline-flex items-center gap-2 px-5 md:px-7 py-3 md:py-3.5 rounded-full text-white text-[14px] md:text-[15px] font-medium transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
      style={{
        background: brand,
        boxShadow: `0 6px 20px ${brand}33, 0 2px 6px ${brand}22`,
      }}
    >
      <span>{label}</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  </div>
);

/* ---------------------- Title above each scroll container ---------------------- */
const Title = ({
  eyebrow,
  headline,
  brand,
}: {
  eyebrow: string;
  headline: string;
  brand: string;
}) => (
  <>
    <p
      className="inline-flex items-center gap-2 text-[14px] md:text-[15px] font-semibold mb-4 tracking-[-0.01em]"
      style={{ color: brand }}
    >
      <Sparkles className="w-4 h-4" /> {eyebrow}
    </p>
    <h2 className="text-[32px] md:text-[56px] lg:text-[64px] font-light text-[#1d1d1f] leading-[1.05] tracking-[-0.035em] mb-4">
      {headline}
    </h2>
    <p className="text-[#86868b] text-[16px] md:text-[18px] max-w-[560px] mx-auto leading-[1.45]">
      A live look inside the dashboard.
    </p>
  </>
);

export default RoleScrollShowcase;
