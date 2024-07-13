import React from 'react';
import TitleHeaderComponent from '@components/buyer/common/title-header';
import Image from 'next/image';

const CategoriesComponent = () => {
    const categories = [
        { id: 1, name: 'Dress', image: '/images/categories/dress.svg' },
        { id: 2, name: 'Bags', image: '/images/categories/bags.svg' },
        { id: 3, name: 'Coats', image: '/images/categories/coats.svg' },
        { id: 4, name: 'Accessories', image: '/images/categories/accessories.svg' },
        { id: 5, name: 'Tops', image: '/images/categories/tops.svg' },
        { id: 6, name: 'Bottoms', image: '/images/categories/bottoms.svg' },
        { id: 7, name: 'Shoes', image: '/images/categories/shoes.svg' },
        { id: 8, name: 'Caps', image: '/images/categories/caps.svg' },
    ];
    return (
        <div className='mt-[18rem] sm:mt-32 mb-10'>
            <TitleHeaderComponent title='Categories' destination='#' />
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6'>
                {categories.map(category => (
                    <div key={category.id} className='text-center'>
                        <div
                            className='h-36 w-36 rounded-full flex justify-center items-center bg-secondary-1 hover:bg-secondary-2 hover:cursor-pointer mx-auto'>
                            <Image src={category.image} alt={category.name} width={64} height={64} />
                        </div>
                        <div>{category.name}</div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default CategoriesComponent;
