import { z } from 'zod';

export const SocialAuthSchema = z.object({
    token: z.string().min(10, 'tokenIsRequired'),
    authType: z.string().min(1, 'authTypeIsRequired'),
    redirectUri: z.string().optional(),
    userType: z.string().optional(),
});

export type TSocialAuthSchema = z.infer<typeof SocialAuthSchema>;
