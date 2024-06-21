import { z } from 'zod';

import { isStrongPassword } from '@library/functions';

export const SignUpSchema = z.object({
    companyName: z.string().min(1, 'companyNameIsRequired'),
    email: z.string({ required_error: 'emailIsRequired' }).email('validEmailIsRequired'),
    phoneNumber: z.string(),
    password: z.string().min(8, 'passwordMustBeAtLeast8CharactersLong').refine(isStrongPassword, {
        message: 'passwordMustHaveAtLeastOneUppercaseLetterOneLowercaseLetterOneNumberAndOneSpecialCharacter',
    }),
    captcha_token: z.string().min(1, 'captchaIsRequired'),
    isRemembered: z.boolean(),
});

export type TSignUpSchema = z.infer<typeof SignUpSchema>;
