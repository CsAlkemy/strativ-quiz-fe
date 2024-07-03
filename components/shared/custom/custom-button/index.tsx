import React from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

import { cvaCnMerge } from '@library/shadcn-utils';

const CustomButtonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-primary-6 text-primary-foreground hover:bg-primary-7',
                destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline: 'border border-primary bg-background hover:bg-accent hover:text-accent-foreground text-primary',
                secondary: 'bg-secondary text-secondary-foreground',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
                'danger-outline': 'text-destructive bg-white border border-destructive hover:bg-destructive hover:text-white',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export type CustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof CustomButtonVariants> & {
        asChild?: boolean;
        isLoading?: boolean;
    };

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ className, variant, disabled: buttonDisabled, isLoading, size, children, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        const disabled = isLoading || buttonDisabled;

        return (
            <Comp className={cvaCnMerge(CustomButtonVariants({ variant, size, className }))} ref={ref} disabled={disabled} {...props}>
                {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {children}
            </Comp>
        );
    },
);
CustomButton.displayName = 'CustomButton';

export { CustomButton, CustomButtonVariants };
