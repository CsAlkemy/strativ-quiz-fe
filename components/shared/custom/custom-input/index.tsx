import React from 'react';
import { Controller } from 'react-hook-form';

import CustomTooltip from '@components/shared/custom/custom-tooltip';
import { Input } from '@components/shared/shadcn-ui/input';
import { Textarea } from '@components/shared/shadcn-ui/textarea';
import { funcResolveObjectDot } from '@library/functions';
import { cvaCnMerge } from '@library/shadcn-utils';
import { TCustomInput, TUiCustomInput } from '@library/types/shared/components';
import { CircleHelp, Eye, EyeOff } from 'lucide-react';

const InputByType = (_props: TUiCustomInput) => {
    const { type, suffix, prefix, ...props } = _props;
    // console.log();
    const [showPassword, setShowPassword] = React.useState(false);
    if (type === 'password') {
        return (
            <div className="relative">
                <Input type={showPassword ? 'text' : type} {...props} />
                <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute block w-8 -translate-y-1/2 cursor-pointer right-4 pointer top-1/2">
                    {showPassword ? <Eye className="text-neutral-6" /> : <EyeOff className="text-neutral-6" />}
                </span>
            </div>
        );
    } else if (type === 'number') {
        return (
            <Input
                type="number"
                min={0}
                onWheel={(e: React.WheelEvent<HTMLInputElement>) => {
                    const target = e.target as HTMLInputElement;
                    target.blur();
                }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    appearance: 'none',
                }}
                parser={(value: string) => parseFloat(value.replace(/(,*)/g, ''))}
                {...props}
            />
        );
    } else if (type === 'textarea') {
        const textAreaProps = {
            ...props,
            style: {
                ...(props?.style || {}),
                paddingTop: 10,
            },
        };
        return <Textarea {...textAreaProps} />;
    } else {
        return <Input {...props} />;
    }
};

export const UiCustomInput: React.FC<TUiCustomInput> = ({
    label,
    required,
    name,
    type,
    disabled,
    value,
    onChange,
    placeholder = '',
    helperText,
    error,
    helpTooltip,
    admin,
    startIcon,
    endIcon,
    suffix,
    prefix,
    ...rest
}) => {
    return (
        <div className=" w-full">
            {!!label && (
                <label
                    htmlFor={name}
                    className={cvaCnMerge(
                        ' px-2 font-regular after:pl-1 text-neutral-7  text-capitalize text-paragraph-s left-5 max-w-fit bg-white',
                        {
                            "after:content-['*']": required,
                            'after:text-destructive': required,
                        },
                    )}>
                    {label}
                    {helpTooltip && (
                        <span className="ml-2 text-sm font-medium !text-text-primary">
                            <CustomTooltip title={<span className="p-2 mb-2 bg-gray-300 rounded-md">{helpTooltip}</span>}>
                                <CircleHelp />
                            </CustomTooltip>
                        </span>
                    )}
                </label>
            )}
            <InputByType
                value={value}
                className={cvaCnMerge('w-full focus:outline-0 focus:shadow-none rounded-[8px] placeholder:text-neutral-6 h-10')}
                name={name}
                disabled={disabled}
                onChange={onChange}
                type={type || 'string'}
                placeholder={placeholder || ''}
                id={name}
                endIcon={endIcon}
                startIcon={startIcon}
                {...rest}
            />

            {!!helperText ? (
                <div
                    className={cvaCnMerge('text-[12px] mt-1 select-none leading-none', {
                        'text-destructive': error,
                    })}>
                    {' '}
                    {!admin ? helperText : helperText || ''}
                </div>
            ) : null}
        </div>
    );
};

const CustomInput: React.FC<TCustomInput> = ({ hookForm, disabled, name, ...rest }) => {
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
                <UiCustomInput
                    name={name}
                    value={field.value}
                    disabled={disabled}
                    onChange={field.onChange}
                    helperText={errorMessage}
                    error={!!errorMessage}
                    {...rest}
                />
            )}
        />
    );
};

export default CustomInput;
