import dayjs from 'dayjs';

import { enums } from '@library/enums';
import { funcJwtUserInfo } from '@library/functions';
import TokenEnum = enums.TokenEnum;

export type $FetchProp = {
    lastUrl?: string;
    version?: string;
    module: string;
};

export const getToken = async () => {
    const localToken = localStorage.getItem(TokenEnum.ACCESS_TOKEN);
    const tempToken = localStorage.getItem(TokenEnum.TEMP_ACCESS_TOKEN);
    const userInfo = funcJwtUserInfo();
    const isUserInfo = Object.entries(userInfo).length;
    const isExpired = dayjs.unix(userInfo?.exp || 0).diff(dayjs()) < 1;
    if (isUserInfo && isExpired) return await refreshTokenMiddleware(isExpired);
    return localToken || tempToken;
};

export const getApiBaseUrl = async () => {
    const employerBaseUrl = process.env.NEXT_PUBLIC_EMPLOYER_API_BASE_URL;
    const candidateBaseUrl = process.env.NEXT_PUBLIC_JOB_SEEKER_API_BASE_URL;
    const adminBaseUrl = process.env.NEXT_PUBLIC_ADMIN_API_BASE_URL;
    const path = window.location.pathname;
    if (path.includes('employer')) return employerBaseUrl;
    if (path.includes('candidate')) return candidateBaseUrl;
    if (path.includes('admin')) return adminBaseUrl;
    return candidateBaseUrl;
};

export const refreshTokenMiddleware = async (isExpired: boolean) => {
    const refreshToken = localStorage.getItem(TokenEnum.REFRESH_TOKEN);
    const baseUrl = await getApiBaseUrl();
    const apiUrl = `${baseUrl}/api/v1/auth/refresh-token`;
    if (isExpired) {
        return fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify({ token: refreshToken }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(async res => {
                if (!res.ok) {
                    localStorage.removeItem(TokenEnum.ACCESS_TOKEN);
                    window.location.reload();
                    window.location.href = '/';
                }
                return res.json();
            })
            .then(data => {
                localStorage.setItem(TokenEnum.ACCESS_TOKEN, data.payload.token);
                return data.payload.token;
            });
    }
};

export default async function $fetch<T>({ version = 'api/v1', module, lastUrl }: $FetchProp, init?: RequestInit): Promise<T> {
    const token = await getToken();
    const baseUrl = await getApiBaseUrl();
    const apiUrl = `${baseUrl}/${version}/${module}${lastUrl ? `/${lastUrl}` : ''}`;
    return fetch(apiUrl, {
        ...init,
        headers: {
            'Device-os': 'web',
            ...(token && { Authorization: `Bearer ${token}` }),
            ...(init?.headers || {}),
        },
    }).then(async res => {
        const string = await res.text();
        const json = string === '' ? {} : JSON.parse(string);
        if (res.ok) return json;
        throw json;
    });
}
export const publicFetch = async <T>({ version = 'api/v1', module, lastUrl }: $FetchProp, init?: RequestInit): Promise<T> => {
    const token = await getToken();
    const apiUrl = `${process.env.NEXT_PUBLIC_JOB_SEEKER_API_BASE_URL}/${version}/${module}${lastUrl ? `/${lastUrl}` : ''}`;
    return fetch(apiUrl, {
        ...init,
        headers: {
            'Device-os': 'web',
            ...(token && { Authorization: `Bearer ${token}` }),
            ...(init?.headers || {}),
        },
    }).then(async res => {
        const string = await res.text();
        const json = string === '' ? {} : JSON.parse(string);
        if (res.ok) return json;
        throw json;
    });
};
