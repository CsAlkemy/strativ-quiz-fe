import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import CustomInput from '@components/shared/custom/custom-input';
import { CustomButton } from '@components/shared/custom/custom-button';
import Link from 'next/link';
import { SignUpSchema, TSignUpSchema } from '@library/schemas/buyer/auth';
import SellerAuthLayout from '@components/seller/auth/layout';

const SignUpComponent = () => {
    const hookForm = useForm<TSignUpSchema>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            userName: '',
            password: '',
            email: '',
        },
    });
    const onSubmit = () => {
        console.log('hello world');
    };
    return (
        <SellerAuthLayout>
            <div className="bg-white h-screen flex justify-center items-center">
                <div className="p-7 bg-white rounded-xl w-full max-w-[450px]">
                    <div className="flex flex-col gap-3 justify-center items-start mt-4 mb-7">
                        <img src="/images/branding/theirGoods.png" alt="small branding" className="h-10 w-auto mb-4" />
                        <div className="text-heading-5 font-bold text-neutral-10">Sign up</div>
                        <div className="text-paragraph-m font-regular text-neutral-7 -mt-2">Enter your details to sign up.</div>
                    </div>
                    <form onSubmit={hookForm.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <CustomInput hookForm={hookForm} required name="userName" placeholder="User Name" />
                            <CustomInput hookForm={hookForm} required name="email" placeholder="Email" />
                            <CustomInput hookForm={hookForm} required name="password" type="password" placeholder="Password" />
                            <CustomButton size="lg" isLoading={false} variant="default" className="w-full bg-primary-6" type="submit">
                                Sign Up
                            </CustomButton>
                            <div className="flex p-2 rounded-[8px] gap-3 justify-center items-center border border-neutral-4 min-h-10 hover:bg-neutral-5 cursor-pointer">
                                <img src="/images/google.png" className="h-5 w-5" alt="google" />
                                <div className="text-paragraph-m font-regular text-neutral-10">Join with Google</div>
                            </div>
                            <div className="flex gap-1 justify-center items-center">
                                <div className="text-paragraph-m font-regular text-neutral-10">Already have an account?</div>
                                <Link className="text-primary-6" href="/seller/auth">
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </SellerAuthLayout>
    );
};

export default SignUpComponent;
