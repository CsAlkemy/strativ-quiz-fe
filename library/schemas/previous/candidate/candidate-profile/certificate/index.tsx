import { z } from 'zod';

import { DateSchema } from '@library/schemas';

export const CertificateSchema = z.object({
    certificationOrLicenseName: z.string().min(1, 'certificationOrLicenseNameIsRequired'),
    instituteName: z.string().min(1, 'instituteNameIsRequired'),
    startDate: DateSchema.OPTIONAL,
    endDate: DateSchema.OPTIONAL,
    certificationDetails: z.string().min(1, 'certificationDetailsIsRequired'),
});

export type TCertificateSchema = z.infer<typeof CertificateSchema>;
