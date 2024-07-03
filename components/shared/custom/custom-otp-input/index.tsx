import React from 'react';
import { UseFormReturn } from 'react-hook-form';

type OtpInputProps = {
    hookForm: UseFormReturn<any, any> & any;
    name: string;
    label?: string;
    onSubmit: () => void;
};

const CustomOtpInput = ({
    name,
    onSubmit,
    hookForm: {
        watch,
        register,
        setValue,
        getValues,
        formState: { errors },
    },
}: OtpInputProps) => {
    const otp = getValues(name) as string[];

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, startIndex: number) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        const characters = pastedData.split('');
        characters.forEach((char, idx) => {
            if (startIndex + idx < 6) {
                setValue(name + `.${startIndex + idx}`, char, { shouldValidate: true });
            }
        });
        const nextIndex = startIndex + characters.length;
        if (nextIndex < 6) {
            const nextInput = document.querySelector(`input[name="${name}.${nextIndex}"]`) as HTMLInputElement;
            nextInput?.focus();
        }
    };

    const handleChange = (element: HTMLInputElement, index: number) => {
        const value = element.value;
        setValue(name + `.${index}`, value, { shouldValidate: true });
        if (value.length === 1 && index < 5) {
            const nextSibling = element.nextSibling as HTMLInputElement;
            nextSibling?.focus();
        } else if (value.length === 0 && index > 0) {
            const previousSibling = element.previousSibling as HTMLInputElement;
            previousSibling?.focus();
        }
    };

    const inputs = Array.from({ length: 6 }, (_, index) => (
        <input
            key={index}
            onPaste={e => handlePaste(e, index)}
            type="text"
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-neutral-6 bg-background focus:border-primary-6 rounded-md outline-0 h-14 w-[99%] sm:w-14 border-2 text-xl font-bold text-neutral-8 text-center"
            maxLength={1}
            {...register(name + `.${index}`)}
            onChange={e => handleChange(e.target as any, index)}
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Backspace' && otp[index] === '') {
                    setValue(name + `.${index}`, '', { shouldValidate: true });

                    const prevInput = e.currentTarget.previousElementSibling as HTMLInputElement | null;
                    prevInput?.focus();
                }
            }}
        />
    ));

    React.useEffect(() => {
        const subscription = watch((value: string[], { name: changeName }: { name: string }) => {
            if (changeName.startsWith(name + '.')) {
                const otpValues = getValues(name);
                if (otpValues.join('').length === 6) {
                    onSubmit();
                }
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, name, getValues, onSubmit]);

    return (
        <div className=" otp-input-container">
            <div className="flex items-center justify-start gap-x-2">{inputs}</div>
            <div className="text-destructive">{errors?.[name]?.root?.message || null}</div>
        </div>
    );
};

export default CustomOtpInput;
