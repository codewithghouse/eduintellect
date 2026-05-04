import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../data/theme';

type Props = {
  brand: string;
  bg: string;
  label: string;
  /**
   * ID of the role this screen belongs to — controls the layout variant
   * (sidebar vs. bottom-tab, KPI grid shape, etc.) so the four roles look
   * recognisably different on screen.
   */
  variant: 'owner' | 'principal' | 'teacher' | 'parent';
  /** USP id — used to pick the layout per-USP so each scene is unique */
  uspId: string;
  /** Role title shown in sidebar — drives sidebar context */
  roleTitle: string;
  /** Frame relative to the iPad's reveal — drives the screen's micro-animations */
  enterFrame?: number;
};

const Pill: React.FC<{ color: string; w?: number; h?: number; opacity?: number }> = ({
  color,
  w = 60,
  h = 6,
  opacity = 1,
}) => (
  <div
    style={{
      width: w,
      height: h,
      borderRadius: h / 2,
      background: color,
      opacity,
    }}
  />
);

const Card: React.FC<{
  children?: React.ReactNode;
  bg?: string;
  pad?: number;
  height?: number | string;
  style?: React.CSSProperties;
}> = ({ children, bg = '#fff', pad = 14, height, style }) => (
  <div
    style={{
      background: bg,
      borderRadius: 14,
      padding: pad,
      border: '0.5px solid #E5E8F0',
      boxShadow: '0 1px 2px rgba(15,23,42,0.04)',
      height,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style,
    }}
  >
    {children}
  </div>
);

const Sidebar: React.FC<{ brand: string; label: string; roleTitle: string; sections: string[] }> = ({
  brand,
  label,
  roleTitle,
  sections,
}) => (
  <div
    style={{
      width: 156,
      background: '#fff',
      borderRight: '0.5px solid #E5E8F0',
      padding: '18px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      flexShrink: 0,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: 7,
          background: brand,
          color: '#fff',
          fontWeight: 700,
          fontSize: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 4px 10px ${brand}40`,
        }}
      >
        E
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: theme.ink, letterSpacing: '-0.01em' }}>
          Edullent
        </span>
        <span style={{ fontSize: 9, color: theme.inkSoft, letterSpacing: '0.04em', textTransform: 'uppercase' as const }}>
          {roleTitle}
        </span>
      </div>
    </div>

    <div style={{ height: 1, background: '#EDEFF5' }} />

    {sections.map((s, i) => (
      <div
        key={s}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          padding: '7px 9px',
          borderRadius: 8,
          background: i === 0 ? `${brand}12` : 'transparent',
          color: i === 0 ? brand : theme.inkSoft,
          fontSize: 12,
          fontWeight: i === 0 ? 700 : 500,
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 4,
            background: i === 0 ? brand : '#D8DCE5',
          }}
        />
        {s}
      </div>
    ))}

    <div style={{ flex: 1 }} />

    <div
      style={{
        background: '#F4F6FB',
        border: '1px dashed #D8DCE5',
        borderRadius: 10,
        padding: 10,
        fontSize: 9,
        color: theme.inkSoft,
        textTransform: 'uppercase' as const,
        letterSpacing: '0.06em',
      }}
    >
      <div style={{ fontWeight: 700, color: theme.ink, marginBottom: 4, textTransform: 'none', letterSpacing: 0, fontSize: 11 }}>
        {label}
      </div>
      Live · synced
    </div>
  </div>
);

const KPIBlock: React.FC<{ brand: string; title: string; value: string; sub?: string; pulse?: number }> = ({
  brand,
  title,
  value,
  sub,
  pulse = 0,
}) => (
  <Card>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 10, fontWeight: 600, color: theme.inkSoft, textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>
        {title}
      </span>
      <div style={{ width: 8, height: 8, borderRadius: 4, background: brand, opacity: 0.6 + pulse * 0.4 }} />
    </div>
    <div style={{ fontSize: 28, fontWeight: 700, color: theme.ink, letterSpacing: '-0.025em', lineHeight: 1 }}>
      {value}
    </div>
    {sub && (
      <div style={{ fontSize: 10, color: brand, fontWeight: 600 }}>{sub}</div>
    )}
  </Card>
);

const Bar: React.FC<{ pct: number; brand: string; height?: number }> = ({ pct, brand, height = 6 }) => (
  <div style={{ width: '100%', background: '#EDEFF5', height, borderRadius: height / 2, overflow: 'hidden' }}>
    <div style={{ width: `${pct}%`, height: '100%', background: brand, borderRadius: height / 2 }} />
  </div>
);

/** Animated 30-day attendance trend (stylised SVG line). */
const TrendChart: React.FC<{ brand: string; frame: number; width?: number; height?: number }> = ({
  brand,
  frame,
  width = 360,
  height = 90,
}) => {
  const points = [
    [0, 0.6],
    [0.1, 0.5],
    [0.2, 0.55],
    [0.3, 0.4],
    [0.4, 0.35],
    [0.5, 0.5],
    [0.6, 0.3],
    [0.7, 0.42],
    [0.8, 0.25],
    [0.9, 0.32],
    [1, 0.18],
  ];
  const dash = interpolate(frame, [0, 50], [0, 1500], { extrapolateRight: 'clamp' });
  const path =
    'M ' +
    points
      .map((p) => `${(p[0] * width).toFixed(1)} ${(p[1] * height).toFixed(1)}`)
      .join(' L ');
  const fill =
    `M 0 ${height} L ` +
    points.map((p) => `${(p[0] * width).toFixed(1)} ${(p[1] * height).toFixed(1)}`).join(' L ') +
    ` L ${width} ${height} Z`;

  return (
    <svg width={width} height={height} style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`grad-${brand.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={brand} stopOpacity="0.30" />
          <stop offset="100%" stopColor={brand} stopOpacity="0.00" />
        </linearGradient>
      </defs>
      <path d={fill} fill={`url(#grad-${brand.replace('#', '')})`} />
      <path
        d={path}
        stroke={brand}
        strokeWidth={2.5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={1500}
        strokeDashoffset={1500 - dash}
      />
    </svg>
  );
};

/** Histogram for performance distribution */
const Histogram: React.FC<{ brand: string; frame: number; bars: number[] }> = ({ brand, frame, bars }) => (
  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 78, padding: '0 4px' }}>
    {bars.map((h, i) => {
      const grow = interpolate(frame, [10 + i * 4, 30 + i * 4], [0, h], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      });
      return (
        <div
          key={i}
          style={{
            flex: 1,
            background: i === 2 || i === 3 ? brand : `${brand}66`,
            height: grow,
            borderRadius: 6,
            alignSelf: 'flex-end',
          }}
        />
      );
    })}
  </div>
);

