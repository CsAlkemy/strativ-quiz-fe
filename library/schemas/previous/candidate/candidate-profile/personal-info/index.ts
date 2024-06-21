import { z } from 'zod';

import { DateSchema } from '@library/schemas';

export const PersonalInfoSchema = z.object({
    dob: DateSchema.REQUIRED,
    citizenship: z.string().min(1, 'citizenshipIsRequired'),
    workAuthorization: z.string().min(1, 'workAuthorizationIsRequired'),
    gender: z.string().min(1, 'genderIsRequired'),
    maritalStatus: z.string().min(1, 'maritalStatusIsRequired'),
});

export type TPersonalInfoSchema = z.infer<typeof PersonalInfoSchema>;
