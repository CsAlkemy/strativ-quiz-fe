import { z } from 'zod';

export const SummarySchema = z.object({
    summary: z.string().min(1, 'summaryIsRequired'),
});

export type TSummarySchema = z.infer<typeof SummarySchema>;
