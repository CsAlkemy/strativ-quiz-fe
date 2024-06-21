import { z } from 'zod';

export const CalendyTokenSchema = z.object({
    calendlyToken: z.string().min(1, 'calendyTokenIsRequired'),
});

export const calendlyUrlRegex = /^https:\/\/calendly\.com\//;
export type TCalendyTokenSchema = z.infer<typeof CalendyTokenSchema>;

export const CalendyEvenSaveSchema = z
    .object({
        title: z.string({ required_error: 'titleIsRequired' }).min(1, 'titleIsRequired'),
        calendlyUrl: z.string({ required_error: 'calendlyUrlIsRequired' }).min(1, 'calendlyUrlIsRequired').regex(calendlyUrlRegex, 'invalidURL'),
        order: z.coerce.number({ required_error: 'orderIsRequired', invalid_type_error: 'numberIsNotValid' }),
        defaultGuests: z.array(
            z.object({
                email: z.string({ required_error: 'emailIsRequired' }).min(1, 'emailIsRequired').email('emailIsNotValid'),
            }),
        ),
    })
    .refine(
        data => {
            const emails = data.defaultGuests.map(guest => guest.email);
            return emails.length === new Set(emails).size;
        },
        {
            path: ['defaultGuests'],
            message: 'noDuplicatedGuestEmailAllowed',
        },
    );
export type TCalendyEvenSaveSchema = z.infer<typeof CalendyEvenSaveSchema>;

export const CalendlyInterviewScheduleStoreSchema = z.object({
    inviteeUrl: z.string({ required_error: 'urlIsRequired' }).min(1, 'urlIsRequired'),
    eventTitle: z.string({ required_error: 'titleIsRequired' }).min(1, 'titleIsRequired'),
    jobApplicationId: z.string({ required_error: 'applicationIdIsRequired' }).min(1, 'applicationIdIsRequired'),
    eventId: z.string({ required_error: 'eventIdIsRequired' }).min(1, 'eventIdIsRequired'),
});

export const CalendlyInterviewScheduleFeedbackSchema = z.object({
    feedback: z.string({ required_error: 'feedbackIsRequired' }).min(1, 'feedbackIsRequired'),
});
export type CalendlyInterviewScheduleStoreSchemaType = z.infer<typeof CalendlyInterviewScheduleStoreSchema>;
export type TCalendlyInterviewScheduleFeedbackSchemaType = z.infer<typeof CalendlyInterviewScheduleFeedbackSchema>;
