import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@components/shared/shadcn-ui/dialog';
import { CustomButton } from '@components/shared/custom/custom-button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomInput from '@components/shared/custom/custom-input';
import React from 'react';
import CustomFileUploader from '@components/shared/custom/custom-file-uploader';
import { ProductSchema, TProductSchema } from '@library/schemas/product';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export function AddProduct({ setOpen, open }: Props) {
    const hookForm = useForm<TProductSchema>({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
            productName: '',
            productSubtitle: '',
            price: 0,
            description: '',
            productDetails: '',
            moreDetails: '',
            productImages: [],
        },
    });
    const onSubmit = () => {
        console.log('hello world');
    };
    return (
        <Dialog open={open}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Add Product</DialogTitle>
                </DialogHeader>
                <form onSubmit={hookForm.handleSubmit(onSubmit)} className="grid gap-4 py-4">
                    <CustomInput hookForm={hookForm} required name="productName" placeholder="Product Name" />
                    <CustomInput hookForm={hookForm} required name="productSubtitle" placeholder="Product Subtitle" />
                    <CustomInput hookForm={hookForm} type="number" required name="price" placeholder="Price" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
                        <CustomInput hookForm={hookForm} type="textarea" required name="description" placeholder="Description" />
                        <CustomInput hookForm={hookForm} required type="textarea" name="benefits" placeholder="Benefits" />
                        <CustomInput hookForm={hookForm} required type="textarea" name="productDetails" placeholder="Product Details" />
                        <CustomInput hookForm={hookForm} required type="textarea" name="moreDetails" placeholder="More Details" />
                    </div>

                    <CustomFileUploader name="productImages" maxFiles={5} hookForm={hookForm} />
                    <div className="flex justify-end space-x-3">
                        <CustomButton type="button" variant="destructive" onClick={() => setOpen(false)}>
                            Close
                        </CustomButton>
                        <CustomButton type="submit">Save changes</CustomButton>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
