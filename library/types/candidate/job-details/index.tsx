import { TCompany } from '@library/types/api/employer';

export type TJobDetailsTypes = {
    companyDescription: string;
    createdAt: string;
    updatedAt: string;
    id: string;
    jobTitle: string;
    status: string;
    jobNumber: number;
    jobType: string[];
    postBy: string;
    position?: string;
    rating?: number;
    industry: string;
    region?: any;
    country?: any;
    city?: any;
    address: string;
    experienceLevel: string[];
    educationLevel: string[];
    workArrangement: string[];
    salaryType: string;
    salaryRangeFrom: number;
    salaryRangeTo: number;
    jobDescription: string;
    keyResponsibilities: string;
    qualificationsAndRequirements: string;
    benefits: string[];
    howToApply: string;
    applicationDeadline: string;
    legalInformation: string;
    keywords?: any;
    companyId: string;
    isDeleted: boolean;
    isSponsored: boolean;
    company: TCompanyTypes;
    companyInfo?: TCompany;
    location: TLocationTypes;
    vacancy: number;
};

export type TLocationTypes = {
    lat: number;
    lon: number;
};

export type TCompanyTypes = {
    id: string;
    name: string;
    description: string;
    logoPath: string;
};
