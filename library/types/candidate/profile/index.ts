import { TBase } from '@library/types/api';

export type TProfile = TBase & {
    userId: string;
    email?: string;
    designation: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    dob: string;
    phoneNumber: string;
    videoIntroduction: string;
    linkedin: string;
    country: string;
    city: string;
    address: string;
    zipCode: string;
    summary: string;
    longitude: string;
    latitude: string;
    languagePreference: string;
    citizenship: string;
    workAuthorization: boolean;
    gender: string;
    maritalStatus: string;
    uploadResume: string;
    uploadVideoResume: string;
};

export type TProfileProps = {
    profile: TProfile;
};

export type TWorkExperience = TBase & {
    userId: string;
    profileId: string;
    companyName: string;
    designation: string;
    employmentFrom: string;
    employmentTo: string;
    isCurrentlyWorking: boolean;
    responsibilities: string;
};

export type TEducation = {
    id: string;
    levelOfEducation: string;
    degree: string;
    instituteName: string;
    location: string;
    startingDate: string;
    endingDate: string;
    isCurrentlyStudying: boolean;
};

export type TCertificationsAndLicenses = TBase & {
    userId: string;
    profileId: string;
    certificationOrLicenseName: string;
    instituteName: string;
    startDate: string;
    endDate: string;
    certificationDetails: string;
};

export type TSkills = TBase & {
    userId: string;
    profileId: string;
    name: string;
    order: number;
};

export type TAwards = TBase & {
    userId: string;
    profileId: string;
    name: string;
    instituteName: string;
    year: number;
    awardFile: string;
};

export type TSocialLinks = Record<string, any>;

export type TLanguages = TBase & { proficiencyLevel: string; language: string; order: number };

export type TFullUserProfile = {
    profile: TProfile;
    workExperience: TWorkExperience;
    education: TEducation;
    certificationsAndLicenses: TCertificationsAndLicenses;
    skills: TSkills;
    awards: TAwards;
    socialLinks: TSocialLinks;
    languages: TLanguages;
};

export type TFullUser = {
    id: string;
    email: string;
    userType: string[];
    profiles?: TFullUserProfile;
    companies?: Record<string, any>;
    verified: boolean;
    onboarded: boolean;
    isNewUser: boolean;
};
