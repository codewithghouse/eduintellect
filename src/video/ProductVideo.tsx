import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { theme } from './data/theme';
import { roles } from './data/usps';
import { IntroScene } from './scenes/IntroScene';
import { OutroScene } from './scenes/OutroScene';
import { StatScene } from './scenes/StatScene';
import { RoleSection } from './components/RoleSection';
import { SceneTransition } from './components/SceneTransition';

/* ─────────────────────────────────────────────────────────────
   TIMING — total target ~17,200 frames (≈9:34 @ 30fps)

   ┌──────────────┬────────┬─────────┬────────────────────┐
   │ Scene        │ Frames │ Seconds │ Notes              │
   ├──────────────┼────────┼─────────┼────────────────────┤
   │ Intro        │   450  │  15.0   │ Logo / tagline     │
   │ Stat: Owner  │   135  │   4.5   │ "1 in 3 dropouts"  │
   │ Owner        │  3870  │ 129.0   │ 6 USPs × 635 + 60  │
   │ Stat: Princ. │   135  │   4.5   │ "Save 9 hrs/wk"    │
   │ Principal    │  3690  │ 123.0   │ 6 USPs × 605 + 60  │
   │ Stat: Teach. │   135  │   4.5   │ "30-second exam"   │
   │ Teacher      │  4140  │ 138.0   │ 8 USPs × 510 + 60  │
   │ Stat: Parent │   135  │   4.5   │ "Live, every day"  │
   │ Parent       │  3960  │ 132.0   │ 6 USPs × 650 + 60  │
   │ Outro        │   480  │  16.0   │ Roles + URL        │
   ├──────────────┼────────┼─────────┼────────────────────┤
   │ TOTAL        │ 17130  │ 571.0   │  ≈ 9 min 31 sec    │
   └──────────────┴────────┴─────────┴────────────────────┘
─────────────────────────────────────────────────────────── */

export const FPS = 30;

const INTRO_DUR = 450;
const OUTRO_DUR = 480;
const STAT_DUR = 135;
const ROLE_INTRO_HOLD = 60;

type RolePlan = { id: typeof roles[number]['id']; total: number; stat: { eyebrow: string; value: string; label: string; hint?: string } };

const rolePlans: RolePlan[] = [
  {
    id: 'owner',
    total: 3870,
    stat: {
      eyebrow: 'For school owners',
      value: '1 in 3',
      label: 'students at risk goes unnoticed until exam day.',
      hint: 'Edullent catches them six weeks earlier.',
    },
  },
  {
    id: 'principal',
    total: 3690,
    stat: {
      eyebrow: 'For principals',
      value: '9 hrs',
      label: 'saved every week — on reports, alerts, and follow-ups.',
      hint: 'Live academic health · today\'s alerts · in one place.',
    },
  },
  {
    id: 'teacher',
    total: 4140,
    stat: {
      eyebrow: 'For teachers',
      value: '30 s',
      label: 'to a full exam paper, lesson plan or chapter summary.',
      hint: 'Eight AI tools, one personal coach.',
    },
  },
  {
    id: 'parent',
    total: 3960,
    stat: {
      eyebrow: 'For parents',
      value: 'Live',
      label: 'grades, behaviour, attendance — every day, in your pocket.',
      hint: 'No more waiting for parent-teacher meetings.',
    },
  },
];

const roleByPlan = (id: RolePlan['id']) => roles.find((r) => r.id === id)!;

const getUspDuration = (plan: RolePlan) => {
  const role = roleByPlan(plan.id);
  return Math.floor((plan.total - ROLE_INTRO_HOLD) / role.usps.length);
};

export const TOTAL_FRAMES =
  INTRO_DUR + rolePlans.reduce((acc, p) => acc + STAT_DUR + p.total, 0) + OUTRO_DUR;

export const ProductVideo: React.FC = () => {
  let cursor = 0;
  return (
    <AbsoluteFill style={{ background: theme.bgDark }}>
      {/* Intro */}
      <Sequence from={cursor} durationInFrames={INTRO_DUR}>
        <SceneTransition totalFrames={INTRO_DUR}>
          <IntroScene durationInFrames={INTRO_DUR} />
        </SceneTransition>
      </Sequence>
      {(cursor += INTRO_DUR, null)}

      {/* For each role: Stat scene → Role section */}
      {rolePlans.map((plan) => {
        const role = roleByPlan(plan.id);
        const uspDuration = getUspDuration(plan);
        const statStart = cursor;
        cursor += STAT_DUR;
        const roleStart = cursor;
        cursor += plan.total;
        return (
          <React.Fragment key={plan.id}>
            <Sequence from={statStart} durationInFrames={STAT_DUR}>
              <SceneTransition totalFrames={STAT_DUR}>
                <StatScene
                  durationInFrames={STAT_DUR}
                  eyebrow={plan.stat.eyebrow}
                  value={plan.stat.value}
                  label={plan.stat.label}
                  hint={plan.stat.hint}
                  accent={role.accent}
                />
              </SceneTransition>
            </Sequence>
            <Sequence from={roleStart} durationInFrames={plan.total}>
              <SceneTransition totalFrames={plan.total}>
                <RoleSection role={role} uspDuration={uspDuration} introHold={ROLE_INTRO_HOLD} />
              </SceneTransition>
            </Sequence>
          </React.Fragment>
        );
      })}

      {/* Outro */}
      <Sequence from={cursor} durationInFrames={OUTRO_DUR}>
        <SceneTransition totalFrames={OUTRO_DUR}>
          <OutroScene durationInFrames={OUTRO_DUR} />
        </SceneTransition>
      </Sequence>
    </AbsoluteFill>
  );
};
