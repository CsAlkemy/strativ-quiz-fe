import AdminGuard from '@components/shared/custom/user-guard';
import LoginComponent from '@components/buyer/auth/login';
import Head from 'next/head';
import React from 'react';

export default function LoginPage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Login-Their Goods</title>
            </Head>
            <AdminGuard authRequire={false}>
                <LoginComponent />
            </AdminGuard>
        </>
    );
}
