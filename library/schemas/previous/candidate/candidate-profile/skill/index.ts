import { z } from 'zod';

export const SkillSchema = z.object({
    name: z.string().min(1, 'skillIsRequired'),
});

export type TSkillSchema = z.infer<typeof SkillSchema>;
