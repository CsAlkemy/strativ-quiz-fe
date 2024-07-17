import React from 'react';
import BuyerWrapper from '@components/buyer/common/layout/width-wrapper';
import BuyerLayout from '@components/buyer/common/layout';
import CategoryHero from '@components/buyer/categories/hero';
import { UiCustomSelect } from '@components/shared/custom/custom-shadcn-select';
import { CustomButton } from '@components/shared/custom/custom-button';
import ProductCard from '@components/buyer/common/product-card';
import CustomPagination from '@components/shared/custom/custom-pagination';

const products = [
    {
        id: 1,
        title: 'Chic Floral Midi Dress - Perfect for Spring!',
        price: 350.0,
        oldPrice: 400.0,
        imageUrl: '/images/fake/dress.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida',
    },
    {
        id: 2,
        title: 'Nike Running Shoes - Like New!',
        price: 350.0,
        oldPrice: 400.0,
        imageUrl: '/images/fake/shoes.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida',
    },
    {
        id: 3,
        title: 'Chic Floral Midi Dress - Perfect for Spring!',
        price: 350.0,
        oldPrice: 400.0,
        imageUrl: '/images/fake/dress.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida',
    },
    {
        id: 4,
        title: 'Nike Running Shoes - Like New!',
        price: 350.0,
        oldPrice: 400.0,
        imageUrl: '/images/fake/shoes.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida',
    },
    {
        id: 5,
        title: 'Nike Running Shoes - Like New!',
        price: 350.0,
        oldPrice: 400.0,
        imageUrl: '/images/fake/shoes.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida',
    },
    {
        id: 6,
        title: 'Chic Floral Midi Dress - Perfect for Spring!',
        price: 350.0,
        oldPrice: 400.0,
        imageUrl: '/images/fake/dress.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida',
    },
    {
        id: 7,
        title: 'Nike Running Shoes - Like New!',
        price: 350.0,
        oldPrice: 400.0,
        imageUrl: '/images/fake/shoes.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida',
    },
    {
        id: 8,
        title: 'Chic Floral Midi Dress - Perfect for Spring!',
        price: 350.0,
        oldPrice: 400.0,
        imageUrl: '/images/fake/dress.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida',
    },
    {
        id: 9,
        title: 'Nike Running Shoes - Like New!',
        price: 350.0,
        oldPrice: 400.0,
        imageUrl: '/images/fake/shoes.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida',
    },
    {
        id: 10,
        title: 'Nike Running Shoes - Like New!',
        price: 350.0,
        oldPrice: 400.0,
        imageUrl: '/images/fake/shoes.png',
        postedDate: '3 days ago',
        storeName: 'Sapphire Clothing',
        location: 'Miami, Florida',
    },
];
const pagination = {
    page: 1,
    totalCount: 20,
    limit: 10,
    totalPage: 10,
    total: 10,
};

const HomePageComponent = () => {
    return (
        <BuyerLayout title="Categories">
            <BuyerWrapper>
                <CategoryHero />
            </BuyerWrapper>
            <div className="bg-primary-1 w-full my-10 py-4">
                <BuyerWrapper>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            <CustomButton variant="default" className="bg-black">
                                All
                            </CustomButton>
                            <CustomButton variant="outline">Hoodies</CustomButton>
                            <CustomButton variant="outline">Sweatshirts</CustomButton>
                            <CustomButton variant="outline">Sweaters</CustomButton>
                            <CustomButton variant="outline">Turtlenecks</CustomButton>
                        </div>
                        <div>
                            <UiCustomSelect
                                placeholder="Best Match"
                                options={['Best Match', 'Low to High', 'High to Low']}
                                onSelect={() => {}}
                                name="name"
                            />
                        </div>
                    </div>
                </BuyerWrapper>
            </div>
            <BuyerWrapper>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                oldPrice={product.oldPrice}
                                imageUrl={product.imageUrl}
                                postedDate={product.postedDate}
                                storeName={product.storeName}
                                location={product.location}
                            />
                        ))}
                    </div>
                    <CustomPagination pagination={pagination} />
                </div>
            </BuyerWrapper>
        </BuyerLayout>
    );
};

export default HomePageComponent;
