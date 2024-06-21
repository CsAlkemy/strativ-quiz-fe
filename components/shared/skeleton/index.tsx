import React from 'react';

import { Skeleton } from '@components/shared/shadcn-ui/skeleton';

const CardSkeleton = () => {
    return (
        <div className="bg-white p-2 rounded-xl">
            <div className="flex items-center space-x-4 my-5">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <div className="flex justify-between w-[300px]">
                        <Skeleton className="h-4 w-[100px]" />
                        <Skeleton className="h-4 w-[50px]" />
                    </div>
                    <Skeleton className="h-8 w-[100px] rounded" />
                </div>
            </div>
        </div>
    );
};

export default CardSkeleton;
