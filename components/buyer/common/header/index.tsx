import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CustomButton } from '@components/shared/custom/custom-button';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@components/shared/shadcn-ui/sheet';

const Header = () => {
    const navItems = [
        { href: '#', label: 'Tops' },
        { href: '#', label: 'Bottoms' },
        { href: '#', label: 'Dresses' },
        { href: '#', label: 'Outerwear' },
        { href: '#', label: 'Accessories' },
    ];

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <header className="fixed top-0 left-0 right-0 p-3 bg-white z-50">
            <div className="w-11/12 mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-4">
                    <img src="/images/branding/theirGoods.png" alt="Logo" className="w-auto h-9" />
                </Link>
                <nav className="hidden md:flex space-x-6">
                    {navItems.map(item => (
                        <Link key={item.label} href={item.href}>
                            <div className="text-neutral-10 hover:text-primary-6 hover:bg-primary-1 p-2 rounded-md ">{item.label}</div>
                        </Link>
                    ))}
                </nav>
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/buyer/auth">
                        <CustomButton variant="outline">Login</CustomButton>
                    </Link>
                    <Link href="/seller/auth">
                        <CustomButton variant="default" className="px-9">
                            Sell
                        </CustomButton>
                    </Link>
                </div>
                <div className="flex md:hidden items-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button>
                                <MenuIcon />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-72">
                            <div className="px-1 py-6 pt-16">
                                <nav className="space-x-6">
                                    {navItems.map(item => (
                                        <Link key={item.label} href={item.href}>
                                            <div className="text-neutral-10 hover:text-primary-6 hover:bg-red-400 p-1 ">{item.label}</div>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
