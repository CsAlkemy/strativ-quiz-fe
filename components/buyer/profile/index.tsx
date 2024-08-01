import React from 'react';
import BuyerWrapper from '@components/buyer/common/layout/width-wrapper';
import BuyerLayout from '@components/buyer/common/layout';
import { useSafeState } from 'ahooks';
import AccountComponent from '@components/buyer/profile/account';
import PasswordComponent from '@components/buyer/profile/password';
import AddressComponent from '@components/buyer/profile/address';
import PaymentComponent from '@components/buyer/profile/payment';

const ProfileComponent = () => {
    const [currentTab, setCurrentTab] = useSafeState<string>('account');
    return (
        <BuyerLayout title="Profile">
            <div className="bg-neutral-2 w-full mb-10 mt-16  py-4">
                <BuyerWrapper>
                    <div className="text-heading-3 font-bold text-neutral-10 mt-10">Manage My Account</div>
                    <div className="mt-10 flex gap-5">
                        <div
                            onClick={() => setCurrentTab('account')}
                            className={`text-paragraph-m sm:text-paragraph-l font-medium text-start py-2 border-b-2 cursor-pointer hover:bg-neutral-3 ${currentTab === 'account' ? 'border-primary-6 text-primary-6 ' : 'text-neutral-7'}`}>
                            Account Information
                        </div>
                        <div
                            onClick={() => setCurrentTab('password')}
                            className={`text-paragraph-m sm:text-paragraph-l font-medium text-start py-2 cursor-pointer hover:bg-neutral-3  border-b-2 ${currentTab === 'password' ? 'border-primary-6 text-primary-6 ' : 'text-neutral-7'}`}>
                            Password
                        </div>
                        <div
                            onClick={() => setCurrentTab('address')}
                            className={`text-paragraph-m sm:text-paragraph-l font-medium text-start py-2 cursor-pointer hover:bg-neutral-3  border-b-2 ${currentTab === 'address' ? 'border-primary-6 text-primary-6 ' : 'text-neutral-7'}`}>
                            Addresses
                        </div>
                        <div
                            onClick={() => setCurrentTab('payment')}
                            className={`text-paragraph-m sm:text-paragraph-l font-medium text-start py-2 cursor-pointer hover:bg-neutral-3  border-b-2 ${currentTab === 'payment' ? 'border-primary-6 text-primary-6 ' : 'text-neutral-7'}`}>
                            Payment Methods
                        </div>
                    </div>
                    {currentTab === 'account' ? (
                        <AccountComponent />
                    ) : currentTab === 'password' ? (
                        <PasswordComponent />
                    ) : currentTab === 'address' ? (
                        <AddressComponent />
                    ) : (
                        <PaymentComponent />
                    )}
                </BuyerWrapper>
            </div>
        </BuyerLayout>
    );
};

export default ProfileComponent;
