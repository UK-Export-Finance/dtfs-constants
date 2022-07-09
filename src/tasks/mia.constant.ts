import { GROUP_TITLES } from './groupTitles.constant';
import { AIN_AND_MIA } from './ainAndMia.constant';
import { MIA_GROUP_1_TASKS } from './miaGroupOneTasks.constant';
import { MIA_GROUP_3_TASKS } from './miaGroupThreeTasks.constant';
import { MIA_GROUP_4_TASKS } from './miaGroupFourTasks.constant';
import { MIA_ADVERSE_HISTORY_GROUP_TASKS } from './miaAdverseHistoryGroupTasks.constant';
import { BUSINESS_SUPPORT, UNDERWRITER_MANAGERS, UNDERWRITERS, RISK_MANAGERS, UNDERWRITING_SUPPORT } from '../teams';

export const MIA = {
  GROUP_1: {
    id: 1,
    GROUP_TITLE: GROUP_TITLES.SETUP_DEAL,
    TASKS: [
      {
        groupId: 1,
        title: AIN_AND_MIA.GROUP_1.MATCH_OR_CREATE_PARTIES,
        team: BUSINESS_SUPPORT,
        isConditional: true,
      },
      {
        groupId: 1,
        title: AIN_AND_MIA.GROUP_1.CREATE_OR_LINK_SALESFORCE,
        team: BUSINESS_SUPPORT,
      },
      {
        groupId: 1,
        title: MIA_GROUP_1_TASKS.FILE_ALL_DEAL_EMAILS,
        team: UNDERWRITING_SUPPORT,
      },
      {
        title: MIA_GROUP_1_TASKS.COMPLETE_AGENT_CHECK,
        team: UNDERWRITING_SUPPORT,
        isConditional: true,
      },
      {
        groupId: 1,
        title: MIA_GROUP_1_TASKS.CREATE_CREDIT_ANALYSIS_DOCUMENT,
        team: UNDERWRITING_SUPPORT,
      },
      {
        groupId: 1,
        title: MIA_GROUP_1_TASKS.ASSIGN_AN_UNDERWRITER,
        team: UNDERWRITER_MANAGERS,
      },
    ],
  },
  GROUP_2: {
    id: 2,
    GROUP_TITLE: GROUP_TITLES.ADVERSE_HISTORY,
    TASKS: [
      {
        groupId: 2,
        title: MIA_ADVERSE_HISTORY_GROUP_TASKS.COMPLETE_ADVERSE_HISTORY_CHECK,
        team: UNDERWRITERS,
      },
    ],
  },
  GROUP_3: {
    id: 3,
    GROUP_TITLE: GROUP_TITLES.UNDERWRITING,
    TASKS: [
      {
        groupId: 3,
        title: MIA_GROUP_3_TASKS.CHECK_EXPOSURE,
        team: UNDERWRITERS,
      },
      {
        groupId: 3,
        title: MIA_GROUP_3_TASKS.GIVE_EXPORTER_A_CREDIT_RATING,
        team: UNDERWRITERS,
      },
      {
        groupId: 3,
        title: MIA_GROUP_3_TASKS.COMPLETE_CREDIT_ANALYSIS,
        team: UNDERWRITERS,
      },
    ],
  },
  GROUP_4: {
    id: 4,
    GROUP_TITLE: GROUP_TITLES.APPROVALS,
    TASKS: [
      {
        groupId: 4,
        title: MIA_GROUP_4_TASKS.CHECK_ADVERSE_HISTORY_CHECK,
        team: UNDERWRITER_MANAGERS,
      },
      {
        groupId: 4,
        title: MIA_GROUP_4_TASKS.CHECK_THE_CREDIT_ANALYSIS,
        team: UNDERWRITER_MANAGERS,
      },
      {
        groupId: 4,
        title: MIA_GROUP_4_TASKS.COMPLETE_RISK_ANALYSIS,
        team: RISK_MANAGERS,
      },
      {
        groupId: 4,
        title: MIA_GROUP_4_TASKS.APPROVE_OR_DECLINE_THE_DEAL,
        team: UNDERWRITER_MANAGERS,
      },
    ],
  },
};
