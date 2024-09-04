import { z } from 'zod';

export const LoginSchema = z.object({
    email: z.string({ required_error: 'Email is required!' }).email('Valid email is required!'),
    password: z.string().min(8, 'Password is required!'),
});
// export const SignUpSchema = z.object({
//     userName: z.string({ required_error: 'User Name is required!' }).min(1, 'User Name is required!'),
//     email: z.string({ required_error: 'Email is required!' }).email('Valid email is required!'),
//     password: z.string().min(8, 'Password must be at least 8 characters long').refine(isStrongPassword, {
//         message: 'Password must have at least one uppercase letter one lowercase letter one number and one special character',
//     }),
// });

export type TLoginSchema = z.infer<typeof LoginSchema>;
// export type TSignUpSchema = z.infer<typeof SignUpSchema>;
