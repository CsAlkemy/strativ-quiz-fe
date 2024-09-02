import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@components/shared/shadcn-ui/dialog';
import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { useProductStore } from '@library/store/cart.store';
import { CustomButton } from '@components/shared/custom/custom-button';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export function CartModal({ setOpen, open }: Props) {
    const price = 71.35;
    const { productName, productSubtitle, quantity, selectedSize, selectedColor, setQuantity, setSelectedSize, setSelectedColor } = useProductStore();

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

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
                                    className={`bg-[${selectedColor}] h-10 w-10 rounded-full border-white border-2 flex justify-center items-center `}></div>
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
                            <CustomButton className="rounded-full bg-primary-Main">${(quantity * price * 1.25).toFixed(2)} | Buy Now</CustomButton>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
