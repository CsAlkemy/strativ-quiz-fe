import { z } from 'zod';

import { isValidDate } from '@library/functions';

export const DateSchema = {
    REQUIRED: z
        .string()
        .min(1, 'thisFieldIsRequired')
        .refine(data => isValidDate(data), { message: 'enterAValidDate' }),
    OPTIONAL: z
        .string()
        .nullable()
        .refine(data => (data ? isValidDate(data) : true), { message: 'enterAValidDate' }),
};

export const CommonAddressSchema = z.object({
    label: z.string(),
    lat: z.number().or(z.null()),
    lng: z.number().or(z.null()),
});
