import { TCompanyDetailsTypes } from '@library/types/candidate/company-details';
import { TJobDetailsTypes } from '@library/types/candidate/job-details';

import { TBase } from '../../index';

export type TSavedJobListResponseTypes = TBase & {
    userId: string;
    companyId: string;
    jobId: string;
    companyInfo: TCompanyDetailsTypes;
    jobInfo: TJobDetailsTypes;
};
