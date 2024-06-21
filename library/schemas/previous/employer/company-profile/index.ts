import { endOfYear, isBefore } from 'date-fns';
import { z } from 'zod';

const SocialMediaLinksSchema = z.object({
    name: z.string().optional(),
    link: z
        .string()
        .optional()
        .refine(
            value => {
                if (!value) return true;
                return value.startsWith('https://');
            },
            {
                message: 'enterUrlWithHttps',
            },
        ),
});

const AddressSchema = z.object({
    label: z.string(),
    lat: z.number(),
    lng: z.number(),
});

export const CompanyProfileSchema = z.object({
    name: z.string().min(1, 'companyNameIsRequired'),
    description: z.string().min(1, 'companyDescriptionIsRequired'),
    logoPath: z.string().min(1, 'logoPathIsRequired'),
    companyValue: z.string().optional(),
    companyMission: z.string().optional(),
    diversityAndInclusionStatements: z.string().optional(),
    industryAndSector: z.string().min(1, 'industryIsRequired'),
    companySize: z.string().optional(),
    foundedIn: z.coerce
        .string()
        .transform(value => (typeof value === 'string' ? parseFloat(value) : value))
        .refine(value => !isNaN(value), {
            message: 'thisFieldIsRequired',
        })
        .refine(value => isBefore(new Date(value, 0, 1), endOfYear(new Date())), { message: 'yearShouldNotBeTheFuture' }),
    phone: z.string().min(1, 'phoneIsRequired'),
    companyEmail: z.string().email('invalidEmailAddress').min(1, 'companyEmailIsRequired'),
    country: z.string().min(1, 'countryIsRequired'),
    city: z.string().min(1, 'cityIsRequired'),
    address: z.union([z.string().min(1, 'addressIsRequired'), AddressSchema.refine(data => data.label !== '', { message: 'addressIsRequired' })]),
    websiteUrl: z.string().min(1, 'websiteUrlIsRequired').url('enterUrlWithHttps'),
    mapLink: z
        .string()
        .optional()
        .refine(
            data => {
                return !data || /^https:\/\/(www\.)?google\.(com|co\.[a-z]+)\/maps\/.*/.test(data);
            },
            {
                message: 'pleaseEnterAValidGoogleMapsEmbeddedLink',
            },
        ),

    socialMediaLinks: z.array(SocialMediaLinksSchema),
});

export type TCompanyProfileSchema = z.infer<typeof CompanyProfileSchema>;
