import React from 'react';

interface Props {
    children: React.ReactNode;
    title?: string;
}

const SellerAuthLayout = ({ children }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[url('/images/seller-login.png')] hidden md:block relative">
                <div className="absolute right-0 bottom-0">
                    <div className="relative">
                        <img src="/images/buyer-banner.png" alt="buyer banner" />
                        <div className="absolute -top-32 text-heading-2 font-bold text-white">
                            Welcome to theirgoods <br /> Seller Dashboard
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default SellerAuthLayout;
