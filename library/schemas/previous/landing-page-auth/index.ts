import { z } from 'zod';
export const OTPVerifySchema = z.object({
    token: z
        .array(z.string().length(1))
        .length(6, 'OTP must be exactly 6 digits')
        .refine(data => data.every(digit => digit.trim().length === 1), {
            message: 'OTP is required and must be 6 digits.',
        }),
});

export type TOtpVerifySchema = z.infer<typeof OTPVerifySchema>;