/** Heatmap (concept mastery / GitHub-style) */
const Heatmap: React.FC<{ brand: string; rows: number; cols: number; frame: number }> = ({
  brand,
  rows,
  cols,
  frame,
}) => {
  const cells: number[] = [];
  for (let i = 0; i < rows * cols; i++) {
    // Deterministic pseudo-random density
    cells.push(((i * 7 + 3) % 11) / 10);
  }
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: 4,
        height: '100%',
      }}
    >
      {cells.map((c, i) => {
        const reveal = interpolate(frame, [Math.floor(i / 3), Math.floor(i / 3) + 12], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        const intensity = c * 0.85 + 0.1;
        return (
          <div
            key={i}
            style={{
              background: `${brand}${Math.round(intensity * 200)
                .toString(16)
                .padStart(2, '0')}`,
              opacity: reveal,
              borderRadius: 4,
              border: '0.5px solid rgba(0,0,0,0.04)',
            }}
          />
        );
      })}
    </div>
  );
};

const PodiumStep: React.FC<{ rank: number; brand: string; height: number; name: string }> = ({
  rank,
  brand,
  height,
  name,
}) => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
    <div style={{ fontSize: 11, fontWeight: 700, color: theme.ink }}>{name}</div>
    <div
      style={{
        width: '85%',
        height,
        background: rank === 1 ? brand : rank === 2 ? '#C0C5CC' : '#A05A2C',
        borderRadius: '10px 10px 0 0',
        boxShadow: `0 6px 18px ${brand}40`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 700,
        fontSize: 22,
      }}
    >
      #{rank}
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   Per-USP layouts — one big switch keeps it simple
───────────────────────────────────────────────────────── */
export const DashboardScreen: React.FC<Props> = ({
  brand,
  bg,
  label,
  variant,
  uspId,
  roleTitle,
  enterFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps: _fps } = useVideoConfig();
  const t = frame - enterFrame;

  // Subtle pulse used by KPI dots
  const pulse = (Math.sin(t * 0.16) + 1) / 2;

  const fadeIn = interpolate(t, [0, 24], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const sidebarSections =
    variant === 'owner'
      ? ['Network', 'Branches', 'Students', 'Teachers', 'Risks', 'Settings']
      : variant === 'principal'
        ? ['Overview', 'Students', 'Academics', 'Operations', 'Comms', 'Settings']
        : variant === 'teacher'
          ? ['My Classes', 'Plan', 'Grade', 'Behaviour', 'AI Tools', 'Reports']
          : ['Overview', 'Performance', 'Concepts', 'Practice', 'Behaviour', 'Docs'];

  const renderBody = () => {
    switch (uspId) {
      /* ─── OWNER ─── */
      case 'owner-student-intel':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <RowOf5 brand={brand} pulse={pulse} kpis={[
              { t: 'Total', v: '8,412' },
              { t: 'At-Risk', v: '274', sub: '↓ 12 wk' },
              { t: 'Top 10%', v: '841', sub: '↑ 8 wk' },
              { t: 'Avg GPA', v: '3.42' },
              { t: 'Engaged', v: '94%' },
            ]} />
            <Card pad={16}>
              <CardHeader title="Performance Distribution" brand={brand} />
              <Histogram brand={brand} frame={t} bars={[28, 44, 70, 60, 32]} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: theme.inkSoft, marginTop: 4 }}>
                <span>0-40</span>
                <span>40-60</span>
                <span>60-75</span>
                <span>75-90</span>
                <span>90-100</span>
              </div>
            </Card>
            <Card pad={16}>
              <CardHeader title="Top 100 Students" brand={brand} subtle="Network-wide" />
              <TableRows brand={brand} rows={[
                ['Aisha Khan', 'Bandra · 9-A', '94', '↑ 6'],
                ['Rohan Shah', 'Jubilee · 10-B', '93', '↑ 4'],
                ['Mira Patel', 'Bandra · 9-C', '91', '↑ 3'],
                ['Karan Mehta', 'Powai · 10-A', '90', '↑ 2'],
              ]} />
            </Card>
            <AICard brand={brand} title="AI Brand Insight"
              body="Bandra's grade-9 cohort outperformed network avg by +0.32 this month. Differentiator: weekly mentor 1-on-1s introduced last term." />
          </BodyScroll>
        );

      case 'owner-risk-predictor':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <RowOf4 brand={brand} kpis={[
              { t: 'Critical', v: '36', sub: '+4 wk' },
              { t: 'At-Risk', v: '128' },
              { t: 'Watch', v: '241' },
              { t: 'Recovered', v: '18', sub: '+6 wk' },
            ]} />
            <Card pad={16}>
              <CardHeader title="Top Critical Students" brand={brand} subtle="Live signals" />
              <RiskRows brand={brand} />
            </Card>
            <Card pad={16}>
              <CardHeader title="Model Signal Weights" brand={brand} subtle="Explainable AI" />
              <SignalWeights brand={brand} />
            </Card>
          </BodyScroll>
        );

      case 'owner-teacher-perf':
      case 'principal-teacher-perf':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <RowOf4 brand={brand} kpis={[
              { t: 'Avg Composite', v: '78.4' },
              { t: 'Top Performers', v: '42' },
              { t: 'Need Coaching', v: '17' },
              { t: 'Parent NPS', v: '+62' },
            ]} />
            <Card pad={16}>
              <CardHeader title="Network Faculty Table" brand={brand} subtle={variant === 'owner' ? '259 teachers' : '46 teachers'} />
              <TeacherRows brand={brand} />
            </Card>
            <Card pad={16}>
              <CardHeader title="AI Mentor Pairings" brand={brand} />
              <PairRows brand={brand} />
            </Card>
          </BodyScroll>
        );

      case 'owner-leaderboard':
      case 'principal-leaderboard':
      case 'teacher-leaderboard':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <Card pad={16}>
              <CardHeader title="This Week's Podium" brand={brand} subtle="Composite score" />
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 110, marginTop: 8 }}>
                <PodiumStep rank={2} brand={brand} height={70} name="Priya S." />
                <PodiumStep rank={1} brand={brand} height={100} name="Anand K." />
                <PodiumStep rank={3} brand={brand} height={56} name="Meera J." />
              </div>
            </Card>
            <Card pad={16}>
              <CardHeader title={variant === 'teacher' ? 'You — and the rest' : 'Network rank list'} brand={brand} />
              <RankRows brand={brand} highlightSelf={variant === 'teacher'} />
            </Card>
          </BodyScroll>
        );

      case 'owner-branches':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <Card pad={16}>
              <CardHeader title="Branch Comparison Matrix" brand={brand} subtle="4 branches × 5 metrics" />
              <BranchMatrix brand={brand} />
            </Card>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <AICard brand={brand} title="Why Bandra wins"
                body="+18% practice consistency, parent NPS at +71, 0 fee defaults this quarter." />
              <AICard brand="#FF3355" title="Why Jubilee struggles"
                body="Att 84% (network avg 91%), 3 teacher exits in Q2, lagging on digital adoption." />
            </div>
          </BodyScroll>
        );

      case 'owner-brand-leaderboard':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <RowOf5 brand={brand} pulse={pulse} kpis={[
              { t: 'Branches', v: '4' },
              { t: 'Students', v: '8.4k' },
              { t: 'Teachers', v: '259' },
              { t: 'Avg', v: '3.4 GPA' },
              { t: 'Fees', v: '94%' },
            ]} />
            <Card pad={16}>
              <CardHeader title="Composite Ranking" brand={brand} />
              <RankBars brand={brand} />
            </Card>
            <Card pad={16}>
              <CardHeader title="6-month trends" brand={brand} subtle="Top 4 branches" />
              <TrendChart brand={brand} frame={t} width={420} height={92} />
            </Card>
          </BodyScroll>
        );

      case 'owner-risks-alerts':
      case 'principal-risk-students':
      case 'teacher-risks':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <RowOf4 brand={brand} kpis={
              variant === 'teacher'
                ? [
                    { t: 'Critical', v: '4' },
                    { t: 'At-Risk', v: '11' },
                    { t: 'Watch', v: '22' },
                    { t: 'Recovered', v: '6' },
                  ]
                : [
                    { t: 'Critical', v: '12', sub: 'NEW' },
                    { t: 'High', v: '34' },
                    { t: 'Medium', v: '88' },
                    { t: 'Resolved 30d', v: '141' },
                  ]
            } />
            <Card pad={16}>
              <CardHeader title="Live Alert Feed" brand={brand} subtle="Auto-prioritised" />
              <AlertRows brand={brand} />
            </Card>
            <AICard brand={brand} title="AI Intervention Plan"
              body="Schedule call with parents of top 3 critical students within 24h. Predicted recovery rate: 68%." />
          </BodyScroll>
        );

      /* ─── PRINCIPAL ─── */
      case 'principal-cmd-centre':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <Card pad={16}>
              <CardHeader title="Academic Health Index" brand={brand} subtle="Composite 0-100" />
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 6 }}>
                <span style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.03em', color: theme.ink, lineHeight: 1 }}>87</span>
                <span style={{ fontSize: 14, color: brand, fontWeight: 600 }}>↑ 4 vs last month</span>
              </div>
              <Bar pct={87} brand={brand} height={8} />
            </Card>
            <Card pad={16}>
              <CardHeader title="Today's Risk Alerts" brand="#FF3355" />
              <AlertRows brand="#FF3355" />
            </Card>
            <Card pad={16}>
              <CardHeader title="30-day Attendance Trend" brand={brand} />
              <TrendChart brand={brand} frame={t} width={420} height={86} />
            </Card>
          </BodyScroll>
        );

      case 'principal-student-intel':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              <KPIBlock brand="#FF3355" title="Weak" value="36" sub="Need help" pulse={pulse} />
              <KPIBlock brand="#FFAA00" title="Developing" value="118" sub="On the cusp" pulse={pulse} />
              <KPIBlock brand="#00C853" title="Smart" value="84" sub="Top tier" pulse={pulse} />
            </div>
            <Card pad={16}>
              <CardHeader title="Per-student tier cards" brand={brand} />
              <StudentTierRows brand={brand} />
            </Card>
            <AICard brand={brand} title="AI Class Intelligence"
              body="Act first on Devansh K. — attendance dropped from 92% → 71% in 14 days, marks down 22%. Notify parent + counsellor today." />
          </BodyScroll>
        );

      case 'principal-leaderboards':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <Card pad={16}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                {['Branches', 'Principals', 'Teachers', 'Students'].map((tab, i) => (
                  <div key={tab} style={{
                    padding: '6px 12px', borderRadius: 100,
                    background: i === 1 ? brand : '#F4F6FB',
                    color: i === 1 ? '#fff' : theme.inkSoft,
                    fontSize: 11, fontWeight: 600,
                  }}>{tab}</div>
                ))}
              </div>
              <RankRows brand={brand} highlightSelf={true} principalMode />
            </Card>
            <AICard brand={brand} title="Why Bandra wins · close-the-gap"
              body="Mentor 1-on-1 cadence: weekly vs your monthly. Predicted lift: +0.4 composite if adopted." />
          </BodyScroll>
        );

      /* ─── TEACHER ─── */
      case 'teacher-exam-gen':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <Card pad={16}>
              <CardHeader title="New Exam Paper" brand={brand} />
              <FormFields brand={brand} fields={[
                ['Subject', 'Science'],
                ['Grade', '9'],
                ['Chapters', '3 selected'],
                ['Difficulty', 'Mixed'],
              ]} />
              <Button label="Generate Paper" brand={brand} />
            </Card>
            <Card pad={16}>
              <CardHeader title="Bloom's-taxonomy Distribution" brand={brand} />
              <Histogram brand={brand} frame={t} bars={[36, 60, 50, 38, 28, 18]} />
            </Card>
            <Card pad={16}>
              <CardHeader title="Generated Sections" brand={brand} subtle="MCQ · Short · Long · Fill-in" />
              <ExamPreview brand={brand} />
            </Card>
          </BodyScroll>
        );

      case 'teacher-behaviour':
      case 'parent-behaviour':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <Card pad={16}>
              <CardHeader title="Behaviour Logger" brand={brand} subtle="5-second log" />
              <StarRating brand={brand} stars={5} />
              <FormFields brand={brand} fields={[['Tag', 'Positive']]} />
            </Card>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <KPIBlock brand={brand} title="Conduct" value="4.6" pulse={pulse} />
              <KPIBlock brand={brand} title="Punctuality" value="4.8" pulse={pulse} />
              <KPIBlock brand={brand} title="Respect" value="4.7" pulse={pulse} />
              <KPIBlock brand={brand} title="Participation" value="4.4" pulse={pulse} />
            </div>
            <Card pad={16}>
              <CardHeader title="6-month Trend" brand={brand} />
              <TrendChart brand={brand} frame={t} width={420} height={80} />
            </Card>
          </BodyScroll>
        );

      case 'teacher-perf':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <RowOf4 brand={brand} kpis={[
              { t: 'Composite', v: '82' },
              { t: 'Class Avg', v: '3.6' },
              { t: 'Parent NPS', v: '+58' },
              { t: 'Grading SLA', v: '94%' },
            ]} />
            <Card pad={16}>
              <CardHeader title="AI Diagnosis" brand={brand} />
              <p style={{ fontSize: 12, color: theme.ink, lineHeight: 1.5, margin: 0 }}>
                Your weakest signal this week: <b>grading speed</b> (median 3.4 days, school avg 1.8).
                Fix this and your composite jumps to <b>+1.8</b>.
              </p>
            </Card>
            <Card pad={16}>
              <CardHeader title="Action Checklist" brand={brand} subtle="Predicted impact" />
              <ChecklistRows brand={brand} />
            </Card>
          </BodyScroll>
        );

      case 'teacher-concept-mastery':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <Card pad={16}>
              <CardHeader title="Concept × Student Heat-map" brand={brand} subtle="Cold zones flagged" />
              <div style={{ height: 180 }}>
                <Heatmap brand={brand} rows={6} cols={14} frame={t} />
              </div>
            </Card>
            <AICard brand={brand} title="AI Re-teach Plan: Photosynthesis"
              body="Pair Rohan + Mira (peer tutoring), assign Khan Academy clip 3 + 4, run 5-question check-quiz Friday." />
          </BodyScroll>
        );

      case 'teacher-lesson-planner':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <Card pad={16}>
              <CardHeader title="Lesson Plan Builder" brand={brand} />
              <FormFields brand={brand} fields={[
                ['Chapter', 'Cells & Tissues'],
                ['Duration', '45 min'],
                ['Class Profile', '9-A · Mixed'],
                ['Board', 'CBSE'],
              ]} />
              <Button label="Generate Plan" brand={brand} />
            </Card>
            <Card pad={16}>
              <CardHeader title="Generated Plan" brand={brand} subtle="Curriculum-aware" />
              <PlanRows brand={brand} />
            </Card>
          </BodyScroll>
        );

      case 'teacher-summarize':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <Card pad={16}>
              <CardHeader title="Drop a chapter PDF" brand={brand} />
              <DropZone brand={brand} />
            </Card>
            <Card pad={16}>
              <CardHeader title="7 Study Sections" brand={brand} subtle="Generated in seconds" />
              <SummarySections brand={brand} />
            </Card>
          </BodyScroll>
        );

      /* ─── PARENT ─── */
      case 'parent-hero':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <RowOf4 brand={brand} kpis={[
              { t: 'GPA', v: '3.62' },
              { t: 'Attendance', v: '94%' },
              { t: 'Class Rank', v: '#7' },
              { t: 'Trend', v: '↑ +0.18' },
            ]} />
            <Card pad={16}>
              <CardHeader title="Subjects" brand={brand} subtle="vs class average" />
              <SubjectBars brand={brand} />
            </Card>
            <Card pad={16}>
              <CardHeader title="Behaviour Feed" brand={brand} subtle="Live from teachers" />
              <FeedRows brand={brand} />
            </Card>
          </BodyScroll>
        );

      case 'parent-performance':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <RowOf4 brand={brand} kpis={[
              { t: 'Grade', v: 'A-' },
              { t: 'Average', v: '86%' },
              { t: 'Trend', v: '↑ 4%' },
              { t: 'Class Rank', v: '#7 / 42' },
            ]} />
            <Card pad={16}>
              <CardHeader title="8-month Average Trend" brand={brand} />
              <TrendChart brand={brand} frame={t} width={420} height={88} />
            </Card>
            <Card pad={16}>
              <CardHeader title="Per-subject vs class average" brand={brand} />
              <SubjectBars brand={brand} />
            </Card>
          </BodyScroll>
        );

      case 'parent-concept':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              <KPIBlock brand="#00C853" title="Strong" value="22" sub="topics" pulse={pulse} />
              <KPIBlock brand="#FFAA00" title="Developing" value="11" sub="topics" pulse={pulse} />
              <KPIBlock brand="#FF3355" title="Focus" value="6" sub="topics" pulse={pulse} />
            </div>
            <Card pad={16}>
              <CardHeader title="Mastery — multi-subject" brand={brand} />
              <TrendChart brand={brand} frame={t} width={420} height={88} />
            </Card>
            <Card pad={16}>
              <CardHeader title="Per-topic %" brand={brand} subtle="Lowest 4" />
              <TopicBars brand={brand} />
            </Card>
          </BodyScroll>
        );

      case 'parent-practice':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <RowOf4 brand={brand} kpis={[
              { t: 'Streak', v: '14d' },
              { t: 'Attempts', v: '38' },
              { t: 'Avg', v: '78%' },
              { t: 'Topics', v: '12' },
            ]} />
            <Card pad={16}>
              <CardHeader title="6-week practice heatmap" brand={brand} />
              <div style={{ height: 78 }}>
                <Heatmap brand={brand} rows={7} cols={42} frame={t} />
              </div>
            </Card>
            <Card pad={16}>
              <CardHeader title="Recent attempts" brand={brand} />
              <PracticeRows brand={brand} />
            </Card>
          </BodyScroll>
        );

      case 'parent-syllabus':
        return (
          <BodyScroll fadeIn={fadeIn}>
            <Card pad={16}>
              <CardHeader title="Search documents" brand={brand} />
              <SearchBar brand={brand} />
              <FilterPills brand={brand} />
            </Card>
            <Card pad={16}>
              <CardHeader title="Recent uploads" brand={brand} subtle="From your child's teachers" />
              <DocRows brand={brand} />
            </Card>
          </BodyScroll>
        );

      default:
        return (
          <BodyScroll fadeIn={fadeIn}>
            <RowOf4 brand={brand} kpis={[
              { t: 'Live', v: '—' },
              { t: 'Live', v: '—' },
              { t: 'Live', v: '—' },
              { t: 'Live', v: '—' },
            ]} />
          </BodyScroll>
        );
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', background: bg, display: 'flex', overflow: 'hidden' }}>
      <Sidebar brand={brand} label={label} roleTitle={roleTitle} sections={sidebarSections} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <TopBar brand={brand} title={label} />
        {renderBody()}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   Sub-components used by the per-USP layouts
