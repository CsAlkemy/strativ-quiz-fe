import React from 'react';
import AuthGuard from '@components/shared/custom/user-guard';
import Head from 'next/head';
import Questions from '@components/admin/questions';
import CommonLayout from '@components/admin/layout';

export default function AdminPanelPage() {
    return (
        <>
            <Head>
                <title>Questions - StrativQuiz</title>
            </Head>
            <AuthGuard authRequired={true} title="">
                <CommonLayout>
                    <Questions />
                </CommonLayout>
            </AuthGuard>
        </>
    );
}
