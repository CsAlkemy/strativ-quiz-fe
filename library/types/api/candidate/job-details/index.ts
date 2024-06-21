import { TJobDetailsTypes } from '@library/types/candidate';

import { TBase } from '../..';

export type TJobDetailsResponseType = TBase & {
    applyJobStatus: unknown;
    isApplyJob: boolean;
    isSaveJob: boolean;
    jobDetails: TJobDetailsTypes;
    totalApply: number;
};
