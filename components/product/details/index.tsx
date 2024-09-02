import React, { useEffect, useState } from 'react';
import BuyerWrapper from '@components/shared/common/layout/width-wrapper';
import BuyerLayout from '@components/shared/common/layout';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import ProductCartAction from '@components/product/details/cart-action';
import { doc, getDoc } from '@firebase/firestore';
import { db } from '../../../firebaseConfig';
import { useRouter } from 'next/router';
import ProductDescription from '@components/product/details/description';
import { useProductStore } from '@library/store/cart.store';

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

const ProductDetailsComponent: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { setProductName, setProductSubtitle, setPrice } = useProductStore();

    const { query } = useRouter();

    useEffect(() => {
        const fetchProduct = async (productId: string) => {
            try {
                const productDoc = doc(db, 'products', productId);
                const productSnapshot = await getDoc(productDoc);
                if (productSnapshot.exists()) {
                    const productData = productSnapshot.data() as Omit<Product, 'id'>;
                    setProduct({ id: productId, ...productData });
                    setProductName(productData.productName);
                    setProductSubtitle(productData.productSubtitle);
                    setPrice(productData.price);
                } else {
                    setError('No such product!');
                }
            } catch (error) {
                setError('Error fetching product: ' + (error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        if (query.id) {
            fetchProduct(query.id as string);
        }
    }, [query.id]);

    if (loading) return <div>Loading...</div>;
    if (!product) return <div>No product found</div>;

    const images = product.productImages.map(url => ({
        original: url,
        thumbnail: url,
    }));

    return (
        <BuyerLayout title="Product Details">
            <div className="w-full mb-10 mt-16 py-4">
                <BuyerWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-y-4 md:gap-x-4 py-10">
                        <div className="col-span-1 sm:col-span-2">
                            <ImageGallery
                                items={images}
                                autoPlay={false}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                showBullets={false}
                                showNav={false}
                            />
                        </div>
                        <div className="col-span-1 sm:col-span-3">
                            <ProductCartAction />
                        </div>
                    </div>
                    <ProductDescription
                        description={product.description}
                        moreDetails={product.moreDetails}
                        productDetails={product.productDetails}
                        productSubtitle={product.productSubtitle}
                    />
                </BuyerWrapper>
            </div>
        </BuyerLayout>
    );
};

export default ProductDetailsComponent;
