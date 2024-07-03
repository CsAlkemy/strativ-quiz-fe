import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CustomButton } from '@components/shared/custom/custom-button';
import Link from 'next/link';
import { TVerifyOTPSchema, VerifyOTPSchema } from '@library/schemas/buyer/auth';
import CustomOtpInput from '@components/shared/custom/custom-otp-input';
import SellerAuthLayout from '@components/seller/auth/layout';

const VerifyOtpComponent = () => {
    const hookForm = useForm<TVerifyOTPSchema>({
        resolver: zodResolver(VerifyOTPSchema),
        defaultValues: {
            otp: '',
        },
    });
    console.log(hookForm.watch('otp'));
    const onSubmit = (data: TVerifyOTPSchema) => {
        console.log('otp', data);
    };
    return (
        <div className="bg-white h-screen flex justify-center items-center">
            <div className="p-7 bg-white rounded-xl w-full max-w-[450px]">
                <div className="flex flex-col gap-3 justify-center items-start mt-4 mb-7">
                    <img src="/images/branding/theirGoods.png" alt="small branding" className="h-10 w-auto mb-4" />
                    <div className="text-heading-5 font-bold text-neutral-10">Forgot Password</div>
                    <div className="text-paragraph-m font-regular text-neutral-7 -mt-2">
                        Please enter the recovery code we sent{' '}
                        <div className="text-start">
                            to <span className="font-medium text-primary-6">{'al@gmail.com'}</span>
                        </div>
                    </div>
                </div>
                <form onSubmit={hookForm.handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <CustomOtpInput hookForm={hookForm} onSubmit={() => {}} name="otp" />
                        <CustomButton size="lg" isLoading={false} variant="default" className="w-full bg-primary-6 mt-4" type="submit">
                            Verify
                        </CustomButton>
                        <div className="flex gap-1 justify-center items-center">
                            <div className="text-paragraph-m font-regular text-neutral-7">{'Didn’t receive the code?'}</div>
                            <Link className="text-primary-6" href="/buyer/auth/sign-up">
                                Resend
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VerifyOtpComponent;
