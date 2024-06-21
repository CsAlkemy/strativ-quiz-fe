export type TCompanyDetailsTypes = {
    createdAt: string;
    updatedAt: string;
    id: string;
    userId: string;
    name: string;
    description: string;
    logoPath: string;
    companyValue: string;
    companyMission: string;
    diversityAndInclusionStatements: string;
    industryAndSector: string;
    companySizeFrom: number;
    companySizeTo: number;
    foundedIn: number;
    phone: string;
    companyEmail: string;
    location: string;
    country?: any;
    city?: any;
    companyDescription?: string;
    address: string;
    mapLink: string;
    longitude: number;
    latitude: number;
    websiteUrl: string;
    socialMediaLinks: TSocialMediaLinksTypes;
};

export type TSocialMediaLinksTypes = {
    twitter: string;
    facebook: string;
};
