import React from 'react';
import { Controller } from 'react-hook-form';

import { UiDatePicker } from '@components/shared/shadcn-ui/ui-date-picker';
import { cvaCnMerge } from '@library/shadcn-utils';
import { TCustomDatePicker } from '@library/types/shared/components';

const CustomDatePicker: React.FC<TCustomDatePicker> = ({ hookForm, required, label, name, ...props }) => {
    const {
        formState: { errors },
        control,
        setValue,
    } = hookForm;
    const errorMessage = (errors[name]?.message || '').toString();

    return (
        <div className="relative z-50">
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <>
                        {label ? (
                            <label className="absolute z-10 block px-2 mb-1 font-thin bg-white -top-2 text-capitalize text-12 bg text-text-primary left-5 max-w-fit">
                                {label} {required ? <span className="text-destructive">*</span> : null}
                            </label>
                        ) : null}
                        <UiDatePicker
                            value={field.value}
                            onChange={(e: any) => {
                                setValue(name, e, { shouldValidate: true });
                            }}
                            {...props}
                        />
                    </>
                )}
            />
            {!!errorMessage ? (
                <div
                    className={cvaCnMerge('text-[12px] right-0  bottom-50 h-4', {
                        'text-destructive': !!errorMessage,
                    })}>
                    {errorMessage}
                </div>
            ) : null}
        </div>
    );
};

export default CustomDatePicker;
