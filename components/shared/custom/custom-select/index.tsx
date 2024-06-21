import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';
import Select, { StylesConfig } from 'react-select';

import CustomTooltip from '@components/shared/custom/custom-tooltip';
import { funcResolveObjectDot } from '@library/functions';
import { cvaCnMerge } from '@library/shadcn-utils';
import { HelpCircle } from 'lucide-react';

type CustomSelectProps = {
    label: string;
    name: string;
    hookForm: UseFormReturn<any, any> & any;
    options: Array<{ label: React.ReactNode | string; value: any }>;
    isMulti?: boolean;
    key?: string;
    required?: boolean;
    helpTooltip?: string;
};

const CustomSelect = ({ label, name, helpTooltip, hookForm, options, required = false, isMulti = false, key }: CustomSelectProps) => {
    const {
        control,
        formState: { errors },
    } = hookForm;
    const customSelectStyles: StylesConfig = {
        control: provided => ({
            ...provided,
            height: '55px',
        }),
    };
    const errorMessage = funcResolveObjectDot(name, errors)?.message || '';
    return (
        <div>
            <Controller
                control={control}
                rules={{ required: true }}
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
                        <Select
                            {...field}
                            key={key}
                            isMulti={isMulti}
                            isClearable={false}
                            placeholder={label}
                            className="custom-react-select"
                            options={options}
                            value={
                                !isMulti
                                    ? options?.find(option => option.value === field.value)
                                    : options?.filter((f: any) => field.value?.includes(f.value))
                            }
                            onChange={(selectedOptions: any) => {
                                if (!isMulti) {
                                    field.onChange(selectedOptions.value);
                                } else {
                                    field.onChange(selectedOptions.map((option: { value: any }) => option.value));
                                }
                            }}
                            styles={customSelectStyles}
                        />
                    </div>
                )}
            />
            {!!errorMessage && <p className="my-1 text-xs text-red-600"> {errorMessage}</p>}
        </div>
    );
};

export default CustomSelect;
