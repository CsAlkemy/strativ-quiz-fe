import React from 'react';
import { useRouter } from 'next/router';

const CategoryHero = () => {
    const { query } = useRouter();
    return (
        <div className="mt-32 relative bg-primary-8 min-h-[256px] flex flex-col gap-4 items-center justify-center w-full rounded-[16px]">
            <div className="text-heading-2 font-bold text-white">{query.id}</div>
            <div className="text-paragraph-m font-regular text-primary-2">
                {' '}
                Discover 8,632 cozy essentials options for the cold season. From sweaters to coats, stay warm in style.
            </div>
        </div>
    );
};

export default CategoryHero;
