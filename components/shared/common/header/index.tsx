import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MenuIcon, ShoppingBag } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@components/shared/shadcn-ui/sheet';
import { CartModal } from '@components/product/cart';

const Header = () => {
    const navItems = [
        { href: '/buyer/categories?id=Tops', label: 'Tops' },
        { href: '/buyer/categories?id=Bottoms', label: 'Bottoms' },
        { href: '/buyer/categories?id=Dress', label: 'Dresses' },
        { href: '/buyer/categories?id=Outerwear', label: 'Outerwear' },
        { href: '/buyer/categories?id=Accessories', label: 'Accessories' },
    ];

    const [isMounted, setIsMounted] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <header className="fixed top-0 left-0 right-0 p-3 py-4 bg-white z-50 border-b border-[#EDEDED]">
            <div className="w-11/12 max-w-screen-2xl mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-4">
                    <img src="/images/branding/companyLogo.png" alt="Logo" className="w-auto h-6" />
                </Link>
                <nav className="hidden md:flex space-x-6"></nav>
                <div className="hidden md:flex items-center space-x-4 hover:cursor-pointer " onClick={() => setOpen(true)}>
                    <div className="relative p-2 bg-[#F5F1EE] h-[50px] w-[50px] rounded-full flex justify-center items-center">
                        <div className="absolute top-0 -right-2 bg-primary-Main w-[20px] h-[20px] flex justify-center items-center rounded-full text-white">
                            3
                        </div>
                        <ShoppingBag size={20} />
                    </div>
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
            <CartModal setOpen={setOpen} open={open} />
        </header>
    );
};

export default Header;
