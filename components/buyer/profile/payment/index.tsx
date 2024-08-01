import React from 'react';
import { CustomButton } from '@components/shared/custom/custom-button';
import { Badge } from '@components/shared/shadcn-ui/badge';
import { Plus } from 'lucide-react';

const PaymentComponent = () => {
    const paymentMethod = [
        {
            id: 1,
            name: `Michael's  Visa`,
            accountNumber: '**** **** **** 9446',
            isDefault: true,
            logoUrl: '/images/payment/visa.svg',
        },
        {
            id: 2,
            name: `Michael's  Mastercard`,
            accountNumber: '**** **** **** 9446',
            isDefault: false,
            logoUrl: '/images/payment/mastercard.svg',
        },
        {
            id: 3,
            name: `Michael's  Paypal`,
            accountNumber: '**** ****@gmail.com',
            isDefault: false,
            logoUrl: '/images/payment/paypal.svg',
        },
    ];
    return (
        <div className="my-10 bg-white p-7 rounded-lg space-y-5">
            {paymentMethod.map(method => (
                <div key={method.id} className="p-5 border border-neutral-3 rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img className="aspect-square h-16 w-auto" src={method.logoUrl} alt={method.name} />
                            <div className="space-y-2">
                                <div className="text-heading-6 text-neutral-10 font-bold">
                                    {method.name}{' '}
                                    {method.isDefault && <Badge className="bg-primary-3 text-primary-6 rounded-lg font-bold border-0">Default</Badge>}
                                </div>
                                <div className="text-paragraph-s text-neutral-7 font-regular">{method.accountNumber}</div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <CustomButton variant="secondary" size="sm">
                                Edit
                            </CustomButton>
                            <CustomButton variant="danger-outline" size="sm">
                                Delete
                            </CustomButton>
                        </div>
                    </div>
                </div>
            ))}
            <CustomButton variant="outline" className="w-full">
                <Plus size={20} className="mx-2" /> Add a New Payment Method
            </CustomButton>
        </div>
    );
};

export default PaymentComponent;
