import { z } from 'zod';

export const ProductSchema = z.object({
    couponCode: z.string().min(1, 'Coupon Code is required'),
    discountType: z.string().min(1, 'Discount Type is required'),
    discountAmount: z.number().min(1, 'Discount Amount must be greater than 0'),
    restriction: z.string().min(1, 'Restriction is required'),
    minimumOrderValue: z.number().min(1, 'Minimum order value must be greater than 0'),
});

export type TProductSchema = z.infer<typeof ProductSchema>;
