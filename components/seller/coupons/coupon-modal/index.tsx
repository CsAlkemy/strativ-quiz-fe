import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@components/shared/shadcn-ui/dialog';
import { CustomButton } from '@components/shared/custom/custom-button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomInput from '@components/shared/custom/custom-input';
import { CustomSelect } from '@components/shared/custom/custom-shadcn-select';
import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { DatePickerWithRange } from '@components/shared/custom/custom-date-range-picker';
import { CouponSchema, TCouponSchema } from '@library/schemas/seller/coupon';

type Props = {
    open: boolean;
    setOpen: (value: boolean) => void;
};

const CouponModal: React.FC<Props> = ({ open, setOpen }) => {
    const [selectedDate, setSelectedDate] = React.useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 5),
    });

    const hookForm = useForm<TCouponSchema>({
        resolver: zodResolver(CouponSchema),
        defaultValues: {
            couponCode: '',
            discountType: '',
            discountAmount: 0,
            restriction: '',
            minimumOrderValue: 0,
        },
    });
    const onSubmit = () => {
        console.log('coupon data');
    };
    return (
        <Dialog open={open}>
            <DialogContent className="sm:max-w-[500px] max-h-[95vh] overflow-y-auto">
                <div>
                    <DialogTitle className="mb-5">Add a new Coupon</DialogTitle>
                    <form onSubmit={hookForm.handleSubmit(onSubmit)}>
                        <div className="space-y-3">
                            <CustomInput required name="couponCode" label="Coupon Code" placeholder="Coupon Code" hookForm={hookForm} />
                            <CustomSelect
                                required
                                placeholder="Select"
                                label="Discount Type"
                                name="discountType"
                                hookForm={hookForm}
                                options={[
                                    { label: 'Fixed', value: 'fixed' },
                                    { label: 'Percentage', value: 'percentage' },
                                ]}
                            />
                            <CustomInput
                                type="number"
                                required
                                name="discountAmount"
                                label="Discount Amount"
                                placeholder="Discount Amount"
                                hookForm={hookForm}
                            />
                            <DatePickerWithRange selectedDate={selectedDate} onDateChange={setSelectedDate} className="w-full" />
                            <CustomSelect
                                required
                                placeholder="Select"
                                label="Restriction"
                                name="restriction"
                                hookForm={hookForm}
                                options={[{ label: 'Minimum order value', value: 'MinimumOrderValue' }]}
                            />
                            <CustomInput
                                type="number"
                                required
                                name="minimumOrderValue"
                                label="Minimum order value"
                                placeholder="70$"
                                hookForm={hookForm}
                            />
                        </div>
                        <div className="flex justify-end items-center gap-4 mt-5">
                            <CustomButton className="w-full" onClick={() => setOpen(false)} type="button" variant="outline">
                                Cancel
                            </CustomButton>
                            <CustomButton className="w-full" type="submit" variant="default">
                                Add Coupon
                            </CustomButton>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CouponModal;
