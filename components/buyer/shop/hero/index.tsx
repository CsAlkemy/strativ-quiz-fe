import React from 'react';
import { CustomButton } from '@components/shared/custom/custom-button';

const ShopHero = () => {
    return (
        <div className="mt-10">
            <img src="/images/shop-banner.png" className="w-full min-h-[200px]" alt="shop banner" />
            <div className="flex justify-between items-center -mt-10 w-11/12 mx-auto">
                <div className="flex gap-5 items-center">
                    <div className="h-36 w-36 border-2 border-neutral-5 bg-warning-2 flex justify-center items-center p-5 rounded-[8px]">
                        <img src="/images/google.png" alt="shop identity" />
                    </div>
                    <div className="flex justify-between items-center gap-5">
                        <div className=" flex flex-col gap-3 mt-10">
                            <div className="text-heading-3 font-bold text-neutral-10">Sapphire Women Dresses</div>
                            <div className="text-paragraph-l font-regular text-neutral-8">Discover pre-loved treasures.</div>
                        </div>
                        <CustomButton>Follow</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopHero;
