import { z } from 'zod';

const AddressSchema = z.object({
    label: z.string(),
    lat: z.number().or(z.string()),
    lng: z.number().or(z.string()),
});

export const ProfileIntroSchema = z.object({
    firstName: z.string().min(1, 'firstNameIsRequired'),
    lastName: z.string().min(1, 'lastNameIsRequired'),
    designation: z.string().min(1, 'designationIsRequired'),
    phoneNumber: z.string(),
    country: z.string().min(1, 'countryIsRequired'),
    city: z.string().min(1, 'cityIsRequired'),
    zipCode: z.string().min(1, 'zipCodeIsRequired'),
    address: z.union([z.string().min(1, 'addressIsRequired'), AddressSchema.refine(data => data.label !== '', { message: 'addressIsRequired' })]),
    linkedin: z.string().min(1, 'linkedInUrlIsRequired'),
});

export type TProfileIntroSchema = z.infer<typeof ProfileIntroSchema>;
