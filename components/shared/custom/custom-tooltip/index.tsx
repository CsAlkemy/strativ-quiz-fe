import React, { ReactElement } from 'react';

import { TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

import { Tooltip } from '@components/shared/shadcn-ui/tooltip';

type Props = {
    title: string | number | JSX.Element;
    children: ReactElement | JSX.Element;
};

export default function CustomTooltip(props: Props): JSX.Element {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{props.children}</TooltipTrigger>
                <TooltipContent>
                    <div className="relative flex flex-col items-center my-1">
                        <div className="bg-black text-white text-sm font-medium py-2 px-4 rounded-lg shadow-lg">{props.title}</div>
                    </div>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
