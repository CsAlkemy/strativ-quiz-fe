import DatePicker from 'react-datepicker';

import { cvaCnMerge } from '@library/shadcn-utils';
import { TUiTimePicker } from '@library/types/shared/components';

export function UiTimePicker({ onSelect, onChange, clearable = false, value: date, disabled = false, className, placeholder }: TUiTimePicker) {
    const onSelectDate = (e: Date) => {
        if (onSelect) onSelect(e);
    };

    return (
        <DatePicker
            className={cvaCnMerge('w-full bg-white border focus:border-border rounded-md focus:outline-none px-4 h-14 border-border', className)}
            isClearable={clearable}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            disabled={disabled}
            placeholderText={placeholder || 'h:mm aa'}
            selected={date}
            showPopperArrow={false}
            onSelect={onSelectDate as any}
            onChange={onChange as any}
        />
    );
}
