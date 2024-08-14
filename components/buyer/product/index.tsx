import React from 'react';
import BuyerWrapper from '@components/buyer/common/layout/width-wrapper';
import BuyerLayout from '@components/buyer/common/layout';
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

const ProductDetailsComponent = () => {
    const { query } = useRouter();
    return (
        <BuyerLayout title="Categories">
            <div className="bg-neutral-2 w-full mb-10 mt-16  py-4">
                <BuyerWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-y-4 md:gap-x-4 py-10">
                        <div className="col-span-1 sm:col-span-4">
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
                                <div className="text-heading-6 font-bold text-neutral-10">{query.id}</div>
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
                            <div className=" p-7 border border-neutral-4  bg-white rounded-[8px]  flex flex-col gap-3 mt-4">
                                <div>Sold By</div>
                                <div className="flex gap-2 items-start">
                                    <img src="/images/branding/theirGoodsSmall.png" className=" w-10 h-10 object-fill" alt="shop logo" />
                                    <div className="flex flex-col gap-2">
                                        <div className="text-paragraph-m font-semi-bold text-neutral-10">Sapphire Women Clothing</div>
                                        <div className="text-paragraph-s font-regular text-neutral-7">670 Followers</div>
                                    </div>
                                </div>
                                <CustomButton size="sm" variant="outline">
                                    View Store
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                </BuyerWrapper>
            </div>
        </BuyerLayout>
    );
};

export default ProductDetailsComponent;