───────────────────────────────────────────────────────── */
const TopBar: React.FC<{ brand: string; title: string }> = ({ brand, title }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 18px',
      borderBottom: '0.5px solid #E5E8F0',
      background: '#fff',
      flexShrink: 0,
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span style={{ fontSize: 14, fontWeight: 700, color: theme.ink, letterSpacing: '-0.01em' }}>{title}</span>
      <span style={{ fontSize: 9, color: theme.inkSoft, letterSpacing: '0.04em', textTransform: 'uppercase' as const }}>
        Live · synced 2 sec ago
      </span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ padding: '5px 10px', borderRadius: 100, background: `${brand}14`, color: brand, fontSize: 10, fontWeight: 700 }}>
        v 4.2
      </div>
      <div style={{ width: 26, height: 26, borderRadius: '50%', background: brand, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>
        S
      </div>
    </div>
  </div>
);

const BodyScroll: React.FC<{ children: React.ReactNode; fadeIn: number }> = ({ children, fadeIn }) => (
  <div
    style={{
      flex: 1,
      padding: '14px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      overflow: 'hidden',
      background: '#F7F8FB',
      opacity: fadeIn,
    }}
  >
    {children}
  </div>
);

const CardHeader: React.FC<{ title: string; brand: string; subtle?: string }> = ({ title, brand, subtle }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span style={{ fontSize: 11, fontWeight: 700, color: theme.ink, letterSpacing: '-0.01em' }}>{title}</span>
    <span style={{ fontSize: 9, fontWeight: 600, color: subtle ? brand : theme.inkSoft, textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>
      {subtle ?? 'Live'}
    </span>
  </div>
);

const RowOf4: React.FC<{ brand: string; pulse?: number; kpis: { t: string; v: string; sub?: string }[] }> = ({ brand, pulse = 0, kpis }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 10 }}>
    {kpis.map((k) => (
      <KPIBlock key={k.t} brand={brand} title={k.t} value={k.v} sub={k.sub} pulse={pulse} />
    ))}
  </div>
);

const RowOf5: React.FC<{ brand: string; pulse?: number; kpis: { t: string; v: string; sub?: string }[] }> = ({ brand, pulse = 0, kpis }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
    {kpis.map((k) => (
      <KPIBlock key={k.t} brand={brand} title={k.t} value={k.v} sub={k.sub} pulse={pulse} />
    ))}
  </div>
);

const TableRows: React.FC<{ brand: string; rows: string[][] }> = ({ brand, rows }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    {rows.map((r, i) => (
      <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1.4fr 0.6fr 0.6fr', gap: 8, fontSize: 11, alignItems: 'center', padding: '6px 0', borderBottom: i < rows.length - 1 ? '0.5px solid #EDEFF5' : 'none' }}>
        <span style={{ fontWeight: 700, color: theme.ink }}>{r[0]}</span>
        <span style={{ color: theme.inkSoft }}>{r[1]}</span>
        <span style={{ color: theme.ink, fontWeight: 600 }}>{r[2]}</span>
        <span style={{ color: brand, fontWeight: 700, fontSize: 10 }}>{r[3]}</span>
      </div>
    ))}
  </div>
);

const RiskRows: React.FC<{ brand: string }> = ({ brand }) => {
  const data: [string, string, string][] = [
    ['Devansh K.', '9-A', 'Att 48% · Marks ↓ 24%'],
    ['Anaya R.', '8-B', 'Marks ↓ 18% · Beh -1.2'],
    ['Pranav D.', '10-C', 'Att 62% · Eng ↓ 30%'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {data.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 0.4fr 1.6fr', gap: 8, fontSize: 11, alignItems: 'center', padding: '8px 10px', borderRadius: 8, background: '#fff', border: '0.5px solid #FFD3DA' }}>
          <span style={{ fontWeight: 700, color: theme.ink }}>{r[0]}</span>
          <span style={{ color: theme.inkSoft }}>{r[1]}</span>
          <span style={{ color: brand, fontWeight: 600, fontSize: 10 }}>{r[2]}</span>
        </div>
      ))}
    </div>
  );
};

