import { TBase } from '@library/types/api';
import { TCompany } from '@library/types/api/employer';

export type TNotificationResponse = {
    message: string;
    metadata: Record<string, any>;
    payload: TNotificationType[];
    status: boolean;
};

export type TNotificationType = TNotificationRoot;

type TNotificationRoot = TBase & {
    title: string;
    content: any;
    notificationFrom: string;
    notificationTo: string;
    detailUrl: string;
    isRead: boolean;
    notificationFromInfo: NotificationFromInfo;
};

type NotificationFromInfo = TBase & {
    email: string;
    password: string;
    hashedRt: string;
    userType: string;
    socialMediaLogin: boolean;
    verified: boolean;
    onboarded: boolean;
    enableTwoFactorAuthentication: boolean;
    language: string;
    hashedOtp: any;
    tokenVersion: number;
    profiles: any;
    companies: TCompany;
};
