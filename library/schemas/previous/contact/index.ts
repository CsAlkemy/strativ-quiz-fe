import { z } from 'zod';

export const ContactFormSchema = z.object({
    email: z.string({ required_error: 'emailIsRequired' }).email('validEmailIsRequired'),
    phoneNumber: z.string(),
    firstName: z.string().min(1, 'firstNameIsRequired'),
    lastName: z.string().min(1, 'lastNameIsRequired'),
    message: z.string().min(10, 'thisFieldIsRequired'),
});

export type TContactFormSchema = z.infer<typeof ContactFormSchema>;
