import React from 'react';
import { Product } from '../data';
import CartItem from '@components/buyer/cart/cart-item';
import { UiCustomInput } from '@components/shared/custom/custom-input';
import { CustomButton } from '@components/shared/custom/custom-button';

interface Props {
    products: Product[];
    shopName: string;
}
const ShopWiseCart = ({ products, shopName }: Props) => {
    const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <div className="p-7 border border-neutral-4 bg-white rounded-[8px]  flex flex-col gap-3">
            <div>
                <div className="flex items-start gap-2 mb-2">
                    <img src="/images/fake/shop.png" alt="shop" className="h-12 w-12 object-cover" />
                    <div className="space-y-1">
                        <div className="text-paragraph-l md:text-heading-6 font-bold text-neutral-10">{shopName}</div>
                        <div className="text-paragraph-s font-regular text-neutral-7">{products.length} Items</div>
                    </div>
                </div>
                <div className="hidden sm:grid grid-cols-5 items-center p-4 border-b border-neutral-4">
                    <div className="text-paragraph-m font-semi-bold text-neutral-8 col-span-2">Product</div>
                    <div className="text-paragraph-m font-semi-bold text-neutral-8">Price</div>
                    <div className="text-paragraph-m font-semi-bold text-neutral-8">Quantity</div>
                    <div className="text-paragraph-m font-semi-bold text-neutral-8">Total</div>
                </div>
                {products.map(product => (
                    <CartItem key={product.id} product={product} quantityAction={true} />
                ))}
                <div className="my-4">
                    <div className="flex justify-between items-center">
                        <div className="text-paragraph-m font-regular text-neutral-8">Total</div>
                        <div className="text-paragraph-m font-regular text-neutral-8">{total} USD</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-2 mt-4">
                        <div className="text-paragraph-m font-medium text-neutral-10">Have Sapphire Coupon Code? Apply now to save some money.</div>
                        <div className="flex gap-1">
                            <UiCustomInput onChange={() => {}} name="Coupon Code" placeholder="Coupon Code" />
                            <div className="-ml-14 z-40">
                                <CustomButton>Apply</CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopWiseCart;
