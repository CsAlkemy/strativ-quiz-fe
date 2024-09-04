import AuthGuard from '@components/shared/custom/user-guard';
import LoginComponent from '@components/auth/login';
import React from 'react';
import Head from 'next/head';

export default function SellerHomePage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Login-StrativQuiz</title>
            </Head>
            <AuthGuard authRequired={false} title="Login">
                <LoginComponent />
            </AuthGuard>
        </>
    );
}
