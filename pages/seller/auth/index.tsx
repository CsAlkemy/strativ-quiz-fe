import AdminGuard from '@components/shared/custom/user-guard';
import LoginComponent from '@components/seller/auth/login';
import Head from 'next/head';
import React from 'react';

export default function SellerHomePage(): JSX.Element {
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
