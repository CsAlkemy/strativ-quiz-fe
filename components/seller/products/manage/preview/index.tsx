import React from 'react';
import { CustomButton } from '@components/shared/custom/custom-button';
import CustomCollapse from '@components/shared/custom/custom-collaps';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

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

const ProductPreviewComponent = () => {
    const { query } = useRouter();
    return (
        <div className="bg-neutral-2 w-full">
            <div className="grid grid-cols-1 gap-y-4">
                <div className="col-span-1">
                    <ImageGallery
                        items={images}
                        autoPlay={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showBullets={false}
                        showNav={false}
                    />
                </div>
                <div className="col-span-2">
                    <div className=" p-7 border border-neutral-4 bg-white rounded-[8px]  flex flex-col gap-3">
                        <div className="text-heading-6 font-bold text-neutral-10">{'Prduct Name'}</div>
                        <div className="text-heading-5 font-bold text-primary-6">$ 34.99</div>
                        <CustomCollapse
                            isOpen={true}
                            title="Product Overview"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                        <CustomCollapse
                            title="Washing Guidelines"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                        <div className="space-y-2 mb-3">
                            <div className="text-paragraph-l font-semi-bold text-neutral-10">Select Size</div>
                            <div className="flex gap-2">
                                <CustomButton variant="default" className="bg-black hover:bg-neutral-9" size="sm">
                                    Small
                                </CustomButton>
                                <CustomButton variant="outline" size="sm">
                                    Medium
                                </CustomButton>
                                <CustomButton variant="outline" size="sm">
                                    Large
                                </CustomButton>
                            </div>
                        </div>
                        <Link href="/buyer/cart" className="">
                            <CustomButton size="sm" className="w-full">
                                <ShoppingBag size={20} className="mx-2" /> Add to Cart
                            </CustomButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPreviewComponent;
