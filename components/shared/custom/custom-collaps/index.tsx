import React, { ReactNode } from 'react';
import { useSafeState } from 'ahooks';

import { ChevronDown, ChevronUp } from 'lucide-react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@components/shared/shadcn-ui/collapsible';

type Props = {
    title: ReactNode;
    content: ReactNode;
};
const CustomCollapse = ({ title, content }: Props) => {
    const [open, setOpen] = useSafeState<boolean>(false);
    return (
        <Collapsible onOpenChange={(e: any) => setOpen(e)} className="text-sm font-normal">
            <CollapsibleTrigger className="w-full bg-gray-100 p-2">
                <div className="flex justify-between w-full">
                    <div className="font-bold w-full text-start pr-2">{title}</div>
                    {open ? <ChevronUp /> : <ChevronDown />}
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-2 mt-2">{content}</CollapsibleContent>
        </Collapsible>
    );
};
export default CustomCollapse;
