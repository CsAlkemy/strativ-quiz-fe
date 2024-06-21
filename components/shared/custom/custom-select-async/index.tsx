import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';
import { StylesConfig } from 'react-select';
import SelectAsync from 'react-select/async';

import CustomTooltip from '@components/shared/custom/custom-tooltip';
import { funcResolveObjectDot } from '@library/functions';
import { cvaCnMerge } from '@library/shadcn-utils';
import { HelpCircle } from 'lucide-react';

type CustomSelectAsyncProps = {
    label: string;
    name: string;
    hookForm: UseFormReturn<any, any> & any;
    placeholder?: string;
    options: Array<{ label: string; value: any }>;
    isMulti?: boolean;
    key?: string;
    required?: boolean;
    helpTooltip?: string;
    isClearable?: boolean;
};

const customSelectStyles: StylesConfig = {
    control: provided => ({
        ...provided,
        height: '55px',
    }),
};

const CustomSelectAsync = (props: CustomSelectAsyncProps) => {
    const { label, name, hookForm, placeholder, helpTooltip, options, isClearable, required = false, isMulti = false, key } = props;
    const {
        control,
        formState: { errors },
    } = hookForm;
    const filterOptions = (inputValue: string) => {
        return options.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()));
    };

    const loadOptions = (inputValue: string, callback: (options: { label: string; value: string }[]) => void) => {
        setTimeout(() => {
            callback(filterOptions(inputValue));
        }, 1000);
    };

    const errorMessage = funcResolveObjectDot(name, errors)?.message || '';

    return (
        <div>
            <Controller
                name={name}
                render={({ field }) => (
                    <div className="relative">
                        {!!label && (
                            <label
                                htmlFor={name}
                                className={cvaCnMerge(
                                    'absolute px-2 z-10 font-thin after:pl-1 -top-[9px] text-capitalize text-xs text-text-primary left-5 max-w-fit bg-white',
                                    {
                                        "after:content-['*']": required,
                                        'after:text-destructive': required,
                                    },
                                )}>
                                {label}
                                {helpTooltip && (
                                    <span className="ml-2 text-sm">
                                        <CustomTooltip title={helpTooltip}>
                                            <HelpCircle />
                                        </CustomTooltip>
                                    </span>
                                )}
                            </label>
                        )}
                        <SelectAsync
                            {...field}
                            key={key || 'custom-select'}
                            isMulti={isMulti}
                            isClearable={isClearable}
                            placeholder={placeholder || ''}
                            className="custom-react-select"
                            loadOptions={loadOptions}
                            defaultOptions={options.slice(0, 100)}
                            value={options.filter(item => field.value?.includes(item.value))}
                            onChange={(selectedOptions: any) => {
                                if (!isMulti) return field.onChange(selectedOptions?.value || '');
                                field.onChange(selectedOptions.map((option: { value: any }) => option.value));
                            }}
                            styles={customSelectStyles}
                        />
                    </div>
                )}
                control={control}
                rules={{ required: true }}
            />
            {!!errorMessage && <p className="my-1 text-xs text-red-600"> {errorMessage}</p>}
        </div>
    );
};

export default CustomSelectAsync;
