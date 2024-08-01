import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomInput from '@components/shared/custom/custom-input';
import { AccountSchema, TAccountSchema } from '@library/schemas/buyer/profile';
import { CustomButton } from '@components/shared/custom/custom-button';
import CustomDatePicker from '@components/shared/custom/custom-date-picker';
import { UiDatePicker } from '@components/shared/shadcn-ui/ui-date-picker';

const AccountComponent = () => {
    const hookForm = useForm<TAccountSchema>({
        resolver: zodResolver(AccountSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            dob: '',
        },
    });
    const onSubmit = () => {
        console.log('hello world');
    };
    return (
        <div className="my-10 bg-white p-7 rounded-lg">
            <form onSubmit={hookForm.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-neutral-3 pb-5">
                    <div className="text-paragraph-m font-medium text-neutral-10">Name</div>
                    <CustomInput hookForm={hookForm} required name="firstName" placeholder="First Name" />
                    <CustomInput hookForm={hookForm} required name="lastName" placeholder="Last Name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-neutral-3 pb-5">
                    <div className="text-paragraph-m font-medium text-neutral-10">Email Address</div>
                    <div className="col-span-1 sm:col-span-2">
                        <CustomInput hookForm={hookForm} required name="email" placeholder="Enter Email" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-neutral-3 pb-5">
                    <div className="text-paragraph-m font-medium text-neutral-10">Birthday</div>
                    <div className="col-span-1 sm:col-span-2">
                        <CustomDatePicker className="h-10 w-full" label="" hookForm={hookForm} required name="dob" />
                    </div>
                </div>
                <div className="flex justify-end space-x-5">
                    <CustomButton size="sm" variant="outline">
                        Cancel
                    </CustomButton>
                    <CustomButton size="sm">Update</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default AccountComponent;