const SignalWeights: React.FC<{ brand: string }> = ({ brand }) => {
  const items = [
    ['Attendance', 38],
    ['Marks delta', 28],
    ['Behaviour', 18],
    ['Engagement', 16],
  ] as const;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      {items.map(([k, v]) => (
        <div key={k} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 36px', alignItems: 'center', gap: 10, fontSize: 11 }}>
          <span style={{ color: theme.ink, fontWeight: 600 }}>{k}</span>
          <Bar pct={v * 2.5} brand={brand} />
          <span style={{ color: brand, fontWeight: 700, fontSize: 10 }}>{v}%</span>
        </div>
      ))}
    </div>
  );
};

const TeacherRows: React.FC<{ brand: string }> = ({ brand }) => {
  const rows: [string, string, string, number][] = [
    ['Anand Kapoor', 'Math', 'Excellent', 92],
    ['Priya Shah', 'Science', 'Excellent', 88],
    ['Rajiv Mehta', 'English', 'Strong', 78],
    ['Meera J.', 'Social', 'Needs coach', 62],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr 1fr 0.6fr', gap: 8, fontSize: 11, alignItems: 'center', padding: '7px 10px', borderRadius: 8, background: '#fff', border: '0.5px solid #EDEFF5' }}>
          <span style={{ fontWeight: 700, color: theme.ink }}>{r[0]}</span>
          <span style={{ color: theme.inkSoft }}>{r[1]}</span>
          <span style={{ color: r[3] >= 80 ? '#00C853' : r[3] >= 70 ? '#FFAA00' : '#FF3355', fontWeight: 700, fontSize: 10 }}>{r[2]}</span>
          <span style={{ color: brand, fontWeight: 700 }}>{r[3]}</span>
        </div>
      ))}
    </div>
  );
};

