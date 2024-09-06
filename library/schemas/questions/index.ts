import { z } from 'zod';

export const QuestionSchema = z
    .object({
        question: z.string().min(1, 'Question cannot be empty'),
        options: z.array(z.string().min(1, 'Option cannot be empty')).min(2, 'At least two options are required'),
        correctAnswer: z.string().min(1, 'Correct answer cannot be empty'),
    })
    .superRefine((data, ctx) => {
        if (!data.options.includes(data.correctAnswer)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['correctAnswer'],
                message: 'Correct answer must be one of the options',
            });
        }
    });
export const MultipleQuestionsSchema = z.object({
    questions: z.array(QuestionSchema).min(1, 'You must add at least one question'),
});

export const EditQuestionSchema = z.object({
    question: z.string().min(1, 'Question is required'),
    options: z.array(z.string().min(1, 'Option cannot be empty')).min(2, 'At least two options are required'),
    correctAnswer: z.string().min(1, 'Correct answer is required'),
});

export type TQuestionSchema = z.infer<typeof QuestionSchema>;
export type TEditQuestionSchema = z.infer<typeof EditQuestionSchema>;
export type TMultipleQuestionsSchema = z.infer<typeof MultipleQuestionsSchema>;
