import React from 'react';
import ProductOverview from '@components/buyer/common/product-overview';

const products = [
    {
        id: 1,
        title: 'Chic Floral Midi Dress - Perfect for Spring!',
        price: 350.00,
        oldPrice: 400.00,
        imageUrl: '/images/fake/dress.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida'
    },
    {
        id: 2,
        title: 'Nike Running Shoes - Like New!',
        price: 350.00,
        oldPrice: 400.00,
        imageUrl: '/images/fake/shoes.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida'
    },
    {
        id: 3,
        title: 'Chic Floral Midi Dress - Perfect for Spring!',
        price: 350.00,
        oldPrice: 400.00,
        imageUrl: '/images/fake/dress.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida'
    },
    {
        id: 4,
        title: 'Nike Running Shoes - Like New!',
        price: 350.00,
        oldPrice: 400.00,
        imageUrl: '/images/fake/shoes.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida'
    },
    {
        id: 5,
        title: 'Nike Running Shoes - Like New!',
        price: 350.00,
        oldPrice: 400.00,
        imageUrl: '/images/fake/shoes.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida'
    },
];

const Accessories = () => {
    return <ProductOverview products={products} header='Accessories' destination='#' />;
};

export default Accessories;
