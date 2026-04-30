import { Link } from 'react-router-dom';
import { ContainerScroll } from './ui/container-scroll-animation';
import OwnerBrandLeaderboardScreen from './OwnerBrandLeaderboardScreen';
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
    <ContainerScroll titleComponent={<Title eyebrow="For Owners" headline="See every campus at a glance." brand="#0071e3" />}>
      <OwnerBrandLeaderboardScreen />
    </ContainerScroll>
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
    <RoleCta to="/student-parent" label="Explore Student & Parent Dashboard" brand="#d97706" />
  </section>
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
  <div className="flex justify-center -mt-6 md:-mt-12 mb-12 md:mb-20 px-6">
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
      Scroll to step inside the dashboard.
    </p>
  </>
);

export default RoleScrollShowcase;
