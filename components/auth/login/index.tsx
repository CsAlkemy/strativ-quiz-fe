import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomInput from '@components/shared/custom/custom-input';
import { CustomButton } from '@components/shared/custom/custom-button';
import { LoginSchema, TLoginSchema } from '@library/schemas/auth';
import users from '@public/data/users.json';
import customToast from '@components/shared/custom/custom-toast';
import { useSafeState } from 'ahooks';

const LoginComponent = () => {
    const router = useRouter();
    const [loading, setLoading] = useSafeState<boolean>(false);
    const hookForm = useForm<TLoginSchema>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const { setValue } = hookForm;

    const onSubmit = (data: TLoginSchema) => {
        setLoading(true);
        const user = users.find(user => user.email === data.email && user.password === data.password);
        if (user) {
            localStorage.setItem('userInfo', JSON.stringify(user));
            customToast({ title: 'Login Success !', variant: 'success', description: '' });
            if (user.role === 'admin') {
                router.replace('/admin/questions');
            } else {
                router.replace('/user');
            }
        } else {
            customToast({ title: 'Invalid email or password', variant: 'destructive', description: 'Please try again' });
        }
        setLoading(false);
    };

    const fillCredentials = (role: 'admin' | 'user') => {
        const user = users.find(u => u.role === role);
        if (user) {
            setValue('email', user.email);
            setValue('password', user.password);
        }
    };

    return (
        <div className="bg-primary-1 h-screen flex justify-center items-center">
            <div className="p-7 bg-white rounded-xl w-full max-w-[450px] pb-10">
                <div className="flex flex-col gap-3 justify-center items-center mb-7">
                    <Image src="/images/branding/strativ.png" alt="small branding" width={100} height={100} className="h-12 w-12" />
                    <div className="text-heading-5 font-bold text-neutral-10">Welcome Back</div>
                    <div className="text-paragraph-m font-regular text-neutral-7 -mt-2">To Strativ Quiz.</div>
                </div>
                <form onSubmit={hookForm.handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <CustomInput hookForm={hookForm} required name="email" placeholder="Enter Email" />
                        <CustomInput hookForm={hookForm} required name="password" type="password" placeholder="Password" />
                        <div className="">
                            <div className="text-xs text-neutral-7 mb-2">Or, Demo Login</div>
                            <div className="grid grid-cols-2 gap-3">
                                <CustomButton
                                    variant="secondary"
                                    className="hover:bg-primary hover:text-white"
                                    size="sm"
                                    onClick={() => fillCredentials('admin')}>
                                    Admin
                                </CustomButton>
                                <CustomButton
                                    variant="secondary"
                                    className="hover:bg-primary hover:text-white"
                                    size="sm"
                                    onClick={() => fillCredentials('user')}>
                                    User
                                </CustomButton>
                            </div>
                        </div>
                        <CustomButton size="lg" isLoading={loading} variant="default" className="w-full bg-primary-6" type="submit">
                            Sign in
                        </CustomButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;
