import { z } from 'zod';

export const LanguageSchema = z.object({
    language: z.string().min(1, 'languageIsRequired'),
    proficiencyLevel: z.string().min(1, 'proficiencyLevelIsRequired'),
    // order: z.number().min(1, 'Order is required!'),
});

export type TLanguageSchema = z.infer<typeof LanguageSchema>;
