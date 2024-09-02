import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@components/shared/shadcn-ui/dialog';
import React, { useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { useProductStore } from '@library/store/cart.store';
import { CustomButton } from '@components/shared/custom/custom-button';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../../../firebaseConfig';
import customToast from '@components/shared/custom/custom-toast';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export function CartModal({ setOpen, open }: Props) {
    const { productName, productSubtitle, quantity, selectedSize, selectedColor, price, setQuantity, setSelectedSize, setSelectedColor } =
        useProductStore();
    const [loading, setLoading] = useState<boolean>(false);

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

    const handleBuyNow = async () => {
        const cartItem = {
            productName,
            productSubtitle,
            selectedColor,
            selectedSize,
            quantity,
            totalAmount: (quantity * price * 1.25).toFixed(2),
        };

        setLoading(true); // Set loading to true when request starts

        try {
            await addDoc(collection(db, 'cart'), cartItem);
            customToast({
                title: 'Success',
                description: 'Successfully added',
                variant: 'success',
            });
            setOpen(false);
        } catch (error) {
            console.error('Error adding document: ', error);
            customToast({
                title: 'Failed',
                description: 'Failed to add item to cart. Please try again',
                variant: 'destructive',
            });
        } finally {
            setLoading(false); // Set loading to false when request completes
        }
    };

    return (
        <Dialog open={open}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader className="flex !flex-row justify-between">
                    <DialogTitle></DialogTitle>
                    <X onClick={() => setOpen(false)} className="cursor-pointer" />
                </DialogHeader>
                <div>
                    <div className="flex gap-4">
                        <img src="/images/fake/dress.png" alt="dress" className="h-16" />
                        <div className="space-y-5">
                            <div className="text-[28px] font-semi-bold text-neutral-10">{productName}</div>
                            <div className="text-[16px] font-semi-bold text-[#B9BBBF]">{productSubtitle}</div>
                            <div className="flex gap-4 items-center">
                                <div
                                    style={{ backgroundColor: selectedColor }}
                                    className={`h-10 w-10 rounded-full border-white border-2 flex justify-center items-center `}></div>
                                <div className="bg-gray-100 px-3 rounded-md w-fit h-fit">{selectedSize}</div>
                            </div>
                            <div className="flex gap-3 mt-5 items-center">
                                <div className="flex gap-2 bg-[#F3F3F3] rounded-full items-center">
                                    <CustomButton size="icon" variant="secondary" className="rounded-full" onClick={decrementQuantity}>
                                        <Minus size={12} />
                                    </CustomButton>
                                    <div className="text-[14px] font-bold mx-2">{quantity}</div>
                                    <CustomButton size="icon" variant="secondary" className="rounded-full" onClick={incrementQuantity}>
                                        <Plus size={12} />
                                    </CustomButton>
                                </div>
                            </div>
                            <CustomButton onClick={handleBuyNow} className="rounded-full bg-primary-Main" isLoading={loading}>
                                {`${(quantity * price * 1.25).toFixed(2)} | Buy Now`}
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
