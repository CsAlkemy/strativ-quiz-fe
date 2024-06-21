import toast, { ToastOptions } from 'react-hot-toast';

import CustomToastContent from '@components/shared/custom/custom-toast/toast-content';

import { cvaCnMerge } from '@library/shadcn-utils';
import { CircleX } from 'lucide-react';

type Props = {
    type?: 'success' | 'error';
    title?: string;
    description?: string;
    duration?: number;
    id?: string;
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
};
export default function customToast({ title, description, id = '1', position = 'bottom-right', duration = 4000, type = 'success' }: Props) {
    const toastOptions: ToastOptions = {
        duration,
        position,
        id,
        className: cvaCnMerge(`!bg-green-600 !text-white`, {
            '!bg-destructive': type === 'error',
        }),
    };

    return toast[type](
        t => (
            <div className="relative ml-3">
                <span onClick={() => toast.dismiss(t.id)} className="absolute w-4 h-4 cursor-pointer -top-1 -right-3">
                    {<CircleX />}
                </span>
                <CustomToastContent title={title} description={description} />
            </div>
        ),
        toastOptions,
    );
}
