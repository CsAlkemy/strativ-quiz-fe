import { z } from 'zod';

import { ShareLocationSchema as CandidateShareLocationSchema } from '@library/schemas/candidate/auth/onboarding/onboarding.schema';

export const ConnectLinkedinSchema = z.object({
    link: z.string({ required_error: 'linkIsRequired' }).min(1, 'linkIsRequired'),
});

export const ShareLocationSchema = CandidateShareLocationSchema;

export const ProfileImageSchema = z.object({
    name: z.string({ required_error: 'nameIsRequired' }).min(1, 'fileNameIsRequired'),
    size: z.number({ required_error: 'sizeIsRequired' }).min(1, 'sizeIsRequired'),
    extension: z.string({ required_error: 'extensionIsRequired' }).min(1, 'extensionIsRequired'),
    folder: z.string().optional(),
});

export type TConnectLinkedin = z.infer<typeof ConnectLinkedinSchema>;
export type TShareLocation = z.infer<typeof ShareLocationSchema>;
export type TProfileImage = z.infer<typeof ProfileImageSchema>;
