import React from 'react';
import { CircleDollarSignIcon, X } from 'lucide-react';
import { Dialog, DialogContent } from '@components/shared/shadcn-ui/dialog';
import { CustomButton } from '@components/shared/custom/custom-button';
import { UiCustomInput } from '@components/shared/custom/custom-input';
import { useSafeState } from 'ahooks';

type Props = {
    open: boolean;
    setOpen: (value: boolean) => void;
};

const WithdrawModal: React.FC<Props> = ({ open, setOpen }) => {
    const [selectedMethod, setSelectedMethod] = useSafeState<'PayPal' | 'Payoneer'>('PayPal');

    const handleMethodSelect = (method: 'PayPal' | 'Payoneer') => {
        setSelectedMethod(method);
    };

    const renderMethodOption = (method: 'PayPal' | 'Payoneer', imgSrc: string, altText: string) => (
        <div
            className={`min-h-24 border cursor-pointer rounded-[12px] flex justify-center items-center ${
                selectedMethod === method ? 'border-primary-6 bg-primary-1' : 'border-neutral-4'
            }`}
            onClick={() => handleMethodSelect(method)}>
            <img src={imgSrc} alt={altText} />
        </div>
    );

    return (
        <Dialog open={open}>
            <DialogContent className="sm:max-w-[500px] max-h-[95vh] overflow-y-auto">
                <div>
                    <div className="flex justify-between text-xl font-bold leading-[139.8%] tracking-[-0.6px]" onClick={() => setOpen(false)}>
                        <div></div>
                        <X className="hover:cursor-pointer bg-gray-100 hover:bg-gray-300 rounded-full p-0.5" />
                    </div>
                    <div className="space-y-3">
                        <div className="flex flex-col items-center justify-center mt-5 gap-3">
                            <img src="/images/payment/saveMoney.png" className="h-[200px]" alt="save money" />
                            <div className="text-heading-4 font-semibold">Withdraw your Earnings</div>
                            <div className="text-paragraph-m font-regular text-neutral-7">Available for Withdraw</div>
                            <div className="text-heading-6 font-semibold p-2 bg-neutral-3 rounded-md">$ 3,593.73</div>
                            <UiCustomInput
                                type="number"
                                onChange={() => {}}
                                name="amount"
                                helperText="Minimum Limit: $100.00"
                                label="How much do you want to Withdraw?"
                                startIcon={CircleDollarSignIcon}
                            />
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="text-paragraph-m font-medium mb-3">Select your Withdraw method</div>
                        <div className="grid grid-cols-2 gap-4">
                            {renderMethodOption('PayPal', '/images/payment/PayPal.png', 'paypal')}
                            {renderMethodOption('Payoneer', '/images/payment/Payoneer.png', 'payoneer')}
                        </div>
                    </div>
                    <div>
                        <CustomButton className="w-full" variant="default">
                            Withdraw
                        </CustomButton>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default WithdrawModal;
