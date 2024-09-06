import React from 'react';
import UserLayout from '@components/user/layout';
import Header from '@components/user/header';
import Banner from '@components/user/banner';
import { useSafeState } from 'ahooks';
import QuizComponent from '@components/user/quiz';

const UserComponent = () => {
    const [onScreen, setOnScreen] = useSafeState<'banner' | 'quiz' | 'result'>('banner');
    return (
        <UserLayout>
            <div>
                <Header />
                {onScreen === 'banner' ? <Banner onScreen={onScreen} setOnScreen={setOnScreen} /> : onScreen === 'quiz' ? <QuizComponent /> : null}
            </div>
        </UserLayout>
    );
};

export default UserComponent;
