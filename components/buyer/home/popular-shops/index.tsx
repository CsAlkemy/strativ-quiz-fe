import React from 'react';
import TitleHeaderComponent from '@components/buyer/common/title-header';

const products = [
    { id: 1, title: 'Chic Floral Midi Dress - Perfect for Spring!', subTitle: 'Chic Floral Midi Dress', shopLogo:"/images/google.png" },
    { id: 2, title: 'Chic Floral Midi Dress - Perfect for Spring!' , shopLogo:"/images/google.png"},
    { id: 3, title: 'Chic Floral Midi Dress - Perfect for Spring!' , shopLogo:"/images/google.png"},
];

const PopularShops = () => {
    return (
        <div className='mt-32 mb-10'>
            <TitleHeaderComponent title='Popular Shops' destination='#' />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {products.map(product => (
                    <div className="border rounded-lg overflow-hidden shadow-sm p-4 flex items-center space-x-4">
                        <div className="h-28 w-28 bg-neutral-3 rounded-[8px] flex justify-center items-center p-4">
                        <img alt='shop-identity' src={product.shopLogo}/>
                        </div>
                        <div>
                            <h3 className="text-paragraph-l text-neutral-10 font-semibold">{product.title}</h3>
                            <h3 className="text-paragraph-m text-neutral-10 font-medium">{product.subTitle}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default PopularShops;
