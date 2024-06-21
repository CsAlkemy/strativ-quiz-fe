import { z } from 'zod';

import { DateSchema } from '@library/schemas';

export const WorkExperienceSchema = z
    .object({
        companyName: z.string().min(1, 'companyNameIsRequired'),
        designation: z.string().min(1, 'designationIsRequired'),
        employmentFrom: DateSchema.REQUIRED,
        employmentTo: DateSchema.OPTIONAL,
        isCurrentlyWorking: z.boolean(),
        responsibilities: z.string().min(1, 'responsibilitiesIsRequired'),
    })
    .refine(data => (!data.isCurrentlyWorking && data.employmentTo) || (data.isCurrentlyWorking && !data.employmentTo), {
        message: 'thisFieldIsRequired',
        path: ['employmentTo'],
    });

export type TWorkExperienceSchema = z.infer<typeof WorkExperienceSchema>;
