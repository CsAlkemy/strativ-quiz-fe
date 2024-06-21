import { z } from 'zod';

export const SocialLinksSchema = z.object({
    name: z.string().min(1, 'nameIsRequired'),
    link: z.string().min(1, 'linkIsRequired'),
});

export type TSocialLinksSchema = z.infer<typeof SocialLinksSchema>;
