import React from 'react';
import { Product } from '@components/buyer/cart/data';
import { CustomButton } from '@components/shared/custom/custom-button';
import { MinusIcon, PlusIcon } from 'lucide-react';

interface CartItemProps {
    product: Product;
    quantityAction?: boolean;
}

const CartItemComponent = ({ product, quantityAction = false }: CartItemProps) => {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-5 items-center p-4 border-b border-neutral-4 space-y-3 last:border-0">
            <div className="flex gap-2 items-center col-span-3 sm:col-span-2">
                <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover" />
                <div className="flex flex-col gap-2">
                    <h2 className="text-paragraph-m font-medium text-neutral-10">{product.name}</h2>
                    <p className="text-paragraph-s font-regular text-neutral-7">
                        {product.color} {product.size}
                    </p>
                </div>
            </div>
            <div className="text-paragraph-m text-neutral-8 font-medium">${product.price} USD</div>
            {quantityAction ? (
                <div className="flex items-center gap-2 p-1 border border-neutral-4 rounded-[5px] w-fit">
                    <CustomButton size="icon" variant="secondary" className="h-7 w-7 hover:bg-primary-6 hover:text-white cursor-pointer">
                        <MinusIcon size={15} />
                    </CustomButton>
                    <div>{product.quantity}</div>
                    <CustomButton size="icon" variant="secondary" className="h-7 w-7 hover:bg-primary-6 hover:text-white cursor-pointer">
                        <PlusIcon size={15} />
                    </CustomButton>
                </div>
            ) : (
                <div>{product.quantity}</div>
            )}

            <div className="text-paragraph-m text-neutral-8 font-bold">${product.price} USD</div>
        </div>
    );
};

export default CartItemComponent;
