import { z } from 'zod';

import { DateSchema } from '@library/schemas';

const AddressSchema = z.object({
    label: z.string(),
    lat: z.number(),
    lng: z.number(),
});

export const JobDetailSchema = z.object({
    jobType: z.array(z.string()).min(1, 'atLeastOneJobTypeIsRequired'),
    industry: z.string().min(1, 'atLeastOneIndustryIsRequired'),
    experienceLevel: z.array(z.string()).min(1, 'atLeastOneExperienceLevelIsRequired'),
    workArrangement: z.array(z.string()).min(1, 'atLeastOneWorkArrangementIsRequired'),
    educationLevel: z.array(z.string()).min(1, 'atLeastOneEducationLevelIsRequired'),
    applicationDeadline: DateSchema.REQUIRED,
    salaryRange: z.any().nullable(),
    jobTitle: z.string().min(1, 'jobTitleIsRequired'),
    companyName: z.string().min(1, 'companyNameIsRequired'),
    companyDescription: z.string().min(1, 'companyDescriptionIsRequired'),
    jobDescription: z.string().min(10, 'jobDescriptionIsRequired'),
    keyResponsibilities: z.string().min(10, 'keyResponsibilitiesAreRequired'),
    qualificationsAndRequirements: z.string().min(10, 'qualificationsRequirementsAreRequired'),
    salaryType: z.string().nullable(),
    isSalaryNegotiable: z.boolean(),
    isSponsored: z.boolean(),
    benefits: z.any().nullable(),
    salaryRangeFrom: z.any().transform(val => Number(val)),
    salaryRangeTo: z.any().transform(val => Number(val)),
    legalInformation: z.string().optional(),
    address: z.union([z.string().min(1, 'thisFieldIsRequired'), AddressSchema.refine(data => data.label !== '', { message: 'thisFieldIsRequired' })]),
    googleMapLink: z.string().optional(),
    vacancy: z.coerce.number().optional(),
});

export type TJobDetailSchema = z.infer<typeof JobDetailSchema>;

export const SchedulePostSchema = z.object({
    isPostSchedule: z.boolean(),
    time: DateSchema.REQUIRED,
    date: DateSchema.REQUIRED,
});

export const ScheduleUpdatePostSchema = z.object({
    isPostSchedule: z.boolean(),
    time: z.coerce.date(),
    date: DateSchema.REQUIRED,
});

export type TSchedulePostSchema = z.infer<typeof SchedulePostSchema>;
export type TUpdateSchedulePostSchema = z.infer<typeof ScheduleUpdatePostSchema>;

export const CombinedPostJobSchema = JobDetailSchema.merge(SchedulePostSchema);

export type TCombinedPostJobSchema = z.infer<typeof CombinedPostJobSchema>;
