import { TUserPermissionApiResponse } from '@library/types/admin';
import { TBase } from '@library/types/api';

export type TAdminUserProfile = TBase & {
    userId: 'f97bbca8-7706-4638-aba0-93aaf2e73ea0';
    firstName: 'Gloria';
    lastName: 'Mercado';
    profileImage: null;
    phoneNumber: '+1 (891) 277-7841';
};

export type TAdminUserProfileApiResponse = TBase & {
    email: 'test@mail.com';
    userType: 'admin';
    enableTwoFactorAuthentication: false;
    status: 1;
    profiles: TAdminUserProfile;
    userPermissions: TUserPermissionApiResponse[];
};
