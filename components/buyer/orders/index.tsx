import React from 'react';
import { useSafeState } from 'ahooks';
import BuyerWrapper from '@components/buyer/common/layout/width-wrapper';
import BuyerLayout from '@components/buyer/common/layout';
import { BreadCrumbNavigator } from '@components/buyer/orders/navigator';
import OrderCard from '@components/buyer/orders/order-card';
import { products } from '@components/buyer/cart/data';

const OrdersComponent = () => {
    const [currentTab, setCurrentTab] = useSafeState<string>('upcoming');
    return (
        <BuyerLayout title="Orders">
            <div className="bg-neutral-2 w-full mb-10 mt-16  py-4">
                <BuyerWrapper>
                    <BreadCrumbNavigator />
                    <div className="text-heading-3 font-bold text-neutral-10 mt-3">My Orders</div>
                    <div className="mt-5 flex gap-5">
                        <div
                            onClick={() => setCurrentTab('upcoming')}
                            className={`text-paragraph-m sm:text-paragraph-l font-medium text-start py-2 border-b-2 cursor-pointer hover:bg-neutral-3 ${currentTab === 'upcoming' ? 'border-primary-6 text-primary-6 ' : 'text-neutral-7'}`}>
                            Upcoming <span className="p-1 px-2 rounded-sm bg-primary-6 text-white text-paragraph-xs">2</span>
                        </div>
                        <div
                            onClick={() => setCurrentTab('received')}
                            className={`text-paragraph-m sm:text-paragraph-l font-medium text-start py-2 cursor-pointer hover:bg-neutral-3  border-b-2 ${currentTab === 'received' ? 'border-primary-6 text-primary-6 ' : 'text-neutral-7'}`}>
                            Received <span className="p-1 px-2 rounded-sm bg-success-2 text-success-7 text-paragraph-xs">12</span>
                        </div>{' '}
                        <div
                            onClick={() => setCurrentTab('cancelled')}
                            className={`text-paragraph-m sm:text-paragraph-l font-medium text-start py-2 cursor-pointer hover:bg-neutral-3  border-b-2 ${currentTab === 'cancelled' ? 'border-primary-6 text-primary-6 ' : 'text-neutral-7'}`}>
                            Cancelled <span className="p-1 px-2 rounded-sm bg-danger-2 text-danger-7 text-paragraph-xs">3</span>
                        </div>
                    </div>
                    {currentTab === 'received' ? (
                        <>
                            <OrderCard products={products} />
                            <OrderCard products={products} />
                        </>
                    ) : currentTab === 'cancelled' ? (
                        <>
                            <OrderCard products={products} />
                        </>
                    ) : (
                        <>
                            <OrderCard products={products} />
                            <OrderCard products={products} />
                            <OrderCard products={products} />
                        </>
                    )}
                </BuyerWrapper>
            </div>
        </BuyerLayout>
    );
};

export default OrdersComponent;
