import { UseFormReturn } from 'react-hook-form';

export type TCustomSelectProps = Omit<TUiCustomSelectProps, 'value' | 'onSelect' | 'name'> & {
    hookForm: UseFormReturn<any, any> & any;
    name: string;
};

export type TUiCustomSelectProps = {
    parentClass?: string;
    options: Array<{ label: string; value: string | number | boolean | null | undefined }> | Array<string>;
    type?: string;
    value?: string | ReadonlyArray<string> | number | undefined;
    onSelect: (value: string) => void;
    placeholder?: string;
    helperText?: string;
    error?: boolean;
    isClear?: boolean;
    isMiddle?: boolean;
    name?: string;
    label?: string;
    required?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    clearable?: boolean;
    helpTooltip?: string;
    [k: string]: any;
};
