import { TBase } from '@library/types/api';

export type TAdBannerResponseType = TBase & {
    addNumber: number;
    companyName: string;
    email: string;
    title: string;
    banner: string;
    bannerSm?: string | null;
    status: number;
};
