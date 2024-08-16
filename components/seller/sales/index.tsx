import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import SalesStatisticCard from 'components/seller/sales/statistics-card';
import { CustomButton } from '@components/shared/custom/custom-button';
import CouponList from 'components/seller/sales/sales-list';
import { EarningsTrendBarChart } from 'components/seller/sales/chart/earnings-trend-bar-chart';
import { EarningsTrendLineChart } from '@components/seller/sales/chart/earnings-trend-line-chart';

const statisticsData = [
    {
        id: '1',
        title: 'Balance available',
        value: '$ 8,936.00',
    },
    {
        id: '2',
        title: 'Withdrawn to date',
        value: '$ 2,837,124.00',
    },
    {
        id: '3',
        title: 'Earnings to date',
        value: '$ 2,937,124.00',
    },
    {
        id: '4',
        title: 'Payments for active orders',
        value: '$ 12,124.00',
    },
];

const SellerSalesComponent = () => {
    return (
        <div className="bg-neutral-2 w-full">
            <div className="flex flex-col sm:flex-row justify-end mb-10 sm:-mt-10  gap-3">
                <CustomButton variant="outline">
                    <Download size={20} className="mr-2" />
                    Download Earnings Report
                </CustomButton>
                <CustomButton>
                    Withdraw
                    <ArrowUpRight size={20} className="text-white" />
                </CustomButton>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 space-y-3 sm:space-y-0 justify-between p-4 py-7 bg-white mb-3 rounded-[8px]">
                {statisticsData.map((stat, index) => (
                    <SalesStatisticCard key={index} title={stat.title} value={stat.value} />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="col-span-1">
                    <EarningsTrendLineChart />
                </div>
                <div className="col-span-1">
                    <EarningsTrendBarChart />
                </div>
            </div>
            <div className="mt-5">
                <CouponList />
            </div>
        </div>
    );
};

export default SellerSalesComponent;
