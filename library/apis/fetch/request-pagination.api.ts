import $fetch from '@library/apis/fetch';
import { enums } from '@library/enums';
import type { TApiPaginatedPayload, THttpType } from '@library/types/api';
import CandidateApiModuleEnum = enums.CandidateApiModuleEnum;
import EmployerApiModuleEnum = enums.EmployerApiModuleEnum;
import AdminApiModuleEnum = enums.AdminApiModuleEnum;

type Props = {
    method: THttpType;
    module: CandidateApiModuleEnum | EmployerApiModuleEnum | AdminApiModuleEnum;
    lastUrl: string;
    urlQueries: TApiPaginatedPayload;
    headers?: Record<string, string>;
};

export default function RequestPaginationApi<Response>(props: Props) {
    // If we are rejecting? why do we need to throw as an Error?
    if (!props) return Promise.reject('Props is undefined or null');
    const { method, headers = {}, module, lastUrl, urlQueries } = props;
    const __req: RequestInit = {
        method: method,
        headers: {
            accept: '*/*',
            'Device-Os': 'web',
            'Content-Type': 'application/json',
            ...headers,
        },
    };
    const urlSearchParams = new URLSearchParams();
    Object.keys(urlQueries).forEach(each => {
        if (!!urlQueries[each] || urlQueries[each] === 0) urlSearchParams.set(each, urlQueries[each]);
    });
    return $fetch<Response>(
        {
            module,
            lastUrl: `${lastUrl}?${decodeURIComponent(urlSearchParams.toString())}`,
        },
        __req,
    );
}
