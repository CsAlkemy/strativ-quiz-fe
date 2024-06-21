import { z } from 'zod';

import { isStrongPassword } from '@library/functions';
import { DateSchema } from '@library/schemas';

export const SignUpSchema = z.object({
    firstName: z.string().min(1, 'firstNameIsRequired'),
    lastName: z.string().min(1, 'lastNameIsRequired'),
    email: z.string({ required_error: 'emailIsRequired' }).email('validEmailIsRequired'),
    dob: DateSchema.REQUIRED,
    phoneNumber: z.string(),
    password: z.string().min(8, 'passwordMustBeAtLeast8CharactersLong').refine(isStrongPassword, {
        message: 'passwordMustHaveAtLeastOneUppercaseLetterOneLowercaseLetterOneNumberAndOneSpecialCharacter',
    }),
    captcha_token: z.string().min(1, 'captchaIsRequired'),
    isRemembered: z.boolean(),
});

export type TSignUpSchema = z.infer<typeof SignUpSchema>;
