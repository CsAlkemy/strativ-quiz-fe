import React from 'react';
import { CustomButton } from '@components/shared/custom/custom-button';
import { Check, Minus, Plus, Star } from 'lucide-react';
import { BreadCrumbNavigator } from '@components/shared/common/breadcrumb';
import { RadioGroup, RadioGroupItem } from '@components/shared/shadcn-ui/radio';
import { ColorOption, SizeOption } from '@library/types/product';
import { useProductStore } from '@library/store/cart.store';

const ProductDescription = () => {
    const {
        productName,
        productSubtitle,
        quantity,
        selectedSize,
        price,
        setPrice,
        selectedColor,
        setQuantity,
        setSelectedSize,
        setSelectedColor,
        setProductName,
        setProductSubtitle,
    } = useProductStore();
    const productPrice = price;
    const sizeOptions: SizeOption[] = [
        { label: 'Small', id: 'small' },
        { label: 'Medium', id: 'medium' },
        { label: 'Large', id: 'large' },
        { label: 'Extra Large', id: 'extra-large' },
        { label: 'XXL', id: 'xxl' },
    ];

    const colorOptions: ColorOption[] = [
        { color: 'Beige', hex: '#ECDECC' },
        { color: 'Green', hex: '#BBD278' },
        { color: 'Blue', hex: '#BBC1F8' },
        { color: 'Pink', hex: '#FFB6B6' },
    ];

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

    return (
        <div className="px-7 bg-white rounded-[8px] flex flex-col gap-3">
            <BreadCrumbNavigator />
            <div className="border-b border-neutral-4 pb-5">
                <div className="text-[28px] font-semi-bold text-neutral-10">{productName}</div>
                <div className="text-[16px] font-semi-bold text-[#B9BBBF]">{productSubtitle}</div>
            </div>
            <div className="border-b border-neutral-4 pb-10 mt-10">
                <div className="flex gap-3">
                    <div className="text-[34px] font-bold text-[#3A4980]">$ {price}</div>
                    <div className="space-y-2">
                        <div className="flex gap-3">
                            <div className="flex gap-2 p-3 rounded-full w-fit bg-[#FBF3EA] text-[#D48D3B]">
                                <Star size={20} />
                                <div className="text-[14px] font-semi-bold">4.8</div>
                            </div>
                            <div className="flex gap-2 p-3 rounded-full w-fit bg-[#EDF0F8] text-[#3A4980]">
                                <Star size={20} />
                                <div className="text-[14px] font-semi-bold">67 Reviews</div>
                            </div>
                        </div>
                        <div className="text-[16px] font-semi-bold text-[#B9BBBF]">
                            <span className="text-green-500">93%</span>
                            {' of buyers have recommended this.'}
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="text-[16px] text-[#B9BBBF] mb-5">Choose a Color</div>
                    <div className="flex gap-2">
                        {colorOptions.map(option => (
                            <div
                                key={option.hex}
                                className={`h-11 w-11 rounded-full flex justify-center items-center cursor-pointer ${
                                    selectedColor === option.hex ? 'bg-opacity-75' : 'bg-opacity-50'
                                }`}
                                style={{ backgroundColor: option.hex }}
                                onClick={() => setSelectedColor(option.hex)}>
                                {selectedColor === option.hex && (
                                    <div className="h-10 w-10 rounded-full border-white border-2 flex justify-center items-center">
                                        <Check size={20} className="text-white" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-5">
                    <div className="text-[16px] text-[#B9BBBF] mb-5">Choose a Size</div>
                    <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
                        {sizeOptions.map(option => (
                            <div
                                key={option.id}
                                className={`flex items-center space-x-2 rounded-md py-1 px-2 w-fit ${
                                    selectedSize === option.label ? 'bg-[#EDF0F8]' : ''
                                }`}>
                                <RadioGroupItem value={option.label} id={option.id} />
                                <label htmlFor={option.id} className={`text-primary-Main ${selectedSize !== option.label ? 'text-[#726C6C]' : ''}`}>
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
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
                <CustomButton className="rounded-full bg-primary-Main">${(quantity * productPrice * 1.25).toFixed(2)} | Add to Cart</CustomButton>
            </div>
        </div>
    );
};

export default ProductDescription;
