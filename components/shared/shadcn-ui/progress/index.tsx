import * as React from 'react';

import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cvaCnMerge } from '@library/shadcn-utils';

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>>(
    ({ className, value, ...props }, ref) => (
        <ProgressPrimitive.Root
            ref={ref}
            className={cvaCnMerge('relative h-2 w-full overflow-hidden rounded-full bg-primary/20 bg-gray-300', className)}
            {...props}>
            <ProgressPrimitive.Indicator
                className="flex-1 w-full h-full transition-all bg-primary"
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    ),
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