const PairRows: React.FC<{ brand: string }> = ({ brand }) => {
  const rows: [string, string][] = [
    ['Anand K.', 'Meera J.'],
    ['Priya S.', 'Rajiv M.'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, padding: '7px 10px', borderRadius: 8, background: '#fff', border: '0.5px solid #EDEFF5' }}>
          <span style={{ fontWeight: 700, color: theme.ink }}>{r[0]}</span>
          <span style={{ color: theme.inkSoft }}>mentors</span>
          <span style={{ fontWeight: 700, color: theme.ink }}>{r[1]}</span>
          <span style={{ marginLeft: 'auto', padding: '3px 8px', borderRadius: 100, background: `${brand}18`, color: brand, fontWeight: 700, fontSize: 9 }}>+1.4 expected</span>
        </div>
      ))}
    </div>
  );
};

const RankRows: React.FC<{ brand: string; highlightSelf?: boolean; principalMode?: boolean }> = ({ brand, highlightSelf, principalMode }) => {
  const base = principalMode
    ? [['Bandra', '92'], ['Powai', '88'], ['Andheri', '83'], ['Jubilee', '76'], ['You', '81']]
    : [['Anand K.', '92'], ['Priya S.', '88'], ['You', '85'], ['Rajiv M.', '78'], ['Meera J.', '62']];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      {base.map((r, i) => {
        const isSelf = highlightSelf && r[0] === 'You';
        return (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '40px 1fr 1fr 60px', gap: 8,
            fontSize: 11, alignItems: 'center', padding: '7px 10px', borderRadius: 8,
            background: isSelf ? `${brand}14` : '#fff',
            border: isSelf ? `1.5px solid ${brand}` : '0.5px solid #EDEFF5',
          }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: brand }}>#{i + 1}</span>
            <span style={{ fontWeight: 700, color: theme.ink }}>{r[0]}</span>
            <Bar pct={Number(r[1])} brand={brand} />
            <span style={{ color: brand, fontWeight: 700, fontSize: 11 }}>{r[1]}</span>
          </div>
        );
      })}
    </div>
  );
};

