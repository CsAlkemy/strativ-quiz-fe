import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductSchema, TProductSchema } from '@library/schemas/seller/products';
import CustomInput from '@components/shared/custom/custom-input';
import { CustomSelect } from '@components/shared/custom/custom-shadcn-select';
import { enums } from '@library/enums';
import CategoriesEnum = enums.CategoriesEnum;

const SellerManageProductsComponent = () => {
    const hookForm = useForm<TProductSchema>({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
            couponCode: '',
            discountType: '',
            discountAmount: 0,
            restriction: '',
            minimumOrderValue: 0,
        },
    });
    const onSubmit = () => {
        console.log('coupon data');
    };
    return (
        <div className="bg-neutral-2 w-full">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <form className="bg-white p-3 rounded-lg space-y-3" onSubmit={hookForm.handleSubmit(onSubmit)}>
                    <CustomSelect
                        placeholder="Category"
                        label="Select Category"
                        name="category"
                        hookForm={hookForm}
                        options={Object.values(CategoriesEnum).map(category => ({
                            label: category,
                            value: category.toLowerCase(),
                        }))}
                    />
                    <CustomInput name="productName" label="Product Name" placeholder="Product Name" hookForm={hookForm} />
                    <CustomInput type="textarea" name="description" label="Description" placeholder="Type here" hookForm={hookForm} />
                    <div></div>
                </form>
                <div className="bg-white p-3 rounded-lg">Preview</div>
            </div>
        </div>
    );
};

export default SellerManageProductsComponent;
