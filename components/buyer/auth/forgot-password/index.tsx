import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import CustomInput from '@components/shared/custom/custom-input';
import { CustomButton } from '@components/shared/custom/custom-button';
import Link from 'next/link';
import { ForgotPasswordSchema, TForgotPasswordSchema } from '@library/schemas/buyer/auth';
import { useSafeState } from 'ahooks';
import CustomOtpInput from '../../../shared/custom/custom-otp-input';
import VerifyOtpComponent from './verify-otp';

const ForgotPasswordComponent = () => {
    const [isOTP, setIsOTP] = useSafeState<boolean>(false);
    const hookForm = useForm<TForgotPasswordSchema>({
        resolver: zodResolver(ForgotPasswordSchema),
        defaultValues: {
            email: '',
        },
    });
    const onSubmit = (data: TForgotPasswordSchema) => {
        console.log('hello world', data);
        if (data) {
            setIsOTP(true);
        }
    };
    return (
        <div>
            {isOTP ? (
                <VerifyOtpComponent />
            ) : (
                <div className="bg-primary-1 h-screen flex justify-center items-center">
                    <div className="p-7 bg-white rounded-xl w-full max-w-[450px]">
                        <div className="flex flex-col gap-3 justify-center items-center mt-4 mb-7">
                            <img src="/images/branding/theirGoodsSmall.png" alt="small branding" className="h-12 w-12" />
                            <div className="text-heading-5 font-bold text-neutral-10">Forgot Password</div>
                            <div className="text-paragraph-m font-regular text-neutral-7 -mt-2">
                                Please enter your email, we’ll send recovery code there.{' '}
                            </div>
                        </div>
                        <form onSubmit={hookForm.handleSubmit(onSubmit)}>
                            <div className="space-y-4">
                                <CustomInput hookForm={hookForm} required name="email" placeholder="Enter Email" />
                                <CustomButton size="lg" isLoading={false} variant="default" className="w-full bg-primary-6" type="submit">
                                    Send
                                </CustomButton>
                                <div className="flex gap-1 justify-center items-center">
                                    <Link className="text-primary-6" href="/buyer/auth/login">
                                        Go Back
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForgotPasswordComponent;
