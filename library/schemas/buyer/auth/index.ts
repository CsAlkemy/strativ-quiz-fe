import { z } from 'zod';
import { isStrongPassword } from '@library/functions';

export const LoginSchema = z.object({
    email: z.string({ required_error: 'Email is required!' }).email('Valid email is required!'),
    password: z.string().min(8, 'Password is required!'),
    remember: z.string().optional(),
});
export const SignUpSchema = z.object({
    userName: z.string({ required_error: 'User Name is required!' }),
    email: z.string({ required_error: 'Email is required!' }).email('Valid email is required!'),
    password: z.string().min(8, 'Password must be at least 8 characters long').refine(isStrongPassword, {
        message: 'Password must have at least one uppercase letter one lowercase letter one number and one special character',
    }),
});
export const ForgotPasswordSchema = z.object({
    email: z.string({ required_error: 'Email is required!' }).email('Valid email is required!'),
});
export const VerifyOTPSchema = z.object({
    otp: z.string().min(1, 'OTP is required!'),
});

export type TLoginSchema = z.infer<typeof LoginSchema>;
export type TSignUpSchema = z.infer<typeof SignUpSchema>;
export type TForgotPasswordSchema = z.infer<typeof ForgotPasswordSchema>;
export type TVerifyOTPSchema = z.infer<typeof VerifyOTPSchema>;
