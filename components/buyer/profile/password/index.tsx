import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomInput from '@components/shared/custom/custom-input';
import { PasswordSchema, TPasswordSchema } from '@library/schemas/buyer/profile';
import { CustomButton } from '@components/shared/custom/custom-button';

const PasswordComponent = () => {
    const hookForm = useForm<TPasswordSchema>({
        resolver: zodResolver(PasswordSchema),
        defaultValues: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
    });
    const onSubmit = () => {
        console.log('hello world');
    };
    return (
        <div className="my-10 bg-white p-7 rounded-lg">
            <form onSubmit={hookForm.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-neutral-3 pb-5">
                    <div className="text-paragraph-m font-medium text-neutral-10">Current password</div>
                    <div className="col-span-1 sm:col-span-2">
                        <CustomInput hookForm={hookForm} required name="currentPassword" type="password" placeholder="Current Password" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-neutral-3 pb-5">
                    <div className="text-paragraph-m font-medium text-neutral-10">New password</div>
                    <div className="col-span-1 sm:col-span-2 space-y-5">
                        <CustomInput hookForm={hookForm} required name="newPassword" type="password" placeholder="New Password" />
                        <CustomInput hookForm={hookForm} required name="confirmPassword" type="password" placeholder="Confirm Password" />
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

export default PasswordComponent;
