import React from 'react';
import BuyerWrapper from '@components/buyer/common/layout/width-wrapper';
import BuyerLayout from '@components/buyer/common/layout';
import ShopHero from '@components/buyer/shop/hero';
import { UiCustomSelect } from '@components/shared/custom/custom-shadcn-select';
import ProductCard from '@components/buyer/common/product-card';
import CustomPagination from '@components/shared/custom/custom-pagination';
import { UiCustomInput } from '@components/shared/custom/custom-input';
import { SearchIcon } from 'lucide-react';
import CustomCheckbox from '@components/shared/custom/custom-checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CategoriesSchema, TCategoriesSchema } from '@library/schemas/buyer/categories';
import CustomCollapse from '@components/shared/custom/custom-collaps';

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
const categories = [
    {
        id: 'tops',
        label: 'Tops',
    },
    {
        id: 'bottoms',
        label: 'Bottoms',
    },
    {
        id: 'dresses',
        label: 'Dresses',
    },
    {
        id: 'coats',
        label: 'Coats',
    },
    {
        id: 'accessories',
        label: 'Accessories',
    },
    {
        id: 'shoes',
        label: 'Shoes',
    },
];
const colors = [
    {
        id: 'red',
        label: 'Red',
    },
    {
        id: 'blue',
        label: 'Blue',
    },
    {
        id: 'green',
        label: 'Green',
    },
    {
        id: 'yellow',
        label: 'Yellow',
    },
    {
        id: 'black',
        label: 'Black',
    },
    {
        id: 'white',
        label: 'White',
    },
];

const ShopComponent = () => {
    const hookForm = useForm<TCategoriesSchema>({
        resolver: zodResolver(CategoriesSchema),
        defaultValues: {
            categories: ['Tops', 'Bottoms'],
            colors: ['red', 'black'],
        },
    });
    return (
        <BuyerLayout title="Shop name">
            <ShopHero />
            <BuyerWrapper>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-20">
                    <div className="col-span-1 flex-col flex gap-4 mt-16">
                        <CustomCollapse
                            title="Categories"
                            content={
                                <div>
                                    {categories.map(category => (
                                        <div key={category.id} className="my-2">
                                            <CustomCheckbox
                                                name={`categories.${category.id}`}
                                                label={category.label}
                                                id={category.id}
                                                hookForm={hookForm}
                                            />
                                        </div>
                                    ))}
                                </div>
                            }
                        />
                        <CustomCollapse
                            title="Color"
                            content={
                                <div>
                                    {colors.map(color => (
                                        <div key={color.id} className="my-2">
                                            <CustomCheckbox name={`colors.${color.id}`} label={color.label} id={color.id} hookForm={hookForm} />
                                        </div>
                                    ))}
                                </div>
                            }
                        />
                    </div>
                    <div className="col-span-1 md:col-span-4">
                        <div className="flex items-center justify-between mb-5">
                            <div className="w-full sm:w-1/3">
                                <UiCustomInput
                                    onChange={() => {}}
                                    name="search"
                                    prefix={<div>Icon</div>}
                                    startIcon={SearchIcon}
                                    placeholder="Search"
                                />
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
                    </div>
                </div>
                <CustomPagination pagination={pagination} />
            </BuyerWrapper>
        </BuyerLayout>
    );
};

export default ShopComponent;
