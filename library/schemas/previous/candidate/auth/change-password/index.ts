import { z } from 'zod';

import { isStrongPassword } from '@library/functions';

export const ChangePasswordSchema = z
    .object({
        oldPassword: z.string().min(1, 'Old Password is required!'),
        newPassword: z.string().min(8, 'Password must be at least 8 characters long').refine(isStrongPassword, {
            message: 'passwordMustHaveAtLeastOneUppercaseLetterOneLowercaseLetterOneNumberAndOneSpecialCharacter',
        }),
    })
    .refine(data => data.newPassword !== data.oldPassword, {
        path: ['newPassword'],
        message: 'newPasswordCantBeTheSameAsTheOldPassword',
    });
export const ChangSetPasswordSchema = z
    .object({
        password: z.string().min(8, 'Password must be at least 8 characters long').refine(isStrongPassword, {
            message: 'passwordMustHaveAtLeastOneUppercaseLetterOneLowercaseLetterOneNumberAndOneSpecialCharacter',
        }),
        confirmPassword: z.string().min(1, 'confirmPasswordIsRequired'),
    })
    .refine(data => data.confirmPassword === data.password, {
        path: ['confirmPassword'],
        message: `thePasswordsDontSeemToMatch`,
    });

export type TChangePassword = z.infer<typeof ChangePasswordSchema>;
export type TSetPassword = z.infer<typeof ChangSetPasswordSchema>;
