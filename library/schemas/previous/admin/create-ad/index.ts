import { z } from 'zod';

export const CreateAdSchema = z.object({
    companyName: z.string().min(3, 'Company Name is required!'),
    email: z.string({ required_error: 'Email is required!' }).email('Valid email is required!'),
    title: z.string().min(3, 'Title is required!'),
    banner: z.string().min(3, 'thisFieldIsRequired'),
    bannerSm: z.string().optional(),
});

export type TCreateAdSchema = z.infer<typeof CreateAdSchema>;
