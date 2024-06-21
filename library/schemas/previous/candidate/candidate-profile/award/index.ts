import { endOfYear, isBefore } from 'date-fns';
import { z } from 'zod';

const validateYear = {
    REQUIRED: z.coerce
        .string()
        .transform<number | string>(value => parseFloat(value))
        .refine(value => !isNaN(Number(value)), {
            message: 'thisFieldIsRequired',
        })
        .refine(value => isBefore(new Date(Number(value), 0, 1), endOfYear(new Date())), {
            message: 'yearShouldNotBeInTheFuture',
        }),
    OPTIONAL: z.coerce
        .string()
        .optional()
        .transform<number | string>(value => (value !== undefined ? parseFloat(value) : 0))
        .refine(
            value => {
                if (typeof value === 'number' && !isNaN(value)) {
                    const inputDate = new Date(value, 0, 1);
                    return isBefore(inputDate, endOfYear(new Date()));
                }
                return true;
            },
            {
                message: 'yearShouldNotBeInTheFuture',
            },
        ),
};
export const AwardSchema = z.object({
    name: z.string().min(1, 'awardNameIsRequired'),
    instituteName: z.string().min(1, 'instituteNameIsRequired'),
    year: validateYear.OPTIONAL,
});

export type TAwardSchema = z.infer<typeof AwardSchema>;
