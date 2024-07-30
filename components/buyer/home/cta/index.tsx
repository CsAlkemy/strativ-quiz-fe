import React from 'react';
import { CustomButton } from '@components/shared/custom/custom-button';
const Cta = () => {
    return (

        <div className="min-h-[314px] bg-primary-8 rounded-[16px] p-10 flex relative items-center mt-32">
            <div className='flex flex-col items-start gap-5'>
                <div className='text-heading-4 font-bold text-white'>Risk-Free Shopping: Enjoy Our 14-Day Return Policy!</div>
                <div className='text-heading-6 font-regular text-primary-2'>Shop worry-free with our hassle-free return policy. Return within 14 days for a <br/> full refund or exchange. Shop confidently!"</div>
                <div className='flex gap-3'>
                    <CustomButton className='bg-white text-neutral-10 hover:bg-neutral-2'>Shop Now</CustomButton>
                    <CustomButton>Learn More</CustomButton>
                </div>
            </div>
            <img src='/images/cta.png' className='absolute right-0 rounded-tr-[16px]' alt='CTA'  />
        </div>
    );
};

export default Cta;
