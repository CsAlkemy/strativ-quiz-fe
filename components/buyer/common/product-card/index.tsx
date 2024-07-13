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
        <div className="border rounded-lg overflow-hidden shadow-lg">
            <Image src={imageUrl} alt={title} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <div className="text-blue-600 font-bold">${price.toFixed(2)}</div>
                <div className="line-through text-gray-500">${oldPrice.toFixed(2)}</div>
                <div className="text-sm text-gray-500">{postedDate}</div>
                <div className="flex items-center mt-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                    <div className="ml-2">
                        <div className="text-sm font-semibold">{storeName}</div>
                        <div className="text-sm text-gray-500">{location}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
