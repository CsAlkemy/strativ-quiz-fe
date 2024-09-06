import React from 'react';
import AuthGuard from '@components/shared/custom/user-guard';
import Head from 'next/head';

export default function AdminPanelPage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Response-StrativQuiz</title>
            </Head>
            <AuthGuard authRequired={true} title="">
                <div>Response</div>
            </AuthGuard>
        </>
    );
}
