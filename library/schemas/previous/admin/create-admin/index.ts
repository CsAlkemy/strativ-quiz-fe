import { z } from 'zod';

import { isStrongPassword } from '@library/functions';

export const CreateAdminSchema = z.object({
    email: z.string({ required_error: 'Email is required!' }).email('Email is not valid!'),
    password: z.string().min(8, 'Password must be at least 8 characters long').refine(isStrongPassword, {
        message: 'Password must have at least nne uppercase letter one lowercase letter one number and one special character!',
    }),
    firstName: z.string().min(1, 'First name is required!'),
    lastName: z.string().min(1, 'Last name is required!'),
    phone: z.string().optional(),
    permissionId: z.array(z.string()),
});

export type TCreateAdminSchema = z.infer<typeof CreateAdminSchema>;

export const UpdateAdminSchema = z.object({
    email: z.string({ required_error: 'Email is required!' }).email('Email is not valid!'),
    firstName: z.string().min(1, 'First name is required!'),
    lastName: z.string().min(1, 'Last name is required!'),
    phone: z.string().optional(),
    permissionId: z.array(z.string()),
});

export type TUpdateAdminSchema = z.infer<typeof UpdateAdminSchema>;
