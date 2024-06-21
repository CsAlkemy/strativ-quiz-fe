import { z } from 'zod';

export const ForgetPasswordEmailSchema = z.object({
    identifier: z.string().min(1, 'userEmailIsRequired'),
    userType: z.string().min(1, 'userTypeRequired'),
});

export const ForgetPasswordOTPSchema = z.object({
    otp: z.string().min(1, 'OTP is required!'),
    token: z.string().min(5, 'tokenIsRequired'),
});
export const ForgetPasswordOTPResendSchema = z.object({
    token: z.string().min(5, 'tokenIsRequired'),
});

export const ResetPasswordEmailSchema = z
    .object({
        token: z.string().min(5, 'tokenIsRequired'),
        password: z.string().min(4, 'passwordIsRequired'),
        confirmPassword: z.string().min(4, 'passwordIsRequired'),
    })
    .refine(data => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'passwordsMustMatch',
    });

export type TForgetPasswordEmailSchema = z.infer<typeof ForgetPasswordEmailSchema>;
export type TResetPasswordEmailSchema = z.infer<typeof ResetPasswordEmailSchema>;
export type TForgetPasswordOTPSchema = z.infer<typeof ForgetPasswordOTPSchema>;
export type TForgetPasswordOTPResendSchema = z.infer<typeof ForgetPasswordOTPResendSchema>;
