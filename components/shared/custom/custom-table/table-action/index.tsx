import { useState } from 'react';
import { CustomButton } from '@components/shared/custom/custom-button';
import { Popover, PopoverContent, PopoverTrigger } from '@components/shared/shadcn-ui/popover';
import { EllipsisVertical, Pencil, Trash } from 'lucide-react';

const TableActions = ({ row }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <CustomButton size="sm" variant="secondary" onClick={() => setIsOpen(!isOpen)}>
                    <EllipsisVertical size={20} className="text-neutral-10" />
                </CustomButton>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-40 p-2 space-y-2">
                <CustomButton size="sm" variant="ghost" className="w-full justify-start">
                    <Pencil size={20} className="text-warning-6 mr-2" />
                    Edit
                </CustomButton>
                <CustomButton size="sm" variant="ghost" className="w-full justify-start">
                    <Trash size={20} className="text-danger-6 mr-2" />
                    Delete
                </CustomButton>
            </PopoverContent>
        </Popover>
    );
};

export default TableActions;
