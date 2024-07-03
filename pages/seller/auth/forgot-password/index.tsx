import AdminGuard from '@components/shared/custom/user-guard';
import ForgotPasswordComponent from '@components/seller/auth/forgot-password';
import Head from 'next/head';
import React from 'react';

export default function ForgotPasswordPage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Forgot Password -Their Goods</title>
            </Head>
            <AdminGuard authRequire={false}>
                <ForgotPasswordComponent />
            </AdminGuard>
        </>
    );
}
