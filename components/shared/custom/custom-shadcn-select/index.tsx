import * as React from 'react';
import { Controller } from 'react-hook-form';

import { ChevronDown, CircleX, HelpCircle } from 'lucide-react';

import CustomTooltip from '@components/shared/custom/custom-tooltip';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@components/shared/shadcn-ui/select';
import { funcResolveObjectDot } from '@library/functions';
import { cvaCnMerge } from '@library/shadcn-utils';
import { TCustomSelectProps, TUiCustomSelectProps } from '@library/types/shared';

export function UiCustomSelect(props: TUiCustomSelectProps) {
    const {
        options,
        className,
        parentClass,
        placeholder,
        clearable,
        value,
        required,
        label,
        isClear,
        isMiddle,
        onSelect,
        helperText,
        helpTooltip,
        error,
        name,
        defaultValue,
    } = props;
    const handleClear = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        onSelect && onSelect('');
    };
    return (
        <div className={cvaCnMerge(`${parentClass} relative`)}>
            {!!label && (
                <label
                    htmlFor={name}
                    className={cvaCnMerge(
                        ' px-1 z-10 after:pl-1 text-paragraph-s  text-capitalize font-regular text-neutral-8  left-5 max-w-fit bg-white',
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
            <Select onValueChange={onSelect} name={name} value={(value as string) || ''} defaultValue={defaultValue}>
                <SelectTrigger
                    className={cvaCnMerge(
                        `focus:shadow-none bg-white h-10 pr-4  focus:ring-0 focus:ring-offset-0 focus:border transition ease-in-out duration-100 focus:border-primary focus:outline-none focus:outline-offset-0 ${className}`,
                    )}>
                    <SelectValue placeholder={placeholder} />
                    {!value && <ChevronDown className="w-4 h-4 opacity-70" />}
                </SelectTrigger>
                {isClear && value && (
                    <div
                        className={`${
                            isMiddle ? 'top-1/2' : 'top-0'
                        } bg-white h-5 w-5 rounded-full flex justify-center items-center absolute -right-1 transform -translate-y-1/2 border border-gray-500 cursor-pointer`}
                        onClick={event => handleClear(event)}>
                        <CircleX className="w-4 h-4 mx-1 text-red-600" />
                    </div>
                )}
                <SelectContent className="overflow-y-auto max-h-80">
                    <SelectGroup>
                        {options.map((sv: any) => {
                            if (typeof sv !== 'object') {
                                return (
                                    <SelectItem className={`text-black hover:cursor-pointer`} key={sv} value={sv}>
                                        {sv}
                                    </SelectItem>
                                );
                            } else {
                                return (
                                    <SelectItem className={`text-black hover:cursor-pointer`} key={sv.value} value={sv.value}>
                                        {sv.label}
                                    </SelectItem>
                                );
                            }
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>
            {!!helperText ? (
                <div
                    className={cvaCnMerge('text-[12px] mt-1 select-none leading-none', {
                        'text-destructive': error,
                    })}>
                    {helperText}
                </div>
            ) : null}
        </div>
    );
}

export const CustomSelect: React.FC<TCustomSelectProps> = ({ hookForm, name, options, ...rest }) => {
    const {
        formState: { errors },
        control,
    } = hookForm;
    const errorMessage = funcResolveObjectDot(name, errors)?.message || '';
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <UiCustomSelect
                    error={!!errorMessage}
                    {...rest}
                    value={field.value}
                    clearable={true}
                    helperText={errorMessage}
                    options={options}
                    onSelect={field.onChange}
                    name={name}
                    {...rest}
                />
            )}
        />
    );
};
