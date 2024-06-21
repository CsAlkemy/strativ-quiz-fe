import { format, isValid, parseISO, subYears } from 'date-fns';
import jwtDecode from 'jwt-decode';

import { enums } from '@library/enums';
import { TApiResponse, TJwt } from '@library/types/api';

import { TSignUpResponse } from './types/api/candidate';
import { TFullUser } from './types/candidate';
import TokenEnum = enums.TokenEnum;
import UserRolesEnum = enums.UserRolesEnum;

export function storeUserInfoInLocal(data: TSignUpResponse) {
    localStorage.setItem(TokenEnum.ACCESS_TOKEN, data?.token);
    localStorage.setItem(TokenEnum.REFRESH_TOKEN, data?.refreshToken);
    localStorage.setItem('userInfo', JSON.stringify(data?.user));
}

export const funcRemoveLoginInfo = () => {
    localStorage.removeItem(TokenEnum.ACCESS_TOKEN);
    localStorage.removeItem(TokenEnum.REFRESH_TOKEN);
    localStorage.removeItem('userInfo');
};

export const funcJwtUserInfo = (): TJwt => {
    let jwt: TJwt;
    try {
        // @ts-ignore
        jwt = jwtDecode(localStorage.getItem(TokenEnum.ACCESS_TOKEN) as string);
    } catch (e) {
        jwt = {} as TJwt;
    }
    return jwt;
};
export function funcFormatNumberAsK(value: number) {
    if (value >= 1000) {
        const truncatedValue = value / 1000;
        return `${truncatedValue.toFixed(1)}k`;
    }
    return value?.toString();
}

export const funcGuardCheck = (guard: UserRolesEnum, jwtUser: Record<string, any>) => {
    if (Object.keys(jwtUser).length === 0) return false;
    const role = jwtUser?.userType as UserRolesEnum;
    if (!role) return false;
    if (guard === UserRolesEnum.ALL) return true;
    let condition;
    switch (guard) {
        case UserRolesEnum.ADMIN:
            condition = role === UserRolesEnum.ADMIN;
            break;
        case UserRolesEnum.EMPLOYER:
            condition = role === UserRolesEnum.EMPLOYER;
            break;
        default:
            condition = false;
    }
    return condition;
};

export const funcApiErrorMessage = (error: TApiResponse<any> | any) => {
    let message = 'Internal Server Error';
    if (error?.error?.fields?.count && error?.error?.fields?.errors?.length) {
        message = error?.error?.fields?.errors
            ?.filter((f: any) => !!f?.errorCode)
            ?.map((f: any) => f?.errorCode)
            ?.join(' | ');
    } else if (error?.error?.systems?.count && error?.error?.systems?.errors?.length) {
        message = error?.error?.systems?.errors
            ?.filter((f: any) => !!f?.errorCode)
            ?.map((f: any) => f?.errorCode)
            ?.join(' | ');
    } else {
        if (error?.errorCode) message = error?.errorCode;
    }
    return message;
};

export const funcApiErrorMessageAdmin = (error: TApiResponse<any> | any) => {
    let message = 'Internal Server Error';
    if (error?.error?.fields?.count && error?.error?.fields?.errors?.length) {
        message = error?.error?.fields?.errors
            ?.filter((f: any) => !!f?.message)
            ?.map((f: any) => f?.message)
            ?.join(' | ');
    } else if (error?.error?.systems?.count && error?.error?.systems?.errors?.length) {
        message = error?.error?.systems?.errors
            ?.filter((f: any) => !!f?.message)
            ?.map((f: any) => f?.message)
            ?.join(' | ');
    } else {
        if (error?.message) message = error?.message;
    }
    return message;
};

export const funcResolveObjectDot = <K>(path: string, obj: K) => {
    return path.split('.').reduce(function (prev: any, curr) {
        return prev ? prev[curr] : null;
    }, obj || self);
};

export function isStrongPassword(password: string) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[^\s]{8,}$/;
    return passwordRegex.test(password);
}

