import $fetch, { publicFetch } from '@library/apis/fetch';
import { enums } from '@library/enums';
import type { THttpType } from '@library/types/api';
import AdminApiModuleEnum = enums.AdminApiModuleEnum;

type Props<Request> = {
    method: THttpType;
    module: AdminApiModuleEnum;
    lastUrl?: string;
    payload?: Request;
    headers?: Record<string, string>;
};

export default function RequestApi<Request, Response>(props: Props<Request>) {
    // If we are rejecting? why do we need to throw as an Error?
    // if (!props) return Promise.reject(new Error('Props is undefined or null'));
    if (!props) return Promise.reject(new Error('Props is undefined or null'));
    const { method, headers = {}, module, lastUrl, payload } = props;
    const __req: RequestInit = {
        method: method,
        headers: {
            accept: '*/*',
            'Device-Os': 'web',
            'Content-Type': 'application/json',
            ...headers,
        },
    };
    if (payload) {
        __req.body = typeof payload === 'object' ? JSON.stringify(payload as Request) : (payload || '').toString();
    }
    return $fetch<Response>({ module, lastUrl }, __req);
}

export function PublicRequestApi<Request, Response>(props: Props<Request>) {
    // If we are rejecting? why do we need to throw as an Error?
    // if (!props) return Promise.reject(new Error('Props is undefined or null'));
    if (!props) return Promise.reject(new Error('Props is undefined or null'));
    const { method, headers = {}, module, lastUrl, payload } = props;
    const __req: RequestInit = {
        method: method,
        headers: {
            accept: '*/*',
            'Device-Os': 'web',
            'Content-Type': 'application/json',
            ...headers,
        },
    };
    if (payload) {
        __req.body = typeof payload === 'object' ? JSON.stringify(payload as Request) : (payload || '').toString();
    }
    return publicFetch<Response>({ module, lastUrl }, __req);
}
