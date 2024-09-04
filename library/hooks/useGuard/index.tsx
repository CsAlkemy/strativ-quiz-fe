import { useIsomorphicLayoutEffect } from 'ahooks';
import customToast from '@components/shared/custom/custom-toast';
import { useRouter } from 'next/router';
import { PUBLIC_ROUTES } from '@library/constant';

export const useLoginCheck = () => {
    const { pathname } = useRouter();
    const accessToken = typeof window !== 'undefined' ? localStorage?.getItem('userData') : null;
    useIsomorphicLayoutEffect(() => {
        if (!accessToken && !PUBLIC_ROUTES.includes(pathname)) {
            customToast({
                title: 'You are not logged in!',
                description: 'Login to access',
                variant: 'destructive',
            });
            window.location.href = '/auth/login';
        }
        if (!!accessToken && PUBLIC_ROUTES.includes(pathname)) {
            customToast({
                title: 'Welcome back!',
                description: 'You are already logged in!',
                variant: 'default',
            });
            window.location.href = 'user';
        }
    }, [accessToken, pathname]);
};
