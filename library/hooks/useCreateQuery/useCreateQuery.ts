import { usePathname, useSearchParams } from 'next/navigation';

import React from 'react';

export const useCreateQuery = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams()!;
    const createQueryString = React.useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams as any);
            params.set(name, value);
            return params.toString();
        },
        [searchParams],
    );
    const createQueryStringWithPathname = React.useCallback(
        (name: string, value: string) => {
            return pathname + '?' + createQueryString(name, value);
        },
        [createQueryString, pathname],
    );
    return {
        ...searchParams,
        createQueryString,
        createQueryStringWithPathname,
    };
};
