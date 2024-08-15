import React from 'react';
import { CustomTable } from '@components/shared/custom/custom-table';
import { productsColumns } from '@components/seller/products/product-list/columns';

export const productsData = [
    {
        id: 1,
        productName: 'Leather Jacket',
        productLogo: '/images/fake/dress.png',
        category: 'Outerwear',
        price: '$149.99',
        quantityLeft: 50,
        status: 'active',
    },
    {
        id: 2,
        productName: 'Slim Fit Jeans',
        productLogo: '/images/fake/shoes.png',
        category: 'Bottoms',
        price: '$79.99',
        quantityLeft: 200,
        status: 'inactive',
    },
    {
        id: 3,
        productName: 'Sneakers',
        productLogo: '/images/fake/dress.png',
        category: 'Footwear',
        price: '$120.00',
        quantityLeft: 150,
        status: 'active',
    },
    {
        id: 4,
        productName: 'Wool Scarf',
        productLogo: '/images/fake/shoes.png',
        category: 'Accessories',
        price: '$39.99',
        quantityLeft: 75,
        status: 'active',
    },
    {
        id: 5,
        productName: 'Sunglasses',
        productLogo: '/images/fake/dress.png',
        category: 'Accessories',
        price: '$89.99',
        quantityLeft: 30,
        status: 'pending',
    },
];

const ProductList = () => {
    return (
        <div className="bg-white rounded-[8px] p-0 md:p-3 space-y-5">
            <CustomTable data={productsData} columns={productsColumns} isPagination={true} isSearch={false} />
        </div>
    );
};

export default ProductList;
