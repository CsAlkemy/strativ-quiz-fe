import React from 'react';
import { CustomButton } from '@components/shared/custom/custom-button';
import 'react-image-gallery/styles/css/image-gallery.css';
import { UiCustomInput } from '@components/shared/custom/custom-input';

const OrderSummaryComponent = () => {
    return (
        <>
            <div className=" p-5 border border-neutral-4 bg-white rounded-[8px]  flex flex-col gap-3">
                <div className="text-heading-6 font-bold text-neutral-10">Order Summary</div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <div className="text-paragraph-m font-medium text-neutral-7">Subtotal (2 Items)</div>
                        <div className="text-paragraph-m font-medium text-neutral-9">1350 USD</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-paragraph-m font-medium text-neutral-7">Taxes</div>
                        <div className="text-paragraph-m font-medium text-neutral-9">100 USD</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-paragraph-m font-medium text-neutral-7">Shipping</div>
                        <div className="text-paragraph-m font-medium text-neutral-9">1450 USD</div>
                    </div>
                    <div className="flex justify-between items-center border-t border-neutral-4">
                        <div className="text-paragraph-m font-medium text-neutral-7 mt-4">Total</div>
                        <div className="text-paragraph-m font-medium text-neutral-9">1600 USD</div>
                    </div>
                </div>
            </div>
            <div className=" p-5 border border-neutral-4  bg-white rounded-[8px]  flex flex-col gap-3 mt-4">
                <div className="text-paragraph-s font-regular text-neutral-7 mt-1">Platform Code</div>
                <div className="flex gap-1">
                    <UiCustomInput onChange={() => {}} name="platformCode" placeholder="Platform Code" />
                    <div className="-ml-14 z-40">
                        <CustomButton variant="secondary" className="text-primary-6">
                            Apply
                        </CustomButton>
                    </div>
                </div>
            </div>
            <div className=" p-5 border border-neutral-4  bg-white rounded-[8px]  flex flex-col gap-3 mt-4">
                <CustomButton>Proceed to Checkout</CustomButton>
                <CustomButton variant="outline">Continue Shopping</CustomButton>
            </div>
        </>
    );
};

export default OrderSummaryComponent;
