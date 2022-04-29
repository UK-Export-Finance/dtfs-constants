import { GROUP_TITLES } from "./groupTitles.constant";
import { AIN_AND_MIA } from "./ainAndMia.constant";
import { BUSINESS_SUPPORT } from '../teams';

export const AIN = {
  GROUP_1: {
    GROUP_TITLE: GROUP_TITLES.SETUP_DEAL,
    TASKS: [
      {
        title: AIN_AND_MIA.GROUP_1.MATCH_OR_CREATE_PARTIES,
        team: BUSINESS_SUPPORT,
        isConditional: true,
      },
      {
        title: AIN_AND_MIA.GROUP_1.CREATE_OR_LINK_SALESFORCE,
        team: BUSINESS_SUPPORT,
      },
    ],
  },
};