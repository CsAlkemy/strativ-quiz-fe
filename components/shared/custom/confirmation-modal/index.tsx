import React from 'react';

import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@components/shared/shadcn-ui/dialog';
import { CustomButton } from '../custom-button';

type Props = {
    title: string;
    open: boolean;
    setOpen: (value: boolean) => void;
    yesButtonFunction?: () => void;
};
const ConfirmationModal = ({ title, open, setOpen, yesButtonFunction }: Props) => {
    return (
        <Dialog open={open}>
            <DialogContent className="sm:max-w-screen-sm max-h-[90vh] overflow-y-auto">
                <div>
                    <div
                        className="flex justify-between text-xl not-italic font-bold leading-[139.8%] tracking-[-0.6px]"
                        onClick={() => {
                            setOpen(false);
                        }}>
                        {title}
                        <X className="hover:cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-end gap-3 mt-10">
                        <CustomButton
                            onClick={() => {
                                setOpen(false);
                            }}
                            variant="outline">
                            No
                        </CustomButton>
                        <CustomButton variant="destructive" onClick={() => (yesButtonFunction ? yesButtonFunction() : '')}>
                            Yes, Do it!
                        </CustomButton>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmationModal;
