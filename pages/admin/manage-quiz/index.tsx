import React from 'react';
import AuthGuard from '@components/shared/custom/user-guard';
import Head from 'next/head';
import AdminQuizManager from '@components/admin';

export default function AdminPanelPage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Admin-StrativQuiz</title>
            </Head>
            <AuthGuard authRequired={true} title="Admin Panel">
                <AdminQuizManager />
            </AuthGuard>
        </>
    );
}
