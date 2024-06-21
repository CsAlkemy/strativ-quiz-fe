import { z } from 'zod';

export const SocialTokenSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    value: z.string().min(1, 'Facebook token is required'),
});

export type TSocialTokenSchema = z.infer<typeof SocialTokenSchema>;
