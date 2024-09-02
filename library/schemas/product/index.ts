import { z } from 'zod';

export const ProductSchema = z.object({
    productName: z.string().min(1, 'Product name is required'),
    productSubtitle: z.string().optional(),
    price: z.number().min(1, 'Price is required'),
    description: z.string().min(10, 'Description is required'),
    productDetails: z.string().optional(),
    moreDetails: z.string().optional(),
    productImages: z.array(z.string().url('Must be a valid URL')).optional(),
});

export type TProductSchema = z.infer<typeof ProductSchema>;
