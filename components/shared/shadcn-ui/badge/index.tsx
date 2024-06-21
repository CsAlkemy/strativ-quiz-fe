import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cvaCnMerge } from '@library/shadcn-utils';

const badgeVariants = cva(
    'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    {
        variants: {
            variant: {
                default: 'rounded px-2 py-1 text-[#8DB63F] bg-[#8DB63F] bg-opacity-10 text-xs font-thin',
                secondary: 'rounded px-2 py-1 text-[#395AA4] bg-[#395AA4] bg-opacity-10 text-xs font-thin',
                destructive: 'rounded px-2 py-1 text-[#D71E2A] bg-[#D71E2A] bg-opacity-10 text-xs font-thin',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return <div className={cvaCnMerge(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
