export type THttpType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type TApiPaginatedPayload = {
    page: number;
    limit: number;
    [x: string]: any;
};

export type TBase = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    createdBy: string;
    updatedBy: string;
    deletedBy: string;
};

type TError = {
    count: number;
    errors: Array<{ domain: string; message: string; value: string }>;
};

export type TApiError = {
    fields: TError;
    systems: TError;
};

export type TApiResponse<DynamicType> = {
    nonce: number;
    status: number;
    message: string;
    messageKey: string;
    payload: DynamicType;
    error?: TApiError;
};

export type TJwt = {
    id: string;
    userType: string[];
    exp: number;
    iat: number;
    profiles?: {
        id: string;
        firstName: string;
        lastName: string;
        profileImage: string;
    };
};

export type TApiDto<DynamicType> = {
    nonce: number;
    status: number;
    logId: string;
    message: string;
    payload: DynamicType;
    error?: TApiError;
};

export type TApiPaginationDto<DynamicData> = Omit<TApiDto<DynamicData>, 'payload'> & {
    metadata: {
        page: number;
        limit: number;
        total: number;
        totalPage: number;
        totalCount: number;
    };
    payload: DynamicData[];
    error?: TApiError;
};
