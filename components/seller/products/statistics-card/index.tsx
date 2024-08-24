import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ProductStatisticCardProps {
    icon: ReactNode;
    title: string;
    value: string | number;
    trendIcon?: LucideIcon;
    trendPercentage?: string;
    trendColor?: string;
}

const ProductStatisticCard: React.FC<ProductStatisticCardProps> = ({
    icon,
    title,
    value,
    trendIcon: TrendIcon = null,
    trendPercentage = '',
    trendColor = 'text-success-6',
}) => {
    return (
        <div className="bg-white rounded-[8px] p-3 space-y-5">
            <div className="border border-neutral-5 p-1 w-14 h-14 rounded-[8px] flex justify-center items-center">{icon}</div>
            <div className="flex justify-between items-center">
                <div className="space-y-2">
                    <div className="text-paragraph-s font-regular text-neutral-8">{title}</div>
                    <div className="text-heading-6 font-semibold">{value}</div>
                </div>
                {TrendIcon && trendPercentage && (
                    <div className={`flex gap-2 ${trendColor} text-paragraph-m`}>
                        <TrendIcon size={15} className={trendColor} /> {trendPercentage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductStatisticCard;
