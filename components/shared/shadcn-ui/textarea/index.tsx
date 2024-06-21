import * as React from 'react';

import { cvaCnMerge } from '@library/shadcn-utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    [k: string]: any;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
    return (
        <textarea
            className={cvaCnMerge(
                'flex min-h-[80px] w-full text-base rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50',
                className || '',
            )}
            ref={ref}
            {...props}
        />
    );
});
Textarea.displayName = 'Textarea';

export { Textarea };
