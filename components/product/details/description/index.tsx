import React from 'react';

interface ProductDescriptionProps {
    description: string;
    moreDetails: string;
    productDetails: string;
    productSubtitle: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description, moreDetails, productDetails, productSubtitle }) => {
    return (
        <div className="py-7 bg-white">
            <div className="border-b-4 border-gray-200">
                <div className="pb-3 border-b-4 -mb-1 border-primary-Main w-fit pr-3 ">Description</div>
            </div>
            <div className="space-y-4 mt-10">
                <div className="w-full sm:w-[80%]">
                    <div className="text-[16px] font-bold text-neutral-7">Product Description</div>
                    <div className="text-[13px] font-regular">{description}</div>
                </div>
                <div className="w-full sm:w-[80%]">
                    <div className="text-[16px] font-bold text-neutral-7">Benefits</div>
                    <div className="text-[13px] font-regular">{productSubtitle}</div>
                </div>
                <div className="w-full sm:w-[80%]">
                    <div className="text-[16px] font-bold text-neutral-7">Product Details</div>
                    <div className="text-[13px] font-regular">{productDetails}</div>
                </div>
                <div className="w-full sm:w-[80%]">
                    <div className="text-[16px] font-bold text-neutral-7">More Details</div>
                    <div className="text-[13px] font-regular">{moreDetails}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
