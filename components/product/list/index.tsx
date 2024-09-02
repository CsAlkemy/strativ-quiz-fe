import ProductCard from '@components/shared/common/product-card';

interface Product {
    id: string;
    moreDetails: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    productImages: string[];
    description: string;
    productDetails: string;
    productName: string;
    price: number;
    productSubtitle: string;
}

interface Props {
    products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.productName}
                        price={product.price}
                        imageUrl={product.productImages[0]}
                        postedDate={new Date(product.createdAt.seconds * 1000).toISOString()}
                        storeName={product.productSubtitle}
                        location=""
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
