import React from 'react';
import { Controller } from 'react-hook-form';

import { Checkbox } from '@components/shared/shadcn-ui/checkbox';
import { cvaCnMerge } from '@library/shadcn-utils';
import { TCustomCheckbox } from '@library/types/shared/components';

const CustomCheckbox: React.FC<TCustomCheckbox> = ({ hookForm, label, id, name, des }) => {
    const {
        formState: { errors },
        control,
    } = hookForm;
    const errorMessage = (errors[name]?.message || '').toString();

    return (
        <div>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <div className="flex space-x-2 items-top">
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} id={id} />
                        <div className="grid gap-1.5 leading-none">
                            <label
                                htmlFor={id}
                                className="text-sm font-light leading-none select-none text-text-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                {label}
                            </label>
                            {!!des ? <p className="text-sm text-muted-foreground">{des}</p> : null}
                        </div>
                    </div>
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

export default CustomCheckbox;