const BranchMatrix: React.FC<{ brand: string }> = ({ brand }) => {
  const branches = ['Bandra', 'Powai', 'Andheri', 'Jubilee'];
  const metrics = ['Students', 'Avg Score', 'Attendance', 'Fees', 'NPS'];
  const data = [
    [2104, 3.7, 94, 96, 71],
    [1896, 3.5, 92, 94, 64],
    [1620, 3.4, 91, 93, 58],
    [1408, 3.0, 84, 81, 22],
  ];
  // Best per column
  const bestPerCol = metrics.map((_, c) => {
    let best = 0;
    for (let r = 0; r < data.length; r++) if ((data[r][c] as number) > (data[best][c] as number)) best = r;
    return best;
  });
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '90px repeat(5, 1fr)', gap: 6, fontSize: 9, color: theme.inkSoft, textTransform: 'uppercase' as const, letterSpacing: '0.05em', fontWeight: 700, padding: '0 8px 6px' }}>
        <span></span>
        {metrics.map((m) => <span key={m}>{m}</span>)}
      </div>
      {data.map((row, ri) => (
        <div key={ri} style={{ display: 'grid', gridTemplateColumns: '90px repeat(5, 1fr)', gap: 6, fontSize: 11, alignItems: 'center', padding: '7px 8px', borderRadius: 6, background: '#fff', border: '0.5px solid #EDEFF5' }}>
          <span style={{ fontWeight: 700, color: theme.ink }}>{branches[ri]}</span>
          {row.map((v, ci) => (
            <span key={ci} style={{ color: bestPerCol[ci] === ri ? brand : theme.ink, fontWeight: bestPerCol[ci] === ri ? 700 : 500 }}>
              {bestPerCol[ci] === ri ? '★ ' : ''}
              {v}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

const RankBars: React.FC<{ brand: string }> = ({ brand }) => {
  const rows: [string, number][] = [
    ['Bandra', 92],
    ['Powai', 88],
    ['Andheri', 83],
    ['Jubilee', 76],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {rows.map(([k, v]) => (
        <div key={k} style={{ display: 'grid', gridTemplateColumns: '90px 1fr 40px', gap: 10, alignItems: 'center', fontSize: 11 }}>
          <span style={{ fontWeight: 700, color: theme.ink }}>{k}</span>
          <Bar pct={v} brand={brand} height={10} />
          <span style={{ color: brand, fontWeight: 700, fontSize: 11 }}>{v}</span>
        </div>
      ))}
    </div>
  );
};

const AlertRows: React.FC<{ brand: string }> = ({ brand }) => {
  const rows: [string, string, string][] = [
    ['Critical', 'Bandra · 9-A', 'Attendance crashed -22% over 14 days'],
    ['High', 'Jubilee · Fees', '14 students past 30-day default'],
    ['High', 'Powai · 10-B', '3 incidents logged this week'],
    ['Medium', 'Andheri · Comms', 'Parent NPS dipped to +52'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 110px 1fr 80px', gap: 8, fontSize: 11, alignItems: 'center', padding: '8px 10px', borderRadius: 8, background: '#fff', border: '0.5px solid #EDEFF5' }}>
          <span style={{ fontSize: 9, fontWeight: 700, color: i === 0 ? '#FF3355' : i < 3 ? '#FF8800' : brand, letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>{r[0]}</span>
          <span style={{ color: theme.inkSoft }}>{r[1]}</span>
          <span style={{ color: theme.ink, fontWeight: 500 }}>{r[2]}</span>
          <span style={{ padding: '4px 8px', borderRadius: 100, background: `${brand}18`, color: brand, fontSize: 9, fontWeight: 700, textAlign: 'center' as const }}>Delegate</span>
        </div>
      ))}
    </div>
  );
};

const StudentTierRows: React.FC<{ brand: string }> = ({ brand: _brand }) => {
  const rows: [string, string, string, string][] = [
    ['Aisha Khan', 'Smart', '92%', 'Mentor candidate'],
    ['Devansh K.', 'Weak', '54%', 'Att 71% · low engagement'],
    ['Mira Patel', 'Developing', '76%', 'Concept gap: trigonometry'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.7fr 0.6fr 1.4fr', gap: 8, fontSize: 11, alignItems: 'center', padding: '7px 10px', borderRadius: 8, background: '#fff', border: '0.5px solid #EDEFF5' }}>
          <span style={{ fontWeight: 700, color: theme.ink }}>{r[0]}</span>
          <span style={{ padding: '3px 8px', borderRadius: 100, background: r[1] === 'Smart' ? '#00C85318' : r[1] === 'Weak' ? '#FF335518' : '#FFAA0018', color: r[1] === 'Smart' ? '#00C853' : r[1] === 'Weak' ? '#FF3355' : '#FFAA00', fontSize: 9, fontWeight: 700, textAlign: 'center' as const }}>{r[1]}</span>
          <span style={{ color: theme.ink, fontWeight: 700 }}>{r[2]}</span>
          <span style={{ color: theme.inkSoft, fontSize: 10 }}>{r[3]}</span>
        </div>
      ))}
    </div>
  );
};

const AICard: React.FC<{ brand: string; title: string; body: string }> = ({ brand, title, body }) => (
  <div
    style={{
      background: `linear-gradient(135deg, ${brand}14, ${brand}05)`,
      border: `1px solid ${brand}30`,
      borderRadius: 14,
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ width: 22, height: 22, borderRadius: 6, background: brand, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, boxShadow: `0 4px 10px ${brand}50` }}>✦</div>
      <span style={{ fontSize: 11, fontWeight: 700, color: brand, letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>{title}</span>
    </div>
    <p style={{ margin: 0, fontSize: 11, lineHeight: 1.55, color: theme.ink }}>{body}</p>
  </div>
);

const FormFields: React.FC<{ brand: string; fields: [string, string][] }> = ({ brand, fields }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
    {fields.map(([k, v]) => (
      <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '8px 10px', background: '#F4F6FB', borderRadius: 8, border: '0.5px solid #EDEFF5' }}>
        <span style={{ fontSize: 9, color: theme.inkSoft, textTransform: 'uppercase' as const, letterSpacing: '0.05em', fontWeight: 700 }}>{k}</span>
        <span style={{ fontSize: 12, color: theme.ink, fontWeight: 600 }}>{v}</span>
      </div>
    ))}
    <div style={{ position: 'absolute', width: 1, height: 1 }}>{brand}</div>
  </div>
);

const Button: React.FC<{ brand: string; label: string }> = ({ brand, label }) => (
  <div
    style={{
      marginTop: 6,
      background: brand,
      color: '#fff',
      borderRadius: 100,
      padding: '10px 18px',
      fontSize: 12,
      fontWeight: 700,
      textAlign: 'center' as const,
      boxShadow: `0 8px 18px ${brand}50`,
      letterSpacing: '-0.01em',
    }}
  >
    {label} →
  </div>
);

const ExamPreview: React.FC<{ brand: string }> = ({ brand }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    {['Q1. Define photosynthesis. (2 marks)', 'Q2. MCQ × 5 — pick correct option', 'Q3. Long answer — Explain mitosis (5 marks)'].map((q) => (
      <div key={q} style={{ padding: '8px 12px', background: '#fff', borderRadius: 8, border: '0.5px solid #EDEFF5', fontSize: 11, color: theme.ink }}>
        <span style={{ color: brand, fontWeight: 700 }}>•</span> {q}
      </div>
    ))}
  </div>
);

const StarRating: React.FC<{ brand: string; stars: number }> = ({ brand, stars }) => (
  <div style={{ display: 'flex', gap: 6, padding: '8px 0' }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} style={{ fontSize: 24, color: i < stars ? brand : '#E5E8F0' }}>★</span>
    ))}
  </div>
);

const ChecklistRows: React.FC<{ brand: string }> = ({ brand }) => {
  const rows: [boolean, string, string][] = [
    [true, 'Grade pending submissions in 24h', '+0.5'],
    [false, 'Reply to 3 parent messages', '+0.4'],
    [false, 'Submit lesson plan for next week', '+1.0'],
    [false, 'Run concept-check quiz Friday', '+1.3'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 10px', borderRadius: 8, background: '#fff', border: '0.5px solid #EDEFF5' }}>
          <div style={{ width: 16, height: 16, borderRadius: 4, background: r[0] ? brand : '#fff', border: `1.5px solid ${r[0] ? brand : '#D8DCE5'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 800 }}>{r[0] ? '✓' : ''}</div>
          <span style={{ flex: 1, fontSize: 11, color: theme.ink, textDecoration: r[0] ? 'line-through' : 'none' }}>{r[1]}</span>
          <span style={{ padding: '3px 8px', borderRadius: 100, background: `${brand}18`, color: brand, fontSize: 9, fontWeight: 800 }}>{r[2]}</span>
        </div>
      ))}
    </div>
  );
};

const PlanRows: React.FC<{ brand: string }> = ({ brand }) => {
  const rows: [string, string, string][] = [
    ['Hook', '5 min', 'Real-life example: pizza dough rising'],
    ['Concept', '15 min', 'What is a cell · diagram + 3D model'],
    ['Activity', '15 min', 'Pair task: label cell parts on paper'],
    ['Wrap', '10 min', 'Exit ticket: 3 questions'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 60px 1fr', gap: 10, alignItems: 'center', fontSize: 11, padding: '8px 10px', borderRadius: 8, background: '#fff', border: '0.5px solid #EDEFF5' }}>
          <span style={{ fontWeight: 700, color: brand }}>{r[0]}</span>
          <span style={{ color: theme.inkSoft }}>{r[1]}</span>
          <span style={{ color: theme.ink }}>{r[2]}</span>
        </div>
      ))}
    </div>
  );
};

const DropZone: React.FC<{ brand: string }> = ({ brand }) => (
  <div
    style={{
      border: `2px dashed ${brand}50`,
      borderRadius: 14,
      padding: 28,
      textAlign: 'center' as const,
      background: `${brand}06`,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'center',
    }}
  >
    <div style={{ width: 44, height: 44, borderRadius: 12, background: brand, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, boxShadow: `0 8px 18px ${brand}40` }}>↑</div>
    <span style={{ fontSize: 13, fontWeight: 700, color: theme.ink }}>Drop chapter PDF</span>
    <span style={{ fontSize: 10, color: theme.inkSoft }}>Up to 20MB · text-based PDFs</span>
  </div>
);

const SummarySections: React.FC<{ brand: string }> = ({ brand }) => {
  const sections = ['Quick Summary', 'Key Concepts', 'Must Remember', 'Worked Examples', 'Practice Qs', 'Parent Note', 'Vocabulary'];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
      {sections.map((s) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 8, background: '#fff', border: '0.5px solid #EDEFF5' }}>
          <div style={{ width: 6, height: 6, borderRadius: 3, background: brand }} />
          <span style={{ fontSize: 11, color: theme.ink, fontWeight: 600 }}>{s}</span>
        </div>
      ))}
    </div>
  );
};

const SubjectBars: React.FC<{ brand: string }> = ({ brand }) => {
  const subjects: [string, number, number][] = [
    ['Math', 88, 78],
    ['Science', 84, 80],
    ['English', 76, 81],
    ['Social', 72, 74],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {subjects.map(([k, you, avg]) => (
        <div key={k} style={{ display: 'grid', gridTemplateColumns: '70px 1fr 50px', gap: 10, alignItems: 'center', fontSize: 11 }}>
          <span style={{ fontWeight: 600, color: theme.ink }}>{k}</span>
          <div style={{ position: 'relative', height: 10, background: '#EDEFF5', borderRadius: 5 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${you}%`, background: brand, borderRadius: 5 }} />
            <div style={{ position: 'absolute', left: `${avg}%`, top: -4, width: 2, height: 18, background: theme.ink, opacity: 0.65 }} />
          </div>
          <span style={{ color: brand, fontWeight: 700 }}>{you}%</span>
        </div>
      ))}
    </div>
  );
};

