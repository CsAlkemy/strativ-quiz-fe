import { z } from 'zod';

export const AccountSchema = z.object({
    firstName: z.string({ required_error: 'First Name is required!' }).min(1, 'First Name is required!'),
    lastName: z.string({ required_error: 'Last Name is required!' }).min(1, 'Last Name is required!'),
    email: z.string({ required_error: 'Email is required!' }).email('Valid email is required!'),
    dob: z.string({ required_error: 'Birth Date is required!' }).min(1, 'Birth Date is require'),
});

export const PasswordSchema = z.object({
    currentPassword: z.string({ required_error: 'Password is required!' }).min(1, 'Password is required!'),
    newPassword: z.string({ required_error: 'Password is required!' }).min(8, 'Password is required!'),
    confirmPassword: z.string({ required_error: 'Password is required!' }).min(8, 'Password is required!'),
});

export type TAccountSchema = z.infer<typeof AccountSchema>;
export type TPasswordSchema = z.infer<typeof PasswordSchema>;
