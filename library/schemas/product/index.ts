import { z } from 'zod';

export const ProductSchema = z.object({
    productName: z.string().min(1, 'Product name is required'),
    productSubtitle: z.string().optional(),
    price: z.preprocess(val => (typeof val === 'string' ? parseFloat(val) : val), z.number().min(1, 'Price is required')),
    description: z.string().min(10, 'Description is required'),
    productDetails: z.string().optional(),
    moreDetails: z.string().optional(),
    productImages: z
        .array(
            z.object({
                name: z.string(),
                size: z.number().max(1024 * 1024 * 4, 'File size should not exceed 4MB'), // 4MB max size
                type: z.string().refine(value => {
                    return ['image/png', 'image/jpeg', 'image/gif', 'image/svg+xml'].includes(value);
                }, 'Only PNG, JPEG, GIF, or SVG files are allowed'),
            }),
        )
        .min(1, 'image is required'),
});

export type TProductSchema = z.infer<typeof ProductSchema>;
