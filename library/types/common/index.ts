import { UseFormReturn } from 'react-hook-form';
import { LucideIcon } from 'lucide-react';

export type TCustomInput = Omit<TUiCustomInput, 'value' | 'onChange'> & {
    hookForm: UseFormReturn<any, any> & any;
};

export type TUiCustomInput = {
    type?: string;
    value?: string | ReadonlyArray<string> | number | undefined;
    onChange: React.ChangeEventHandler | HTMLInputElement;
    placeholder?: string;
    helperText?: string;
    error?: boolean;
    name: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    startIcon?: LucideIcon;
    endIcon?: LucideIcon;
    helpTooltip?: string;
    [k: string]: any;
    admin?: boolean;
};
export interface INavItem {
    title: string;
    href: string;
    icon: LucideIcon;
    color?: string;
    isChildren?: boolean;
    children?: INavItem[];
}
