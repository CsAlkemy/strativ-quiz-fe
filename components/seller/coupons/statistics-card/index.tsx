import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface CouponStatisticCardProps {
    icon: ReactNode;
    title: string;
    value: string | number;
    trendIcon?: LucideIcon;
    trendPercentage?: string;
    trendColor?: string;
}

const CouponStatisticCard: React.FC<CouponStatisticCardProps> = ({
    icon,
    title,
    value,
    trendIcon: TrendIcon = null,
    trendPercentage = '',
    trendColor = 'text-success-6',
}) => {
    return (
        <div className="bg-white rounded-[8px] px-3 min-h-28 space-y-5 flex items-center justify-between shadow-sm ">
            <div className="flex gap-2 items-center">
                <div className="border border-neutral-5 p-1 w-14 h-14 rounded-[8px] flex justify-center items-center">{icon}</div>
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <div className="text-paragraph-s font-regular text-neutral-8">{title}</div>
                        <div className="text-heading-6 font-semibold">{value}</div>
                    </div>
                </div>
            </div>

            {TrendIcon && trendPercentage && (
                <div className={`flex gap-2 ${trendColor} text-paragraph-m`}>
                    <TrendIcon size={15} className={trendColor} /> {trendPercentage}
                </div>
            )}
        </div>
    );
};

export default CouponStatisticCard;
