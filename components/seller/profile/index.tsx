import React from 'react';
import { useSafeState } from 'ahooks';
import AccountComponent from '@components/seller/profile/account';
import PasswordComponent from '@components/seller/profile/password';
import PaymentComponent from '@components/seller/profile/payment';

const SellerProfileComponent = () => {
    const [currentTab, setCurrentTab] = useSafeState<string>('account');
    return (
        <div className="bg-neutral-2 w-full">
            <div className="flex gap-5">
                <div
                    onClick={() => setCurrentTab('account')}
                    className={`text-paragraph-m font-medium text-start py-2 border-b-2 cursor-pointer hover:bg-neutral-3 ${currentTab === 'account' ? 'border-primary-6 text-primary-6 ' : 'text-neutral-7'}`}>
                    Account Information
                </div>
                <div
                    onClick={() => setCurrentTab('password')}
                    className={`text-paragraph-m font-medium text-start py-2 cursor-pointer hover:bg-neutral-3  border-b-2 ${currentTab === 'password' ? 'border-primary-6 text-primary-6 ' : 'text-neutral-7'}`}>
                    Password
                </div>
                <div
                    onClick={() => setCurrentTab('payment')}
                    className={`text-paragraph-m font-medium text-start py-2 cursor-pointer hover:bg-neutral-3  border-b-2 ${currentTab === 'payment' ? 'border-primary-6 text-primary-6 ' : 'text-neutral-7'}`}>
                    Payment Methods
                </div>
            </div>
            {currentTab === 'account' ? <AccountComponent /> : currentTab === 'password' ? <PasswordComponent /> : <PaymentComponent />}
        </div>
    );
};

export default SellerProfileComponent;
