import React from 'react';
import { ArrowDownUp, BadgeDollarSign, Layers3, Package, TrendingDown, TrendingUp } from 'lucide-react';
import ProductStatisticCard from '@components/seller/products/statistics-tiles';

const statisticsData = [
    {
        id: '1',
        icon: <ArrowDownUp size={25} className="text-primary-7" />,
        title: 'Products Sold',
        value: '232,392',
        TrendIcon: TrendingUp,
        trendPercentage: '30%',
        trendColor: 'text-success-6',
    },
    {
        id: '2',
        icon: <BadgeDollarSign size={25} className="text-success-7" />,
        title: 'Revenue',
        value: '$15,00034',
        TrendIcon: TrendingUp,
        trendPercentage: '20%',
        trendColor: 'text-success-6',
    },
    {
        id: '3',
        icon: <Layers3 size={25} className="text-warning-7" />,
        title: 'New Customers',
        value: '1,200',
        TrendIcon: TrendingDown,
        trendPercentage: '-10%',
        trendColor: 'text-danger-7',
    },
    {
        id: '4',
        icon: <Package size={25} className="text-danger-7" />,
        title: 'Returned Products',
        value: '85',
        TrendIcon: TrendingDown,
        trendPercentage: '-5%',
        trendColor: 'text-danger-7',
    },
];

const SellerProductsComponent = () => {
    return (
        <div className="bg-neutral-2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {statisticsData.map((stat, index) => (
                    <ProductStatisticCard
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
            <div className="mt-5">Table will goes here !</div>
        </div>
    );
};

export default SellerProductsComponent;
