import React from 'react';
import dynamic from 'next/dynamic';
import { MobileSidebar } from './sidebar/mobile-sidebar';
import Head from 'next/head';

const Sidebar = dynamic(() => import('./sidebar'), { ssr: false });

interface CommonLayoutProps {
    children: React.ReactNode;
    title?: string;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children, title }) => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME;
    return (
        <>
            <Head>
                <title>{title ? `${title} - ${appName}` : appName}</title>
            </Head>
            <div className="flex h-screen overflow-hidden border-collapse">
                <Sidebar />
                <main className="flex-1 p-2 md:p-6 overflow-y-auto bg-neutral-2 pt-[14px] h-[calc(100vh-0px)]">
                    <div className="sm:hidden p-2 flex justify-end">
                        <MobileSidebar />
                    </div>
                    {title && <h1 className="text-heading-4 font-semibold mb-3">{title}</h1>}
                    {children}
                </main>
            </div>
        </>
    );
};

export default React.memo(CommonLayout);
