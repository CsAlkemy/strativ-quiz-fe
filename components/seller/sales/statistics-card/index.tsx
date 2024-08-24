import React from 'react';

interface CouponStatisticCardProps {
    title: string;
    value: string | number;
}

const SalesStatisticCard: React.FC<CouponStatisticCardProps> = ({ title, value }) => {
    return (
        <div className="flex items-center justify-between border-r border-neutral-4 last:border-0">
            <div className="space-y-3 ml-2">
                <div className="text-paragraph-s font-regular text-neutral-8">{title}</div>
                <div className="text-heading-5 font-semi-bold text-neutral-10">{value}</div>
            </div>
        </div>
    );
};

export default SalesStatisticCard;
