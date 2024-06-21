import { z } from 'zod';

export const ReportFormSchema = z.object({
    email: z.string({ required_error: 'emailIsRequired' }).email('validEmailIsRequired'),
    reportType: z.string().min(3, 'reportTypeIsRequired'),
    additionalComments: z.string().optional(),
});

export type TReportFormSchema = z.infer<typeof ReportFormSchema>;
