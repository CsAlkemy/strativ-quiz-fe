import React from 'react';
import ProductCard from '@components/shared/common/product-card';
import { Plus } from 'lucide-react';
import { CustomButton } from '@components/shared/custom/custom-button';

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
}

const ProductList: React.FC<Props> = ({ products }) => {
    return (
        <div>
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

export default ProductList;
