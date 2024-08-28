import React from 'react';
import dynamic from 'next/dynamic';
import { MobileSidebar } from './sidebar/mobile-sidebar';
import Head from 'next/head';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/router';

const Sidebar = dynamic(() => import('./sidebar'), { ssr: false });

interface CommonLayoutProps {
    children: React.ReactNode;
    title?: string;
    isBack?: boolean;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children, title, isBack }) => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME;
    const router = useRouter();
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
                    <div className="flex gap-2 items-center">
                        {isBack && (
                            <span
                                onClick={() => router.back()}
                                className="mb-3 h-10 w-10 rounded-full flex justify-center items-center hover:bg-neutral-4 hover:cursor-pointer">
                                <ArrowLeft size={20} />
                            </span>
                        )}
                        {title && <h1 className="text-heading-4 font-semibold mb-3">{title}</h1>}
                    </div>

                    {children}
                </main>
            </div>
        </>
    );
};

export default React.memo(CommonLayout);
