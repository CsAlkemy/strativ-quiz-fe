import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
    title: string;
    price: number;
    oldPrice: number;
    imageUrl: string;
    postedDate: string;
    storeName: string;
    location: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, oldPrice, imageUrl, postedDate, storeName, location }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-sm">
            <Image src={imageUrl} alt={title} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col gap-1">
                <h2 className="text-paragraph-l font-medium text-neutral-10">{title}</h2>
                <div className='flex gap-2 items-center'>
                    <div className="text-paragraph-l font-semi-bold text-primary-6">${price.toFixed(2)}</div>
                    <div className="line-through text-neutral-6">${oldPrice.toFixed(2)}</div>
                </div>
                <div className="text-paragraph-s font-regular text-neutral-6">{postedDate}</div>
                <div className="flex items-center mt-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                    <div className="ml-2">
                        <div className="text-paragraph-s font-medium text-neutral-9">{storeName}</div>
                        <div className="text-paragraph-xs font-medium text-neutral-6">{location}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
