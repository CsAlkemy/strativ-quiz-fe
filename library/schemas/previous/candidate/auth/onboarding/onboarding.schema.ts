import { z } from 'zod';

import { CommonAddressSchema } from '@library/schemas';

export const ConnectLinkedinSchema = z.object({
    link: z.string({ required_error: 'linkIsRequired' }).min(1, 'linkIsRequired'),
});

export const ShareLocationSchema = z.object({
    country: z.string({ required_error: 'countryIsRequired' }).min(1, 'countryIsRequired'),
    city: z.string({ required_error: 'cityIsRequired' }).min(1, 'cityIsRequired'),
    address: z.union([
        z.string().min(1, 'addressIsRequired'),
        CommonAddressSchema.refine(data => data.label !== '', { message: 'addressIsRequired' }),
    ]),
    latitude: z.number().optional().nullable(),
    longitude: z.number().optional().nullable(),
});

export const ProfileImageSchema = z.object({
    name: z.string({ required_error: 'nameIsRequired' }).min(1, 'fileNameIsRequired'),
    size: z.number({ required_error: 'sizeIsRequired' }).min(1, 'sizeIsRequired'),
    extension: z.string({ required_error: 'extensionIsRequired' }).min(1, 'extensionIsRequired'),
    folder: z.string().optional(),
});

export type TConnectLinkedin = z.infer<typeof ConnectLinkedinSchema>;
export type TShareLocation = z.infer<typeof ShareLocationSchema>;
export type TProfileImage = z.infer<typeof ProfileImageSchema>;
