import { useIsomorphicLayoutEffect } from 'ahooks';
import customToast from '@components/shared/custom/custom-toast';
import { useRouter } from 'next/router';
import { PUBLIC_ROUTES } from '@library/constant';

export const useLoginCheck = () => {
    const { pathname } = useRouter();
    const router = useRouter();
    const userData = typeof window !== 'undefined' ? localStorage?.getItem('userInfo') : null;
    const user = userData ? JSON.parse(userData) : null;
    useIsomorphicLayoutEffect(() => {
        if (!user && !PUBLIC_ROUTES.includes(pathname)) {
            customToast({
                title: 'You are not logged in!',
                description: 'Login to access',
                variant: 'destructive',
            });
            router.replace('/');
        }

        if (user) {
            const { role } = user;
            if (PUBLIC_ROUTES.includes(pathname)) {
                customToast({
                    title: 'Welcome back!',
                    description: 'You are already logged in!',
                    variant: 'default',
                });
                if (role === 'admin') {
                    router.replace('/admin/questions');
                } else if (role === 'user') {
                    router.replace('/user');
                }
            }
            if (role === 'admin' && pathname.startsWith('/user')) {
                customToast({
                    title: 'Access Denied',
                    description: 'Admins cannot access user pages.',
                    variant: 'destructive',
                });
                router.replace('/admin/questions');
            } else if (role === 'user' && pathname.startsWith('/admin')) {
                customToast({
                    title: 'Access Denied',
                    description: 'Users cannot access admin pages.',
                    variant: 'destructive',
                });
                router.replace('/user');
            }
        }
    }, [user, pathname]);
};
