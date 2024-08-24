import React from 'react';
import OrdersList from 'components/seller/orders/orders-list';
import { OrdersTrendBarChart } from 'components/seller/orders/chart/orders-trend-bar-chart';
import SellerNotificationsComponent from '@components/seller/orders/notifications';

const statisticsData = [
    {
        id: '1',
        title: 'Active Orders',
        value: '12',
    },
    {
        id: '2',
        title: 'Active Order Value',
        value: '$ 2,837',
    },
];

const SellerOrdersComponent = () => {
    return (
        <div className="bg-neutral-2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="col-span-1 md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 space-y-3 sm:space-y-0 justify-between p-4 py-7 bg-white mb-3 rounded-[8px]">
                        {statisticsData.map((stat, index) => (
                            <div key={stat.id} className="flex items-center justify-between border-r border-neutral-4 last:border-0">
                                <div className="space-y-3 ml-2">
                                    <div className="text-paragraph-s font-regular text-neutral-8">{stat.title}</div>
                                    <div className="text-heading-5 font-semi-bold text-neutral-10">{stat.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <OrdersTrendBarChart />
                </div>
                <SellerNotificationsComponent />
            </div>

            <div className="mt-5">
                <OrdersList />
            </div>
        </div>
    );
};

export default SellerOrdersComponent;
