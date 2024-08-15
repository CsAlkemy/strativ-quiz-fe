import React from 'react';
import { ArrowsUpFromLine, BadgeDollarSign, PanelLeftDashed, Plus, TrendingDown, TrendingUp } from 'lucide-react';
import CouponStatisticCard from 'components/seller/coupons/statistics-card';
import { CustomButton } from '@components/shared/custom/custom-button';
import CouponList from '@components/seller/coupons/coupon-list';
import { CouponUsageBarChart } from '@components/seller/coupons/chart/coupon-usage-bar-chart';

const statisticsData = [
    {
        id: '1',
        icon: <PanelLeftDashed size={25} className="text-primary-7" />,
        title: 'Coupons used',
        value: '232',
        TrendIcon: TrendingUp,
        trendPercentage: '30%',
        trendColor: 'text-success-6',
    },
    {
        id: '2',
        icon: <BadgeDollarSign size={25} className="text-success-7" />,
        title: 'Money Saved',
        value: '$2,837',
        TrendIcon: TrendingDown,
        trendPercentage: '30%',
        trendColor: 'text-danger-6',
    },
    {
        id: '3',
        icon: <ArrowsUpFromLine size={25} className="text-primary-7" />,
        title: 'Most Used Coupon',
        value: 'SAVE20NOW',
        TrendIcon: TrendingUp,
        trendPercentage: '40x',
        trendColor: 'text-success-7',
    },
];

const SellerCouponsComponent = () => {
    return (
        <div className="bg-neutral-2 w-full">
            <div className="flex justify-end mb-10 -mt-10">
                <CustomButton>
                    <Plus size={20} className="text-white" /> Add New Coupon
                </CustomButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex flex-col space-y-3 sm:space-y-0 justify-between">
                    {statisticsData.map((stat, index) => (
                        <CouponStatisticCard
                            key={index}
                            icon={stat.icon}
                            title={stat.title}
                            value={stat.value}
                            trendIcon={stat.TrendIcon}
                            trendPercentage={stat.trendPercentage}
                            trendColor={stat.trendColor}
                        />
                    ))}
                </div>

                <div className="col-span-1 md:col-span-2">
                    <CouponUsageBarChart />
                </div>
            </div>
            <div className="mt-5">
                <CouponList />
            </div>
        </div>
    );
};

export default SellerCouponsComponent;
