import React, { ReactNode } from 'react';
import { useLoginCheck } from '@library/hooks/useGuard';

type Props = {
    children: ReactNode;
    authRequired?: ReactNode;
    title: string;
};
const AuthGuard = ({ children, authRequired = false, title }: Props) => {
    if (authRequired) useLoginCheck();
    return <>{children}</>;
};
export default AuthGuard;
