import { UseFormReturn } from 'react-hook-form';

import { TBase } from '../api';

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
    helpTooltip?: string;
    [k: string]: any;
    admin?: boolean;
};

export type TCustomCheckbox = {
    hookForm?: UseFormReturn<any, any> & any;
    name: string;
    label: string;
    id: string;
    des?: string;
};

export type TCustomDatePicker = Omit<TUiDatePicker, 'value' | 'onChange'> & {
    hookForm: UseFormReturn<any, any> & any;
    name: string;
    label: string;
    required?: boolean;
    clearable?: boolean;
    className?: string;
    placeholder?: string;
};

export type TUiDatePicker = {
    value: Date;
    maxDate?: string | Date;
    minDate?: string | Date;
    disabled?: boolean;
    onChange: (date: string) => void;
    onSelect?: (date: Date) => void;
    clearable?: boolean;
    className?: string;
    placeholder?: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export type TCustomTimePicker = Omit<TUiTimePicker, 'value' | 'onChange'> & {
    hookForm: UseFormReturn<any, any> & any;
    name: string;
    label: string;
    required?: boolean;
    clearable?: boolean;
    className?: string;
    placeholder?: string;
};

export type TUiTimePicker = {
    value: Date;
    disabled?: boolean;
    onChange: (date: Date) => void;
    onSelect?: (date: Date) => void;
    clearable?: boolean;
    className?: string;
    placeholder?: string;
};

export type TCandidateDocuments = {
    id: string;
    documentType: string;
    filePath: string;
    updatedAt: string;
    userId: string;
};

export type TCandidateDocumentsResponse = TBase & {
    payload: TCandidateDocuments[];
};
