import React from 'react';
import Head from 'next/head';

interface CommonLayoutProps {
    children: React.ReactNode;
    title?: string;
}

const BuyerWrapper: React.FC<CommonLayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title ? `${title} - ${process.env.NEXT_PUBLIC_APP_NAME}` : ''}</title>
            </Head>
            <div className="w-11/12 mx-auto">
                    {children}
            </div>
        </>
    );
};

export default React.memo(BuyerWrapper);
