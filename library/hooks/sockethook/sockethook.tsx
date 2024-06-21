import { useEffect, useState } from 'react';

import { io } from 'socket.io-client';
import { ManagerOptions } from 'socket.io-client/build/esm/manager';
import { SocketOptions } from 'socket.io-client/build/esm/socket';

import { enums } from '../../enums';
import TokenEnum = enums.TokenEnum;
import { useDeepCompareEffect } from 'ahooks';

const getDomainAndPathFromUrl = (url: string): { domain: string; path: string } => {
    const urlSplit = url.split(/[/?#]/);
    const domain = urlSplit[0] + '//' + url.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];
    return {
        domain: domain,
        path: url.replace(domain, ''),
    };
};
export function useSocket(url: string, namespace?: string) {
    const [socket, setSocket] = useState<any>(null);

    useDeepCompareEffect(() => {
        const { domain, path } = getDomainAndPathFromUrl(url);
        const opts: Partial<ManagerOptions & SocketOptions> = {
            extraHeaders: {
                Authorization: `Bearer ${localStorage.getItem(TokenEnum.ACCESS_TOKEN)}`,
                type: 'user',
            },
        };
        if (path) {
            opts.path = path;
        }
        const socketIo = io(domain + (namespace ? namespace : ''), opts);

        setSocket(socketIo);

        function cleanup() {
            socketIo.disconnect();
        }
        return cleanup;

        // should only run once and not on every re-render,
        // so pass an empty array
    }, []);

    return socket;
}
