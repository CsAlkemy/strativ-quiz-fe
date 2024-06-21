import React, { useState } from 'react';

import { CheckCircle2, Eye, EyeOff, MinusCircle, Pause } from 'lucide-react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@components/shared/shadcn-ui/select';

type OptionType = {
    label: React.ReactNode | string;
    value: any;
};

type CustomStatusProps = {
    label: string;
    name: string;
    options: OptionType[];
    key?: string;
    placeholder?: string;
    onValueChange?: (value: string) => void;
};

const CustomStatus: React.FC<CustomStatusProps> = ({ label, name, options, key, placeholder, onValueChange }) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleSelectionChange = (value: string) => {
        setSelectedValue(value);
        if (onValueChange) {
            onValueChange(value);
        }
    };

    const getIconAndColorClass = () => {
        let icon = null;
        let colorClass = '';

        switch (selectedValue || placeholder) {
            case 'Open':
            case 'Verified':
                icon = <CheckCircle2 className="h-4 w-4" />;
                colorClass = 'text-[#8DB63F]';
                break;
            case 'Active':
                icon = <Eye className="h-4 w-4" />;
                colorClass = 'text-[#8DB63F]';
                break;
            case 'Close':
                icon = <EyeOff className="h-4 w-4" />;
                colorClass = 'text-[#D71F2B]';
                break;
            case 'Inactive':
                icon = <MinusCircle className="h-4 w-4" />;
                colorClass = 'text-[#D71F2B]';
                break;
            case 'Rejected':
                colorClass = 'text-[#D71F2B]';
                break;
            case 'Application Received':
                colorClass = 'text-[#395AA4]';
                break;
            case 'Viewed':
            case 'Initial Screening':
            case 'Shortlisted':
            case 'Interviewed':
            case 'Onboarded':
                colorClass = 'text-[#8DB63F]';
                break;
            case 'Paused':
            case 'Pending':
                icon = <Pause className="h-4 w-4" />;
                colorClass = 'text-[#395AA4]';
                break;
        }

        return { icon, colorClass };
    };

    const { icon, colorClass } = getIconAndColorClass();

    return (
        <div key={key}>
            <Select onValueChange={(e: any) => handleSelectionChange(e)}>
                <SelectTrigger className={`capitalize w-auto rounded-full ${colorClass}`}>
                    <span className="mr-1">{icon}</span>
                    <SelectValue className={`capitalize ${colorClass}`} placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {options.map((option, index) => (
                            <SelectItem key={index} className={selectedValue === option.value ? colorClass : 'text-black'} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default CustomStatus;
