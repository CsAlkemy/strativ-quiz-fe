import { z } from 'zod';

export const LoginSchema = z.object({
    identifier: z.string({ required_error: 'Email is required!' }).email('Valid email is required!'),
    password: z.string().min(8, 'Password is required!'),
    captcha_token: z.string().min(1, 'Captcha is required!'),
});

export type TLoginSchema = z.infer<typeof LoginSchema>;
