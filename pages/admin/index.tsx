import React from 'react';
import AuthGuard from '@components/shared/custom/user-guard';
import Head from 'next/head';

export default function AdminPanelPage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Admin-StrativQuiz</title>
            </Head>
            <AuthGuard authRequired={false} title="Admin Panel">
                <div>Admin</div>
            </AuthGuard>
        </>
    );
}
