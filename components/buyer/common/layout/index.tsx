import React from 'react';
import Head from 'next/head';

interface CommonLayoutProps {
    children: React.ReactNode;
    title?: string;
}

const BuyerWrapper: React.FC<CommonLayoutProps> = ({ children, title }) => {
    const appName = 'Their Goods';
    return (
        <>
            <Head>
                <title>{title ? `${title} - ${appName}` : appName}</title>
            </Head>
            <div className="flex h-screen overflow-hidden border-collapse">
                    {children}
            </div>
        </>
    );
};

export default React.memo(BuyerWrapper);
