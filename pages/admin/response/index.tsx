import React from 'react';
import AuthGuard from '@components/shared/custom/user-guard';
import Head from 'next/head';
import AdminManageQuiz from '@components/admin/manage-quiz';

export default function AdminPanelPage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Manage Quiz-StrativQuiz</title>
            </Head>
            <AuthGuard authRequired={true} title="">
                <AdminManageQuiz />
            </AuthGuard>
        </>
    );
}
