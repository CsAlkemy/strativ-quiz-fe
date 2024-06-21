import React from 'react';

interface SkeletonProps {
    className: string;
}
const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
    return <div className={`animate-pulse bg-gray-200 ${className}`}></div>;
};

const DashboardSkeleton: React.FC = () => {
    const skeletonCards = 15;

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                {Array.from({ length: skeletonCards }).map((_, index) => (
                    <div key={index} className="flex flex-col space-y-2">
                        <div className="flex-1 space-y-3">
                            <Skeleton className="h-20 w-full rounded-md" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardSkeleton;
