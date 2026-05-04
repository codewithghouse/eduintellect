/**
 * Map every USP id to the real iPad React component used on the marketing
 * site. These already include the IPadBezel chassis (silver / space-gray
 * frame with screen). Inside Remotion we render them at a fixed pixel
 * size so the inner 672-px design canvas scales correctly.
 */
import type { ComponentType } from 'react';

import OwnerStudentIntelligenceIPad from '../../components/ipad/OwnerStudentIntelligenceIPad';
import OwnerAIRiskPredictorIPad from '../../components/ipad/OwnerAIRiskPredictorIPad';
import OwnerTeacherPerformanceIPad from '../../components/ipad/OwnerTeacherPerformanceIPad';
import OwnerTeacherLeaderboardIPad from '../../components/ipad/OwnerTeacherLeaderboardIPad';
import OwnerBranchComparisonIPad from '../../components/ipad/OwnerBranchComparisonIPad';
import OwnerBrandLeaderboardIPad from '../../components/ipad/OwnerBrandLeaderboardIPad';
import OwnerRisksAlertsIPad from '../../components/ipad/OwnerRisksAlertsIPad';

import PrincipalDashboardIPad from '../../components/ipad/PrincipalDashboardIPad';
import PrincipalStudentIntelligenceIPad from '../../components/ipad/PrincipalStudentIntelligenceIPad';
import PrincipalRiskStudentsIPad from '../../components/ipad/PrincipalRiskStudentsIPad';
import PrincipalTeacherPerformanceIPad from '../../components/ipad/PrincipalTeacherPerformanceIPad';
import PrincipalTeacherLeaderboardIPad from '../../components/ipad/PrincipalTeacherLeaderboardIPad';
import PrincipalLeaderboardsIPad from '../../components/ipad/PrincipalLeaderboardsIPad';

import TeacherExamGeneratorIPad from '../../components/ipad/TeacherExamGeneratorIPad';
import TeacherBehaviourIPad from '../../components/ipad/TeacherBehaviourIPad';
import TeacherLeaderboardIPad from '../../components/ipad/TeacherLeaderboardIPad';
import TeacherPerformanceIPad from '../../components/ipad/TeacherPerformanceIPad';
import TeacherConceptMasteryIPad from '../../components/ipad/TeacherConceptMasteryIPad';
import TeacherRisksAlertsIPad from '../../components/ipad/TeacherRisksAlertsIPad';
import TeacherLessonPlannerIPad from '../../components/ipad/TeacherLessonPlannerIPad';
import TeacherSummarizeLessonIPad from '../../components/ipad/TeacherSummarizeLessonIPad';

import ParentDashboardIPad from '../../components/ipad/ParentDashboardIPad';
import ParentPerformanceIPad from '../../components/ipad/ParentPerformanceIPad';
import ParentConceptStrengthsIPad from '../../components/ipad/ParentConceptStrengthsIPad';
import ParentAIPracticeIPad from '../../components/ipad/ParentAIPracticeIPad';
import ParentBehaviourIPad from '../../components/ipad/ParentBehaviourIPad';
import ParentSyllabusIPad from '../../components/ipad/ParentSyllabusIPad';

export const ipadByUspId: Record<string, ComponentType> = {
  // Owner
  'owner-student-intel': OwnerStudentIntelligenceIPad,
  'owner-risk-predictor': OwnerAIRiskPredictorIPad,
  'owner-teacher-perf': OwnerTeacherPerformanceIPad,
  'owner-leaderboard': OwnerTeacherLeaderboardIPad,
  'owner-branches': OwnerBranchComparisonIPad,
  'owner-brand-leaderboard': OwnerBrandLeaderboardIPad,
  'owner-risks-alerts': OwnerRisksAlertsIPad,

  // Principal
  'principal-cmd-centre': PrincipalDashboardIPad,
  'principal-student-intel': PrincipalStudentIntelligenceIPad,
  'principal-risk-students': PrincipalRiskStudentsIPad,
  'principal-teacher-perf': PrincipalTeacherPerformanceIPad,
  'principal-leaderboard': PrincipalTeacherLeaderboardIPad,
  'principal-leaderboards': PrincipalLeaderboardsIPad,

  // Teacher
  'teacher-exam-gen': TeacherExamGeneratorIPad,
  'teacher-behaviour': TeacherBehaviourIPad,
  'teacher-leaderboard': TeacherLeaderboardIPad,
  'teacher-perf': TeacherPerformanceIPad,
  'teacher-concept-mastery': TeacherConceptMasteryIPad,
  'teacher-risks': TeacherRisksAlertsIPad,
  'teacher-lesson-planner': TeacherLessonPlannerIPad,
  'teacher-summarize': TeacherSummarizeLessonIPad,

  // Parent
  'parent-hero': ParentDashboardIPad,
  'parent-performance': ParentPerformanceIPad,
  'parent-concept': ParentConceptStrengthsIPad,
  'parent-practice': ParentAIPracticeIPad,
  'parent-behaviour': ParentBehaviourIPad,
  'parent-syllabus': ParentSyllabusIPad,
};
