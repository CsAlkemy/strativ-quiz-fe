import React from 'react';
import Image from 'next/image';
import { CustomButton } from '@components/shared/custom/custom-button';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    return (
        <div className="my-10 p-5 min-h-20 bg-primary bg-opacity-10 w-full rounded-2xl">
            <div className="flex justify-between items-center">
                <div>
                    <Image src="/images/branding/strativ-Logo.svg" width={100} height={30} alt="logo" />
                    <div className="text-primary font-bold text-xl">Quiz</div>
                </div>
                <CustomButton
                    onClick={() => {
                        localStorage.removeItem('userInfo');
                        router.replace('/');
                    }}
                    variant="default"
                    size="icon">
                    <LogOut size={20} />
                </CustomButton>
            </div>
        </div>
    );
};

export default React.memo(Header);
