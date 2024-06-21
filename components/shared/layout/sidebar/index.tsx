import React, { useState, useCallback } from 'react';

import { NavItems } from '@library/constants';
import { useSidebar } from '@library/hooks/useSidebar';
import { cvaCnMerge } from '@library/shadcn-utils';

import { SideNav } from './side-nav';
import { ChevronsLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const { isOpen, toggle } = useSidebar();
    const [status, setStatus] = useState(false);

    const handleToggle = useCallback(() => {
        setStatus(true);
        toggle();
        setTimeout(() => setStatus(false), 500);
    }, [toggle]);

    return (
        <nav
            className={cvaCnMerge(`relative hidden h-screen bg-white z-20 sm:block w-[78px] ${className}`, {
                'duration-500': status,
                'w-[260px]': isOpen,
            })}>
            <div className="flex flex-col h-full">
                <div className="flex-grow">
                    <div className="mx-6">
                        <Link href="/" className="md:mt-14 mx-5">
                            {isOpen ? (
                                <Image className="block" src="/images/branding/theirGoods.png" width={145} height={32} alt="Logo" />
                            ) : (
                                <Image className="block" src="/images/branding/theirGoodsSmall.png" width={100} height={20} alt="Logo" />
                            )}
                        </Link>
                    </div>
                    <ChevronsLeft
                        className={cvaCnMerge(
                            'absolute -right-2 bottom-1/4 cursor-pointer rounded-full border bg-background text-3xl text-foreground',
                            {
                                'rotate-180': !isOpen,
                            },
                        )}
                        onClick={handleToggle}
                    />
                    <SideNav
                        className="transition-all duration-300 opacity-0 text-background group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100"
                        items={NavItems}
                    />
                </div>
                <div className="p-2 mb-5">
                    <Link href="/profile" className="flex items-center gap-2">
                        <Image className="rounded-full w-14 h-14" src="/images/profile.jpg" width={50} height={50} alt="Profile" />
                        {isOpen && (
                            <div className="flex flex-col gap-1">
                                <div className="text-neutral-10 text-paragraph-s font-semibold">Peter Parker</div>
                                <div className="text-paragraph-s font-normal -mt-1">seller@mail.com</div>
                            </div>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default React.memo(Sidebar);
