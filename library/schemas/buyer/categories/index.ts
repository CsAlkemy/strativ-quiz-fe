import { z } from 'zod';

export const CategoriesSchema = z.object({
    categories: z.array(z.string()).refine(value => value.some(item => item), {
        message: 'You have to select at least one item.',
    }),
    colors: z.array(z.string()).refine(value => value.some(item => item), {
        message: 'You have to select at least one item.',
    }),
});

export type TCategoriesSchema = z.infer<typeof CategoriesSchema>;
