import React from 'react';
import { Product } from '../data';
import CustomTimeline from '@components/shared/custom/custom-timeline';
import BuyerLayout from '@components/buyer/common/layout';
import { BreadCrumbNavigator } from '@components/buyer/orders/navigator';
import BuyerWrapper from '@components/buyer/common/layout/width-wrapper';
import CartItem from '@components/buyer/cart/cart-item';
import { products } from '@components/buyer/cart/data';
import OrderSummaryComponent from '@components/buyer/orders/order-summary';

const timelineItems = [
    { id: 1, title: 'Order Received', description: 'May 5, 5:54 AM', completed: true },
    { id: 2, title: 'Packaged', description: 'May 5, 8:54 AM', completed: true },
    { id: 3, title: 'Sent Out', description: 'May 6, 9:00 AM', completed: true },
    { id: 3, title: 'In Transit', description: 'Waiting', completed: false },
    { id: 3, title: 'Order Delivered', description: 'Expected May 8, 2023', completed: false },
];

interface Props {
    products: Product[];
}
const OrderDetails = () => {
    return (
        <BuyerLayout title="Order Details">
            <BuyerWrapper>
                <div className="bg-white rounded-[8px] my-28">
                    <BreadCrumbNavigator orderId="Order#128494129" />
                    <div className="flex flex-col sm:flex-row  items-start justify-between pb-5 space-y-3 mb-10">
                        <div className="space-y-1">
                            <div className="text-paragraph-l md:text-heading-6 font-bold text-neutral-10">Order#128494129</div>
                            <div className="text-paragraph-s font-regular text-neutral-7">Placed on 24 Apr 2024 07:48:43</div>
                        </div>
                    </div>
                    <div className="px-5 pt-10 bg-neutral-2 rounded-[8px]">
                        <CustomTimeline items={timelineItems} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-y-4 md:gap-x-4 py-10">
                        <div className="col-span-1 sm:col-span-4 space-y-5">
                            <div className="p-7 border border-neutral-4 bg-white rounded-[8px]  flex flex-col gap-3">
                                <div>
                                    <div className="text-paragraph-l md:text-heading-6 font-bold text-neutral-10 mb-5">Order Info</div>
                                    <div className="flex items-start gap-2 mb-2">
                                        <img src="/images/fake/shop.png" alt="shop" className="h-12 w-12 object-cover" />
                                        <div className="space-y-1">
                                            <div className="text-paragraph-l md:text-heading-6 font-bold text-neutral-10">
                                                Sapphire Women Clothing
                                            </div>
                                            <div className="text-paragraph-s font-regular text-neutral-7">2 Items</div>
                                        </div>
                                    </div>
                                    <div className="hidden sm:grid grid-cols-5 items-center p-4 border-b border-neutral-4">
                                        <div className="text-paragraph-m font-semi-bold text-neutral-8 col-span-2">Product</div>
                                        <div className="text-paragraph-m font-semi-bold text-neutral-8">Price</div>
                                        <div className="text-paragraph-m font-semi-bold text-neutral-8">Quantity</div>
                                        <div className="text-paragraph-m font-semi-bold text-neutral-8">Total</div>
                                    </div>
                                    {products.map(product => (
                                        <CartItem key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 sm:col-span-2">
                            <OrderSummaryComponent />
                        </div>
                    </div>
                </div>
            </BuyerWrapper>
        </BuyerLayout>
    );
};

export default OrderDetails;
