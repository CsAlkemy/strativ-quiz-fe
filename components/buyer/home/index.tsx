import React from 'react';
import Header from '@components/buyer/common/header';
import Link from 'next/link';
import { CustomButton } from '@components/shared/custom/custom-button';
import { MobileSidebar } from '../../shared/layout/sidebar/mobile-sidebar';

const HomePageComponent = () => {
    return (
        <div>
            <Header />
            <MobileSidebar />
            <div className="h-[90vh] flex justify-center items-center bg-primary-1  gap-5">
                <Link href="/seller/auth">
                    <CustomButton>Seller</CustomButton>
                </Link>
                <Link href="/buyer/auth">
                    <CustomButton>Buyer</CustomButton>
                </Link>
            </div>{' '}
            <div className="h-[90vh] flex justify-center items-center bg-primary-1  gap-5">
                <Link href="/seller/auth">
                    <CustomButton>Seller</CustomButton>
                </Link>
                <Link href="/buyer/auth">
                    <CustomButton>Buyer</CustomButton>
                </Link>
            </div>{' '}
            <div className="h-[90vh] flex justify-center items-center bg-primary-1  gap-5">
                <Link href="/seller/auth">
                    <CustomButton>Seller</CustomButton>
                </Link>
                <Link href="/buyer/auth">
                    <CustomButton>Buyer</CustomButton>
                </Link>
            </div>{' '}
            <div className="h-[90vh] flex justify-center items-center bg-primary-1  gap-5">
                <Link href="/seller/auth">
                    <CustomButton>Seller</CustomButton>
                </Link>
                <Link href="/buyer/auth">
                    <CustomButton>Buyer</CustomButton>
                </Link>
            </div>
        </div>
    );
};

export default HomePageComponent;
