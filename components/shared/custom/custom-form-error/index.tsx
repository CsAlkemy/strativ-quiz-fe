import React from 'react';
import { get, UseFormReturn } from 'react-hook-form';

interface CareFormErrorProps {
    name: string;
    hookForm: UseFormReturn<any, any> & any;
    className?: string;
    admin?: boolean;
}

export default function CustomFormError({ hookForm, admin, name, className }: CareFormErrorProps) {
    const {
        formState: { errors },
    } = hookForm;

    const error = get(errors || {}, name);

    return (
        !!error?.message && (
            <div className={`flex items-center ${className}`}>
                <p className="ml-2 text-destructive"> {!admin ? error?.message : error?.message} </p>
            </div>
        )
    );
}
