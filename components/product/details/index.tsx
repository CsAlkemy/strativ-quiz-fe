import React from 'react';
import BuyerWrapper from '@components/shared/common/layout/width-wrapper';
import BuyerLayout from '@components/shared/common/layout';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import ProductCartAction from '@components/product/details/cart-action';
import ProductDescription from '@components/product/details/description';

const images = [
    {
        original:
            'https://images.pexels.com/photos/18717338/pexels-photo-18717338/free-photo-of-house-at-memories-aicha-luxury-camp-on-wadi-rum-desert-in-jordan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

        thumbnail:
            'https://images.pexels.com/photos/18717338/pexels-photo-18717338/free-photo-of-house-at-memories-aicha-luxury-camp-on-wadi-rum-desert-in-jordan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        original:
            'https://images.pexels.com/photos/18717338/pexels-photo-18717338/free-photo-of-house-at-memories-aicha-luxury-camp-on-wadi-rum-desert-in-jordan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

        thumbnail:
            'https://images.pexels.com/photos/18717338/pexels-photo-18717338/free-photo-of-house-at-memories-aicha-luxury-camp-on-wadi-rum-desert-in-jordan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        original:
            'https://images.pexels.com/photos/18717338/pexels-photo-18717338/free-photo-of-house-at-memories-aicha-luxury-camp-on-wadi-rum-desert-in-jordan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail:
            'https://images.pexels.com/photos/18717338/pexels-photo-18717338/free-photo-of-house-at-memories-aicha-luxury-camp-on-wadi-rum-desert-in-jordan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        original:
            'https://images.pexels.com/photos/18717338/pexels-photo-18717338/free-photo-of-house-at-memories-aicha-luxury-camp-on-wadi-rum-desert-in-jordan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

        thumbnail:
            'https://images.pexels.com/photos/18717338/pexels-photo-18717338/free-photo-of-house-at-memories-aicha-luxury-camp-on-wadi-rum-desert-in-jordan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        original:
            'https://images.pexels.com/photos/15533467/pexels-photo-15533467/free-photo-of-sainte-petersburg-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail:
            'https://images.pexels.com/photos/15533467/pexels-photo-15533467/free-photo-of-sainte-petersburg-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        original:
            'https://images.pexels.com/photos/15166393/pexels-photo-15166393/free-photo-of-ishak-pasha-palace-in-armenia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail:
            'https://images.pexels.com/photos/15166393/pexels-photo-15166393/free-photo-of-ishak-pasha-palace-in-armenia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
];

const ProductDetailsComponent = () => {
    return (
        <BuyerLayout title="Product Details">
            <div className="w-full mb-10 mt-16  py-4">
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
                    <ProductDescription />
                </BuyerWrapper>
            </div>
        </BuyerLayout>
    );
};

export default ProductDetailsComponent;
