import { z } from 'zod';

import { DateSchema } from '@library/schemas';

export const EducationSchema = z
    .object({
        levelOfEducation: z.string().min(1, 'levelOfEducationIsRequired'),
        degree: z.string().min(1, 'degreeIsRequired'),
        instituteName: z.string().min(1, 'instituteNameIsRequired'),
        location: z.string().min(1, 'locationIsRequired'),
        startingDate: DateSchema.REQUIRED,
        endingDate: DateSchema.OPTIONAL,
        isCurrentlyStudying: z.boolean(),
    })
    .refine(data => (!data.isCurrentlyStudying && data.endingDate) || (data.isCurrentlyStudying && !data.endingDate), {
        message: 'thisFieldIsRequired',
        path: ['endingDate'],
    });

export type TEducationSchema = z.infer<typeof EducationSchema>;
