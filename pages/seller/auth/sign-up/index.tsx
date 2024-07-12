import AdminGuard from '@components/shared/custom/user-guard';
import SignUpComponent from '@components/seller/auth/sign-up';
import Head from 'next/head';
import React from 'react';

export default function SignUpPage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Sign Up -Their Goods</title>
            </Head>
            <AdminGuard authRequire={false}>
                <SignUpComponent />
            </AdminGuard>
        </>
    );
}
