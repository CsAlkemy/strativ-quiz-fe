import React from 'react';
import { CustomButton } from '@components/shared/custom/custom-button';
import { UiCustomInput } from '@components/shared/custom/custom-input';
import { Copy } from 'lucide-react';

const OrderSummaryComponent = () => {
    const copyToClipboard = (text: string) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                alert('Copied to clipboard!');
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    };
    return (
        <>
            <div className=" p-5 border border-neutral-4  bg-white rounded-[8px]  flex flex-col gap-3 mb-4">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="space-y-2">
                            <div className="text-neutral-7 text-paragraph-s font-regular">Order Date</div>
                            <div className="text-neutral-10 text-paragraph-m font-regular">May 4, 2023</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-neutral-7 text-paragraph-s font-regular">Tracking Number</div>
                            <div className="text-neutral-10 text-paragraph-m font-regular flex gap-1 items-center">
                                GHYQ1287914{' '}
                                <span
                                    className="p-1 bg-neutral-2 hover:border-neutral-6 cursor-pointer"
                                    onClick={() => copyToClipboard('GHYQ1287914')}>
                                    <Copy size={14} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-neutral-7 text-paragraph-s font-regular">Address</div>
                        <div className="text-neutral-10 text-paragraph-m font-regular">852 Preston Rd. Inglewood, Maine 98380</div>
                    </div>
                </div>
            </div>
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
        </>
    );
};

export default OrderSummaryComponent;
