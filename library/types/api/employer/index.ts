import { TBase } from '../index';

export type TCompanyDetailsResponse = TBase & {
    companyName: string;
};

export type TProfileApiResponse = TBase & {
    userId: string;
    firstName: string;
    lastName: string;
    profileImage: string | null;
    dob: string | null;
    phoneNumber: string;
    videoIntroduction: string | null;
    linkedin: string;
    country: string;
    designation: string;
    city: string;
    address: string;
    zipCode: string;
    summary: string | null;
    longitude: number | null;
    latitude: number | null;
    languagePreference: string | null;
    citizenship: string | null;
    workAuthorization: string | null;
    gender: string | null;
    maritalStatus: string | null;
    uploadResume: string;
    uploadVideoResume: string | null;
};

export type TUserInfoApiResponse = TBase & {
    email: string;
    userType: string;
    verified: boolean;
    onboarded: boolean;
    enableTwoFactorAuthentication: boolean;
    language: string;
    tokenVersion: number;
    profiles: TProfileApiResponse;
    companies: null | TCompany;
};
export type TCompany = TBase & {
    userId: string;
    name: string;
    description: any;
    logoPath: string;
    companyValue: any;
    companyMission: any;
    diversityAndInclusionStatements: any;
    industryAndSector: any;
    companySizeFrom: any;
    companySizeTo: any;
    foundedIn: any;
    phone: string;
    companyEmail: string;
    location: any;
    country: any;
    city: any;
    address: any;
    mapLink: any;
    longitude: any;
    latitude: any;
    calendlyToken: any;
    websiteUrl: any;
    socialMediaLinks: any;
};

export type TMessengerConversationInfoApiResponse = TBase & {
    lastMessageSenderId: string;
    title: string | null;
    lastMessage: string;
    type: string;
};

export type TInboxItemApiResponse = TBase & {
    messengerConversationId: string;
    participantId: string;
    oppositeUserId: string;
    title: string | null;
    oppositeUserInfo: TUserInfoApiResponse;
    messengerConversationInfo: TMessengerConversationInfoApiResponse;
};

export type TCalendlyEvent = {
    createdAt: string;
    updatedAt: string;
    id: string;
    userId: string;
    title: string;
    calendlyUrl: string;
    order: number;
    defaultGuests: string[];
};

export type TCalendlySchedule = {
    createdAt: string;
    updatedAt: string;
    id: string;
    userId: string;
    jobId: string;
    jobApplicationId: string;
    title: string;
    description: any;
    startTime: string;
    endTime: string;
    duration: number;
    location: any;
    meetingPlatform: any;
    meetingLink: string;
    eventUrl: string;
    cancelUrl: string;
    rescheduleUrl: string;
    eventGuests: string[];
    comment: any;
};

export interface CalendlyInterviewScheduleListDataTypes {
    eventTitle: string;
    eventDate: string;
    eventTimeDuration: string;
    eventGuests: string[];
    feedback: string;
    status: string;
    locationJoinUrl: string;
    action: { feedbackOnClick: () => void; deleteOnClick: () => void };
}