export const funcGetFileExtension = (filename: string): string => {
    return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
};

const convertStringToArrayBuffer = (str: string) => {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(str).buffer;
};
export const funcFormatNumber = (num: number): string => {
    if (num < 1000) {
        return num.toString();
    }
    const thousands = num / 1000;
    return `${thousands.toFixed(1)}k`;
};
export const isFutureDate = (dateString: string | null) => {
    if (!dateString) return false;
    const now = new Date();
    const date = new Date(dateString);
    return date > now;
};

export function convertFileToArrayBuffer(file: File): Promise<ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
        if (!file || !file.name) {
            reject(new Error('Invalid or missing file.'));
        }

        const reader = new FileReader();

        reader.onload = () => {
            const arrayBuffer: ArrayBuffer | null | string = reader.result;

            if (arrayBuffer === null) {
                resolve(null);
                return;
            }
            if (typeof arrayBuffer === 'string') {
                resolve(convertStringToArrayBuffer(arrayBuffer));
                return;
            }
            if (!arrayBuffer) {
                reject(new Error('Failed to read file into ArrayBuffer.'));
                return;
            }

            resolve(arrayBuffer);
        };

        reader.onerror = () => {
            reject(new Error('Error reading file.'));
        };

        reader.readAsArrayBuffer(file);
    });
}

export const getFilePreviewLink = (linkKey: string) => {
    if (!linkKey) return '';
    if (linkKey.startsWith('http://') || linkKey.startsWith('https://')) return linkKey;
    else {
        const baseURL = process.env.NEXT_PUBLIC_AZURE_BASE_URL;
        return baseURL + (baseURL?.endsWith('/') ? '' : '/') + linkKey;
    }
};

export const getUploadedFileName = (url: string) => {
    if (url) {
        const lastHyphenIndex = url.lastIndexOf('-');
        return url.substring(lastHyphenIndex + 1);
    }
};
export function convertMilesToKm(input: string): string {
    const milesMatch = input.match(/Within (\d+) miles/);
    if (!milesMatch) {
        return '';
    }
    const miles = Number(milesMatch[1]);
    const km = miles * 1.60934;
    return `${Math.round(km)} km`;
}
export function getPreviousDate(input: string): string {
    const currentDate = new Date();

    switch (input) {
        case 'Last 24 hours':
            currentDate.setDate(currentDate.getDate() - 1);
            break;
        case 'Last 7 days':
            currentDate.setDate(currentDate.getDate() - 7);
            break;
        case 'Last 30 days':
            currentDate.setDate(currentDate.getDate() - 30);
            break;
        case 'Any':
            return '';
        default:
            return '';
    }
    return currentDate.toISOString().split('T')[0];
}
export function formatVisibleMonth(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
export const handleExperienceSelect = (value: string | '') => {
    if (!value) {
        return;
    }
    const parts = value.split('-').map(val => parseInt(val, 10));
    const from = parts[0];
    let to = parts.length > 1 ? parts[1] : null;

    if (isNaN(to as number)) {
        to = null;
    }
    if (!isNaN(from)) {
        return {
            experienceFrom: from,
            experienceTo: to,
        };
    }
};

export const get18YearsBeforeDate = (inputDate: Date): string => {
    const resultDate = subYears(inputDate, 18);
    return format(resultDate, 'dd-MM-yyyy');
};

export const formatDate = (inputDate: string | Date, formatString: string): string => {
    return format(new Date(inputDate), formatString);
};

export const isValidDate = (dateString: string): boolean => {
    const parsedDate = parseISO(dateString);
    return isValid(parsedDate);
};

export const getUserEmail = () => {
    const userInfoJSON = localStorage.getItem('userInfo') || '{}';
    const userInfo = JSON.parse(userInfoJSON) as TFullUser;
    return userInfo?.email || '';
};

export const formatSalaryRange = (from: number | null, to: number | null) => {
    if (from && to) {
        return `£${from.toLocaleString()} - £${to.toLocaleString()}`;
    }
    return 'Negotiable';
};
