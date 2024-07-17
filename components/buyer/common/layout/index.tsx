import React from 'react';
import Head from 'next/head';
import Header from '@components/buyer/common/header';
import Footer from '@components/buyer/common/footer';

interface CommonLayoutProps {
    children: React.ReactNode;
    title?: string;
}

const BuyerLayout: React.FC<CommonLayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title ? `${title} - ${process.env.NEXT_PUBLIC_APP_NAME}` : ''}</title>
            </Head>
            <Header />
            <div className="">{children}</div>
            <Footer />
        </>
    );
};

export default React.memo(BuyerLayout);
