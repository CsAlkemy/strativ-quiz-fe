import * as React from 'react';

import { cvaCnMerge } from '@library/shadcn-utils';
import { LucideIcon, SearchIcon } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    [k: string]: any;
    startIcon?: LucideIcon;
    endIcon?: LucideIcon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ disabled, className, type, startIcon, endIcon, ...props }, ref) => {
    console.log(startIcon)

    const StartIcon = startIcon;
    const EndIcon = endIcon;

    return (

        <div className='w-full relative'>
            {StartIcon && (
                <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2">
                    <StartIcon size={18} className="text-muted-foreground" />
                </div>
            )}

            <input
                type={type}
                className={cvaCnMerge(
                    'flex w-full rounded-md border h-[56px] border-input bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-md file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border transition ease-in-out duration-100 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50',
                    startIcon ? "pl-7" : "",
                    endIcon ? "pr-7" : "",
                    className
                )}
                disabled={disabled || false}
                ref={ref}
                {...props}
            />
            {EndIcon && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <EndIcon className="text-muted-foreground" size={18} />
                </div>
            )}
        </div>

    );
});
Input.displayName = 'Input';

export { Input };
