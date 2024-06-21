import { UseFormReturn } from 'react-hook-form';

export type TCustomLocationSelectProps = {
    value?: any;
    defaultValue?: any;
    style?: any;
    placeholder?: string;
    onlySuggestedLocation?: boolean;
    className?: string;
    disabled?: boolean;
    selectedAddress?: string;
    label?: string;
    helpTooltip?: string;
    name: string;
    required?: boolean;
    hookForm: UseFormReturn<any, any> & any;
};
