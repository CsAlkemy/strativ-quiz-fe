import { TBase } from '@library/types/api';
export interface TAdminWorkExperience {
    companyName: string;
    designation: string;
    employmentFrom: string;
    employmentTo?: string;
}

export interface TAdminEducation {
    degree: string;
    instituteName: string;
    endingDate: string;
    isCurrentlyStudying: boolean;
}

export interface TAdminUserData {
    profiles: {
        address: string | null;
    };
    workExperiences: TAdminWorkExperience[];
    educations: TAdminEducation[];
    skills: { name: string }[];
}

export interface TAdminTransformedData {
    id: string;
    userId: string;
    name: string;
    phone: string;
    email: string;
    introVideo: string;
    coverLetter: string;
    address: string;
    companyName: string;
    jobTitle: string;
    duration: string;
    degree: string;
    institution: string;
    graduationDate: string;
    skills: string[];
    appliedAt: string;
    jobStatus: string;
}
