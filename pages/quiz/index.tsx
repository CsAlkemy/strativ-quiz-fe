import React from 'react';
import AuthGuard from '@components/shared/custom/user-guard';
import Head from 'next/head';

export default function QuizPage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Quiz-StrativQuiz</title>
            </Head>
            <AuthGuard authRequired={false} title="Quiz">
                <div>quiz</div>
            </AuthGuard>
        </>
    );
}