const FeedRows: React.FC<{ brand: string }> = ({ brand: _brand }) => {
  const rows: [string, string, 'pos' | 'concern'][] = [
    ['Mrs. Sharma · Math', 'Aisha solved board problem unaided ★★★★★', 'pos'],
    ['Mr. Iyer · Science', 'Forgot lab notebook — please remind', 'concern'],
    ['Mrs. Kapur · English', 'Submitted essay 2 days early ★★★★', 'pos'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '6px 1fr', gap: 10, padding: '8px 10px', borderRadius: 8, background: '#fff', border: '0.5px solid #EDEFF5' }}>
          <div style={{ width: 4, borderRadius: 2, background: r[2] === 'pos' ? '#00C853' : '#FFAA00' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: 10, color: theme.inkSoft, fontWeight: 600 }}>{r[0]}</span>
            <span style={{ fontSize: 11, color: theme.ink }}>{r[1]}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const TopicBars: React.FC<{ brand: string }> = ({ brand }) => {
  const topics: [string, number][] = [
    ['Photosynthesis', 42],
    ['Linear equations', 51],
    ['Tenses', 56],
    ['Mitosis', 60],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {topics.map(([k, v]) => (
        <div key={k} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 38px', gap: 10, alignItems: 'center', fontSize: 11 }}>
          <span style={{ color: theme.ink, fontWeight: 600 }}>{k}</span>
          <Bar pct={v} brand={brand} />
          <span style={{ color: brand, fontWeight: 700 }}>{v}%</span>
        </div>
      ))}
    </div>
  );
};

const PracticeRows: React.FC<{ brand: string }> = ({ brand }) => {
  const rows: [string, string, string][] = [
    ['Trigonometry · Set 14', 'Today', '8/10'],
    ['Photosynthesis · Set 12', 'Yesterday', '6/10'],
    ['Tenses · Set 11', '2d ago', '9/10'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 70px 50px', gap: 10, fontSize: 11, padding: '8px 10px', borderRadius: 8, background: '#fff', border: '0.5px solid #EDEFF5' }}>
          <span style={{ fontWeight: 600, color: theme.ink }}>{r[0]}</span>
          <span style={{ color: theme.inkSoft }}>{r[1]}</span>
          <span style={{ color: brand, fontWeight: 700 }}>{r[2]}</span>
        </div>
      ))}
    </div>
  );
};

