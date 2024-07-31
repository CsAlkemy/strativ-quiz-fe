import React from 'react';
import BuyerWrapper from '@components/buyer/common/layout/width-wrapper';
import BuyerLayout from '@components/buyer/common/layout';
import 'react-image-gallery/styles/css/image-gallery.css';
import OrderSummaryComponent from '@components/buyer/cart/order-summary';
import { products } from './data';
import ShopWiseCart from '@components/buyer/cart/shop';

const CartComponent = () => {
    return (
        <BuyerLayout title="Categories">
            <div className="bg-neutral-2 w-full mb-10 mt-16  py-4">
                <BuyerWrapper>
                    <div className="text-heading-3 font-bold text-neutral-10 mt-10">My Cart</div>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-y-4 md:gap-x-4 py-10">
                        <div className="col-span-1 sm:col-span-4 space-y-5">
                            <ShopWiseCart products={products} shopName="Sapphire Women Clothing" />
                            <ShopWiseCart products={products} shopName="Urban Apparel" />
                        </div>
                        <div className="col-span-1 sm:col-span-2">
                            <OrderSummaryComponent />
                        </div>
                    </div>
                </BuyerWrapper>
            </div>
        </BuyerLayout>
    );
};

export default CartComponent;
