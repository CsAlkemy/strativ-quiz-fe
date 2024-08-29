import { z } from 'zod';

export const ProductSchema = z.object({
    category: z.string().min(1, 'Category is required'),
    productName: z.string().min(1, 'Product name is required'),
    description: z.string().min(10, 'Description is required'),
    price: z.number().min(1, 'Price is required'),
    variables: z
        .array(
            z.object({
                name: z.string().min(1, 'Variable name is required'),
                options: z.array(
                    z.object({
                        optionName: z.string().min(1, 'Option name is required'),
                        quantity: z.number().min(1, 'Quantity is required'),
                    }),
                ),
            }),
        )
        .optional(),
    files: z
        .array(
            z.object({
                name: z.string(),
                size: z.number().max(1024 * 1024 * 4, 'File size should not exceed 4MB'), // 4MB max size
                type: z.string().refine(value => {
                    return ['image/png', 'image/jpeg', 'image/gif', 'image/svg+xml'].includes(value);
                }, 'Only PNG, JPEG, GIF, or SVG files are allowed'),
            }),
        )
        .max(5, 'You can upload a maximum of 5 files'),
});

export type TProductSchema = z.infer<typeof ProductSchema>;
