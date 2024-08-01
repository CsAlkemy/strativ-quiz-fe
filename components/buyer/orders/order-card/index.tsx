import React from 'react';
import { Product } from '../data';
import { CustomButton } from '@components/shared/custom/custom-button';
import Link from 'next/link';

interface Props {
    products: Product[];
}
const OrderCard = ({ products }: Props) => {
    return (
        <div className="p-7 bg-white rounded-[8px] my-5">
            <div className="flex flex-col sm:flex-row  items-start justify-between border-b border-neutral-4 pb-5 space-y-3">
                <div className="space-y-1">
                    <Link href="/buyer/orders/details">
                        <div className="text-paragraph-l md:text-heading-6 font-bold text-neutral-10">Order#128494129</div>
                    </Link>
                    <div className="text-paragraph-s font-regular text-neutral-7">Placed on 24 Apr 2024 07:48:43</div>
                </div>
                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    <CustomButton variant="default" className="bg-primary-1 w-full sm:w-fit text-primary-6 hover:text-white">
                        Expected Delivery: June 7, 2023
                    </CustomButton>
                    <CustomButton variant="outline" className="w-full sm:w-fit">
                        Download Invoice
                    </CustomButton>
                </div>
            </div>
            {products.slice(0, 2).map(product => (
                <div className="grid grid-cols-3 sm:grid-cols-5 items-center justify-between p-4 border-b last:border-b-0 border-neutral-4 space-y-3">
                    <div className="flex gap-2 items-center col-span-5 sm:col-span-3">
                        <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover" />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-paragraph-m font-medium text-neutral-10">{product.name}</h2>
                            <p className="text-paragraph-s font-regular text-neutral-7">
                                {product.color} {product.size}
                            </p>
                        </div>
                    </div>
                    <div className="text-paragraph-m text-neutral-8 font-medium col-span-3 sm:col-span-1">Qty: {product.quantity}</div>
                    <div className="text-paragraph-m text-neutral-8 font-bold">{product.price} USD</div>
                </div>
            ))}
        </div>
    );
};

export default OrderCard;