const SearchBar: React.FC<{ brand: string }> = ({ brand }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', borderRadius: 10, background: '#F4F6FB', border: '0.5px solid #EDEFF5' }}>
    <span style={{ color: brand }}>⌕</span>
    <span style={{ fontSize: 11, color: theme.inkSoft, flex: 1 }}>Search syllabus, notes, worksheets…</span>
  </div>
);

const FilterPills: React.FC<{ brand: string }> = ({ brand }) => (
  <div style={{ display: 'flex', gap: 6 }}>
    {['All', 'PDF', 'Doc', 'XLS', 'Img'].map((p, i) => (
      <span key={p} style={{ padding: '5px 11px', borderRadius: 100, background: i === 1 ? brand : '#F4F6FB', color: i === 1 ? '#fff' : theme.inkSoft, fontSize: 10, fontWeight: 700 }}>{p}</span>
    ))}
  </div>
);

const DocRows: React.FC<{ brand: string }> = ({ brand }) => {
  const rows: [string, string, string, boolean][] = [
    ['Math · Algebra worksheet', 'Mrs. Sharma', 'Today', true],
    ['Science · Cells syllabus', 'Mr. Iyer', '2d ago', true],
    ['English · Essay rubric', 'Mrs. Kapur', '5d ago', false],
    ['Social · Map exercise', 'Mr. Patel', '1w ago', false],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 90px 60px 50px', gap: 10, alignItems: 'center', fontSize: 11, padding: '8px 10px', borderRadius: 8, background: '#fff', border: '0.5px solid #EDEFF5' }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: brand + '18', color: brand, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800 }}>PDF</div>
          <span style={{ fontWeight: 600, color: theme.ink }}>{r[0]}</span>
          <span style={{ color: theme.inkSoft }}>{r[1]}</span>
          <span style={{ color: theme.inkSoft }}>{r[2]}</span>
          {r[3]
            ? <span style={{ padding: '3px 8px', borderRadius: 100, background: brand, color: '#fff', fontSize: 9, fontWeight: 800, textAlign: 'center' as const }}>NEW</span>
            : <span style={{ padding: '3px 8px', borderRadius: 100, background: '#F4F6FB', color: theme.inkSoft, fontSize: 9, fontWeight: 700, textAlign: 'center' as const }}>View</span>}
        </div>
      ))}
    </div>
  );
};

// Suppress unused-Pill warning (used internally elsewhere if needed)
void Pill;
