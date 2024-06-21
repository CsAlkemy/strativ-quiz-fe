import * as React from 'react';

import { cvaCnMerge } from '@library/shadcn-utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    [k: string]: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ disabled, className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cvaCnMerge(
                'flex w-full rounded-md border h-[56px] border-input bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-md file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border transition ease-in-out duration-100 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50',
                className || '',
            )}
            disabled={disabled || false}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = 'Input';

export { Input };
