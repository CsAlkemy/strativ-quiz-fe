import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = {
    title: string;
    destination?: string;
}
const TitleHeaderComponent = ({title, destination}:Props) => {
    return (
        <div className='flex justify-between items-center mt-10 mb-5'>
            <div className='text-heading-4 font-bold text-neutral-10'>{title}</div>
            {
                destination && (
                    <Link href={destination} className='flex items-center space-x-1'>
                        <div className='text-paragraph-l font-medium text-primary-6 hover:text-primary-5'>See All</div>
                        <ArrowRight className='text-primary-6 hover:text-primary-5' />
                    </Link>
                )
            }
        </div>

    );
};

export default TitleHeaderComponent;
