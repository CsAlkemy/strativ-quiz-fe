import { z } from 'zod';

export const JobApplicationSchema = z
    .object({
        email: z.string({ required_error: 'emailIsRequired' }).email('validEmailIsRequired'),
        country: z.string({ required_error: 'countryIsRequired' }).min(1, 'countryIsRequired'),
        phone: z.string({ required_error: 'phoneIsRequired' }).min(1, 'phoneIsRequired'),
        uploadResume: z.string(),
        videoInstruction: z.string(),
        coverLetter: z.string(),
        isCv: z.boolean(),
        isCoverLetter: z.boolean(),
        isVideo: z.boolean(),
        isResume: z.boolean(),
    })
    .refine(data => (!data.isResume && !data.uploadResume) || (data.isResume && data.uploadResume) || (!data.isResume && data.uploadResume), {
        message: 'whenCheckedAResumeIsRequired',
        path: ['isResume'],
    })
    .refine(
        data => (!data.isCoverLetter && !data.coverLetter) || (data.isCoverLetter && data.coverLetter) || (!data.isCoverLetter && data.coverLetter),
        {
            message: 'whenCheckedACoverLetterIsRequired',
            path: ['isCoverLetter'],
        },
    )
    .refine(
        data => (!data.isVideo && !data.videoInstruction) || (data.isVideo && data.videoInstruction) || (!data.isVideo && data.videoInstruction),
        {
            message: 'whenCheckedAVideoIsRequired',
            path: ['isVideo'],
        },
    );

export type TJobApplication = z.infer<typeof JobApplicationSchema>;
