import React from 'react';
import { CircleCheck, CircleX, Truck } from 'lucide-react';

const statisticsData = [
    {
        id: '1',
        orderStatus: 'Order#283120 has successfully been delivered to customer.',
        time: '42 min ago',
        icon: CircleCheck,
        status: 'success',
        // TODO: Needs to add logic to add icon based on the status from backend
    },
    {
        id: '2',
        orderStatus: 'Order#1248142 has been dispatched.',
        time: '42 min ago',
        icon: Truck,
        status: 'dispatch',
    },
    {
        id: '3',
        orderStatus: 'Order#283120 has ben cancelled by user.',
        time: '42 min ago',
        icon: CircleX,
        status: 'cancel',
    },
    {
        id: '4',
        orderStatus: 'Order#283120 has successfully been delivered to customer.',
        time: '42 min ago',
        icon: CircleCheck,
        status: 'success',
    },
    {
        id: '5',
        orderStatus: 'Order#1248142 has been dispatched.',
        icon: Truck,
        time: '42 min ago',
        status: 'dispatch',
    },
];

const SellerNotificationsComponent = () => {
    return (
        <div className="bg-white p-3 rounded-[8px]">
            <div className="flex justify-between items-center">
                <div className="text-heading-6 font-semi-bold">Notifications</div>
                <div className="text-paragraph-xs font-semi-bold text-primary-6">view all</div>
            </div>
            <div className="space-y-5 mt-5">
                {statisticsData.map((item, index) => (
                    <div key={item.id} className="flex gap-3 border-b border-neutral-2 pb-2 last:border-b-0">
                        <div
                            className={`p-3 rounded-md h-fit ${item.status === 'cancel' ? 'bg-danger-1' : item.status === 'dispatch' ? 'bg-warning-1' : 'bg-primary-1'}`}>
                            {
                                <item.icon
                                    className={`${item.status === 'cancel' ? 'text-danger-7' : item.status === 'dispatch' ? 'text-warning-7' : 'text-primary-7'}`}
                                />
                            }
                        </div>
                        <div className="space-y-2">
                            <div className="text-paragraph-s font-medium">{item.orderStatus}</div>
                            <div className="text-footer text-neutral-8">{item.time}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SellerNotificationsComponent;
