import { z } from 'zod';

import { isStrongPassword } from '@library/functions';

export const SignInSchema = z.object({
    identifier: z.string({ required_error: 'emailIsRequired' }).email('validEmailIsRequired'),
    password: z
        .string()
        .min(2, 'passwordIsRequired')
        .refine(value => value.length >= 8, {
            message: 'passwordMustBeAtLeast8CharactersLong',
        })
        .refine(isStrongPassword, {
            message: 'passwordMustHaveAtLeastOneUppercaseLetterOneLowercaseLetterOneNumberAndOneSpecialCharacter',
        }),
    isRemembered: z.boolean(),
    userType: z.string().min(1, 'userTypeIsRequired'),
    captcha_token: z.string().min(1, 'captchaIsRequired'),
});

export type TSignInSchema = z.infer<typeof SignInSchema>;
