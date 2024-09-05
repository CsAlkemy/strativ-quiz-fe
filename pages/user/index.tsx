import React from 'react';
import AuthGuard from '@components/shared/custom/user-guard';
import Head from 'next/head';
import QuizComponent from 'components/user';

export default function QuizPage() {
    return (
        <>
            <Head>
                <title>Quiz-StrativQuiz</title>
            </Head>
            <AuthGuard authRequired={true} title="">
                <QuizComponent />
            </AuthGuard>
        </>
    );
}
