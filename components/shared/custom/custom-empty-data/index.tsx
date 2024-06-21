import React from 'react';
import Image from 'next/image';

const CustomEmptyData = (props: { title: string; description?: string; className?: string }) => {
    return (
        <div className={`p-8 bg-white rounded grid place-items-center px-2 ${props?.className}`}>
            <h1 className="font-bold text-18 mb-10 text-black-500">{props.title}</h1>
            <Image src="/images/empty-box.png" width={200} height={150} alt="emptyData" />
            <p className="font-16 font- mt-10 text-gray-600">{props.description}</p>
        </div>
    );
};

export default CustomEmptyData;
