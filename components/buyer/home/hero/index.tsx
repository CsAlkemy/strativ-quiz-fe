import React from 'react';
import { HeroSvgComponent } from '@components/shared/svg';
import { UiCustomInput } from '@components/shared/custom/custom-input';
import { SearchIcon } from 'lucide-react';

const HeroComponent = () => {
    return (
        <div className='mt-16 relative bg-pink-400'>
            <HeroSvgComponent className='min-w-max overflow-x-hidden' />
            <div className='right-0 left-0 absolute top-1/3 bg-primary-1 sm:bg-transparent pb-10 sm:pb-0'>
                <div
                    className=' w-11/12  mx-auto   flex flex-col gap-3 justify-center'>
                    <div className='text-heading-2 md:text-heading-1 font-bold text-neutral-10'>Style Adventures Begin Here:</div>
                    <div className='text-heading-2 md:text-heading-1 font-bold text-neutral-10'>Shop, Sell, <span
                        className='text-heading-2 md:text-heading-1 font-bold text-primary-6'>Connect!</span></div>
                    <div className='text-heading-6 font-regular text-neutral-8'>Discover pre-loved treasures, sell your
                        favorites, and connect with fashion <br /> enthusiasts. Join
                        now!
                    </div>
                    <div className='w-full sm:w-1/3'>
                        <UiCustomInput onChange={() => {
                        }} name='search' prefix={<div>Icon</div>} startIcon={SearchIcon}
                                       placeholder='Search fashion stuff' />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default HeroComponent;
