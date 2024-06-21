import { useRouter } from 'next/router';

import React from 'react';
import { useDeepCompareEffect, useSafeState } from 'ahooks';

import { enums } from '@library/enums';
import { funcJwtUserInfo } from '@library/functions';
import { funcAdminGuardCheck } from '@library/functions/index';

import CustomBackdrop from '../custom-backdrop';
import AdminRoleEnums = enums.AdminRoleEnums;
import customToast from '../custom-toast';

const AdminModulesList = {
    DASHBOARD: 'Dashboard',
    USER_MANAGEMENT: 'User Management',
    CANDIDATE: 'Candidate',
    EMPLOYER: 'Employer',
    ADMIN: 'Admin',
    JOB_MANAGEMENT: 'Job Management',
    AD_MANAGEMENT: 'AD Management',
    CONTENT_MANAGEMENT: 'Content Management',
    MESSAGE: 'Message',
    SUPPORT_CENTER: 'Support Center',
    SETTING: 'Setting',
};

type Props = {
    authRequire?: boolean;
    children: JSX.Element;
    role?: string | string[];
    isVerified?: boolean;
};

const userType: { [k: string]: string } = {
    [AdminRoleEnums.SUPER_ADMIN]: AdminRoleEnums.SUPER_ADMIN,
    [AdminRoleEnums.ADMIN]: AdminRoleEnums.ADMIN,
};

const AdminGuard = (props: Props): JSX.Element => {
    const { authRequire, children, role, isVerified } = props;
    const { asPath, replace, isReady } = useRouter();
    const [user, setUser] = useSafeState<boolean>(false);

    const jwtUser = funcJwtUserInfo() as Record<string, any>;

    useDeepCompareEffect(() => {
        (async () => {
            const isAuthenticated = jwtUser && Object.keys(jwtUser).length;
            if (authRequire && !isAuthenticated) {
                // ?redirect=${encodeURIComponent(asPath)}
                replace(`/admin/auth`).catch();
            } else if (!authRequire && !!isAuthenticated) {
                replace(`/admin`).catch();
            } else if (!!isAuthenticated && !funcAdminGuardCheck(jwtUser.userType, jwtUser)) {
                customToast({ title: 'You are not authorized to access this page', type: 'error' });
                replace('/403').catch();
            } else {
                setUser(true);
            }
        })();
    }, [authRequire]);
    if (typeof window === 'undefined' || !user || !isReady) return <CustomBackdrop status={true} />;
    return children;
};
export default AdminGuard;
