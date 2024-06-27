import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginSchema, TLoginSchema } from '@library/schemas/previous/admin';
import CustomInput from './shared/custom/custom-input';
import { CustomButton } from './shared/custom/custom-button';

const CommonComponents = () => {
    const hookForm = useForm<TLoginSchema>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            identifier: '',
            password: '',
            captcha_token: '',
        },
    });
    const onSubmit = () => {
        console.log('hello world');
    };
    return (
        <div>
            <form onSubmit={hookForm.handleSubmit(onSubmit)}>
                <div className="space-y-6">
                    <CustomInput admin hookForm={hookForm} required label="Enter Email" name="identifier" placeholder="Enter Email" />
                    <CustomInput admin hookForm={hookForm} required label="Password" name="password" type="password" placeholder="Password" />
                    <div>
                        <div className="flex items-center justify-center gap-2 py-1 w-full"></div>
                    </div>
                    <CustomButton className="w-full" type="submit">
                        Sign in
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default CommonComponents;
