import { ContainerScroll } from './ui/container-scroll-animation';
import {
  Building2,
  GraduationCap,
  Users,
  TrendingUp,
  DollarSign,
  Bell,
  CheckCircle2,
  BookOpen,
  ClipboardList,
  CalendarClock,
  Award,
  Activity,
  Sparkles,
  AlertTriangle,
  FileText,
  MessageSquare,
} from 'lucide-react';

/**
 * Renders the Aceternity-style scroll-tilt container 4 times,
 * one per role, each holding a full dashboard mock inside.
 */
const RoleScrollShowcase = () => (
  <section className="bg-[#fbfbfd]">
    <ContainerScroll titleComponent={<Title eyebrow="For Owners" headline="See every campus at a glance." brand="#0071e3" />}>
      <img
        src="/dashboards/ownerui.png"
        alt="Owner dashboard"
        className="mx-auto rounded-xl object-contain h-full w-full"
        draggable={false}
      />
    </ContainerScroll>

    <ContainerScroll titleComponent={<Title eyebrow="For Principals" headline="Run your school with intelligence." brand="#003ECC" />}>
      <img
        src="/dashboards/principalui.png"
        alt="Principal dashboard"
        className="mx-auto rounded-xl object-contain h-full w-full"
        draggable={false}
      />
    </ContainerScroll>

    <ContainerScroll titleComponent={<Title eyebrow="For Teachers" headline="Less paperwork. More teaching." brand="#059669" />}>
      <img
        src="/dashboards/teacherui.png"
        alt="Teacher dashboard"
        className="mx-auto rounded-xl object-contain h-full w-full"
        draggable={false}
      />
    </ContainerScroll>

    <ContainerScroll titleComponent={<Title eyebrow="For Students & Parents" headline="Stay close to every milestone." brand="#d97706" />}>
      <img
        src="/dashboards/parentui.png"
        alt="Parent dashboard — Performance Analytics"
        className="mx-auto rounded-xl object-contain h-full w-full"
        draggable={false}
      />
    </ContainerScroll>
  </section>
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

/* ============================== OWNER DASHBOARD ============================== */
const OwnerDashboard = () => (
  <DashboardShell role="Owner" badgeColor="#0071e3" icon={<Building2 className="w-4 h-4 text-white" />}>
    <KpiRow
      items={[
        { icon: <Building2 className="w-3.5 h-3.5" />, label: 'Schools', value: '12' },
        { icon: <Users className="w-3.5 h-3.5" />, label: 'Students', value: '8,420' },
        { icon: <DollarSign className="w-3.5 h-3.5" />, label: 'Revenue', value: '₹4.2Cr' },
        { icon: <TrendingUp className="w-3.5 h-3.5" />, label: 'YoY Growth', value: '+18%' },
      ]}
    />

    <div className="grid grid-cols-3 gap-2 md:gap-3 mt-3">
      <Panel className="col-span-2" title="Campus performance">
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: 'Greenfield Public', val: 92 },
            { name: 'St. Mary Convent', val: 87 },
            { name: 'Sunrise Academy', val: 81 },
            { name: 'Heritage Intl.', val: 76 },
          ].map((s) => (
            <div key={s.name} className="rounded-lg border border-zinc-700/50 bg-zinc-800/40 p-2 md:p-3">
              <div className="text-[10px] md:text-[11px] text-zinc-400 mb-1">{s.name}</div>
              <div className="flex items-end justify-between">
                <span className="text-white text-[14px] md:text-[18px] font-semibold">{s.val}</span>
                <div className="w-16 md:w-24 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0071e3] rounded-full" style={{ width: `${s.val}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Panel>
      <Panel title="Top alerts">
        <ul className="space-y-2">
          {['Heritage Intl. attendance dipped 4%', 'Sunrise fees collection at 68%', 'New AI report ready'].map((t) => (
            <li key={t} className="text-[10px] md:text-[11px] text-zinc-400 flex gap-1.5 leading-snug">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0071e3] shrink-0" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  </DashboardShell>
);

/* ============================ PRINCIPAL DASHBOARD ============================ */
const PrincipalDashboard = () => (
  <DashboardShell role="Principal" badgeColor="#003ECC" icon={<GraduationCap className="w-4 h-4 text-white" />}>
    <KpiRow
      items={[
        { icon: <Users className="w-3.5 h-3.5" />, label: 'Students', value: '1,284' },
        { icon: <CheckCircle2 className="w-3.5 h-3.5" />, label: 'Attendance', value: '96.4%' },
        { icon: <Award className="w-3.5 h-3.5" />, label: 'Avg. Score', value: '82.1' },
        { icon: <ClipboardList className="w-3.5 h-3.5" />, label: 'Tasks', value: '347' },
      ]}
      accent="#003ECC"
    />

    <div className="grid grid-cols-3 gap-2 md:gap-3 mt-3">
      <Panel className="col-span-2" title="Performance trend · Last 30 days">
        <svg viewBox="0 0 300 90" className="w-full h-[70px] md:h-[110px]">
          <defs>
            <linearGradient id="pgrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1166FF" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#1166FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 70 L25 60 L50 64 L75 50 L100 55 L125 38 L150 42 L175 30 L200 33 L225 22 L250 26 L275 14 L300 18 L300 90 L0 90 Z"
            fill="url(#pgrad)"
          />
          <path
            d="M0 70 L25 60 L50 64 L75 50 L100 55 L125 38 L150 42 L175 30 L200 33 L225 22 L250 26 L275 14 L300 18"
            fill="none"
            stroke="#1166FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Panel>
      <Panel title="AI alerts" icon={<AlertTriangle className="w-3 h-3 text-amber-400" />}>
        <ul className="space-y-2">
          {['Class 8B attendance dipped 6%', '3 students at retention risk', 'Math scores up 12% vs term'].map((t) => (
            <li key={t} className="text-[10px] md:text-[11px] text-zinc-400 flex gap-1.5 leading-snug">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#1166FF] shrink-0" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  </DashboardShell>
);

/* ============================== TEACHER DASHBOARD ============================ */
const TeacherDashboard = () => (
  <DashboardShell role="Teacher" badgeColor="#059669" icon={<BookOpen className="w-4 h-4 text-white" />}>
    <KpiRow
      items={[
        { icon: <BookOpen className="w-3.5 h-3.5" />, label: 'Classes', value: '6' },
        { icon: <Users className="w-3.5 h-3.5" />, label: 'Students', value: '184' },
        { icon: <ClipboardList className="w-3.5 h-3.5" />, label: 'To grade', value: '23' },
        { icon: <CalendarClock className="w-3.5 h-3.5" />, label: 'This week', value: '14' },
      ]}
      accent="#10b981"
    />

    <div className="grid grid-cols-3 gap-2 md:gap-3 mt-3">
      <Panel className="col-span-2" title="Today's classes">
        <div className="space-y-1.5">
          {[
            { time: '09:00', cls: 'Class 9A', subj: 'Algebra · Quadratic equations' },
            { time: '10:30', cls: 'Class 10B', subj: 'Geometry · Pythagoras' },
            { time: '12:15', cls: 'Class 11C', subj: 'Calculus · Limits' },
            { time: '14:00', cls: 'Class 9A', subj: 'Practice · Word problems' },
          ].map((r) => (
            <div
              key={r.time + r.cls}
              className="flex items-center gap-3 rounded-md border border-zinc-700/50 bg-zinc-800/40 p-2"
            >
              <span className="text-[10px] md:text-[11px] text-emerald-400 font-mono w-10">{r.time}</span>
              <span className="text-[10px] md:text-[12px] text-white font-medium w-16">{r.cls}</span>
              <span className="text-[10px] md:text-[11px] text-zinc-400 truncate">{r.subj}</span>
            </div>
          ))}
        </div>
      </Panel>
      <Panel title="Recent submissions" icon={<FileText className="w-3 h-3 text-emerald-400" />}>
        <ul className="space-y-2">
          {['Diya P. · Algebra HW', 'Aarav S. · Geometry test', 'Ishaan K. · Word problems', 'Maya R. · Practice set'].map((t) => (
            <li key={t} className="text-[10px] md:text-[11px] text-zinc-400 flex gap-1.5 leading-snug">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  </DashboardShell>
);

/* ========================= STUDENT / PARENT DASHBOARD ======================== */
const StudentParentDashboard = () => (
  <DashboardShell role="Parent · Aarav S." badgeColor="#d97706" icon={<Users className="w-4 h-4 text-white" />}>
    <KpiRow
      items={[
        { icon: <Award className="w-3.5 h-3.5" />, label: 'GPA', value: '8.6' },
        { icon: <CheckCircle2 className="w-3.5 h-3.5" />, label: 'Attendance', value: '94%' },
        { icon: <ClipboardList className="w-3.5 h-3.5" />, label: 'Pending', value: '3' },
        { icon: <Activity className="w-3.5 h-3.5" />, label: 'Subjects', value: '7' },
      ]}
      accent="#f59e0b"
    />

    <div className="grid grid-cols-3 gap-2 md:gap-3 mt-3">
      <Panel className="col-span-2" title="Subject performance">
        <div className="space-y-2">
          {[
            { name: 'Mathematics', score: 92 },
            { name: 'Physics', score: 84 },
            { name: 'Chemistry', score: 78 },
            { name: 'English', score: 88 },
            { name: 'Computer Science', score: 95 },
          ].map((s) => (
            <div key={s.name} className="flex items-center gap-3">
              <span className="text-[10px] md:text-[11px] text-zinc-300 w-28 md:w-36 shrink-0">{s.name}</span>
              <div className="flex-1 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: `${s.score}%` }} />
              </div>
              <span className="text-[10px] md:text-[11px] text-amber-400 font-semibold w-8 text-right">{s.score}</span>
            </div>
          ))}
        </div>
      </Panel>
      <Panel title="Upcoming" icon={<MessageSquare className="w-3 h-3 text-amber-400" />}>
        <ul className="space-y-2">
          {['Physics test · Mon', 'Maths assignment · Wed', 'PTM · Sat 11 AM', 'Sports day · 12 May'].map((t) => (
            <li key={t} className="text-[10px] md:text-[11px] text-zinc-400 flex gap-1.5 leading-snug">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  </DashboardShell>
);

/* ============================== Shared mock pieces ============================ */
const DashboardShell = ({
  role,
  badgeColor,
  icon,
  children,
}: {
  role: string;
  badgeColor: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="w-full h-full bg-zinc-900 rounded-xl p-3 md:p-5 flex flex-col">
    <div className="flex items-center justify-between mb-3 md:mb-4">
      <div className="flex items-center gap-2">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: badgeColor }}
        >
          {icon}
        </div>
        <span className="font-semibold text-white text-[13px] md:text-[14px]">Edullent</span>
        <span className="hidden md:inline text-[12px] text-zinc-500 ml-1">/ {role} dashboard</span>
      </div>
      <div className="flex items-center gap-3">
        <Bell className="w-4 h-4 text-zinc-400" />
        <div
          className="w-7 h-7 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${badgeColor}, #1166FF)`,
          }}
        />
      </div>
    </div>
    <div className="flex-1 min-h-0">{children}</div>
  </div>
);

const KpiRow = ({
  items,
  accent = '#0071e3',
}: {
  items: { icon: React.ReactNode; label: string; value: string }[];
  accent?: string;
}) => (
  <div className="grid grid-cols-4 gap-2 md:gap-3">
    {items.map((c) => (
      <div
        key={c.label}
        className="bg-zinc-800/60 rounded-xl border border-zinc-700/60 p-2.5 md:p-3"
      >
        <div className="flex items-center gap-1.5 text-zinc-400 text-[10px] md:text-[11px] mb-1">
          <span style={{ color: accent }}>{c.icon}</span>
          <span>{c.label}</span>
        </div>
        <div className="text-white font-semibold text-[15px] md:text-[20px] tracking-[-0.02em]">
          {c.value}
        </div>
      </div>
    ))}
  </div>
);

const Panel = ({
  title,
  icon,
  children,
  className = '',
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`bg-zinc-800/60 rounded-xl border border-zinc-700/60 p-3 md:p-4 ${className}`}>
    <div className="flex items-center gap-1.5 text-[11px] md:text-[13px] font-semibold text-white mb-2 md:mb-3">
      {icon}
      <span>{title}</span>
    </div>
    {children}
  </div>
);

export default RoleScrollShowcase;
