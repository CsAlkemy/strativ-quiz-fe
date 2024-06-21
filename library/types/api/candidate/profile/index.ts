import { TFullUser } from '@library/types/candidate';

export type TLoginResponse = {
    token: string;
    refreshToken: string;
    user: TFullUser;
};

export type TSignUpResponse = {
    token: string;
    refreshToken: string;
    user: TFullUser;
};
