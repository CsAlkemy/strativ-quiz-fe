import React from 'react';
import ProductCard from '@components/buyer/common/product-card';
import TitleHeaderComponent from '@components/buyer/common/title-header';

interface Product {
    id: number;
    title: string;
    price: number;
    oldPrice: number;
    imageUrl: string;
    postedDate: string;
    storeName: string;
    location: string;
}

interface Props {
    products: Product[];
    header: string;
    destination?:string;
}

const ProductOverview: React.FC<Props> = ({ products, header, destination }) => {
    return (
        <div className='mt-20 mb-10'>
            <TitleHeaderComponent title={header} destination={destination} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
    );
};

export default ProductOverview;
