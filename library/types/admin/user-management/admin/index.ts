import { TBase } from '@library/types/api';

export * from './profile';

export type UserPermissionType = TBase & {
    name: string;
    title: string;
    checked: boolean;
};

export type TUserPermissionApiResponse = {
    module: string;
    permissions: UserPermissionType[];
};
