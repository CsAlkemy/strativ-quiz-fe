import { TBase } from '@library/types/api';

export type TToken = TBase & {
    name: string;
    value: string;
};

export type TTokenData = TToken[];
