import * as React from 'react';
import DatePicker from 'react-datepicker';

import { format, getMonth, getYear, isValid, parse, setYear } from 'date-fns';

import { MONTH_LIST } from '@library/constants';
import { cvaCnMerge } from '@library/shadcn-utils';
import { TUiDatePicker } from '@library/types/shared/components';

function range(start: number, end: number, step: number) {
    const result = [];
    for (let i = start; i < end; i += step) result.push(i);
    return result;
}

const getYearFromArgument = (arg: string | Date): number => {
    return typeof arg === 'string' ? getYear(parse(arg, 'dd-MM-yyyy', new Date())) : getYear(arg);
};

export function UiDatePicker({
    onSelect,
    maxDate,
    onChange,
    clearable = false,
    value: dateValue,
    disabled = false,
    className,
    placeholder,
    minDate,
    onKeyDown,
}: TUiDatePicker) {
    const years = range(getYearFromArgument(minDate || '01-01-1900'), getYearFromArgument(maxDate || new Date()) + 1, 1);
    const formattedDate = isValid(dateValue) ? format(dateValue, 'MM/dd/yyyy') : false;

    const [selectedYear, setSelectedYear] = React.useState(dateValue ? getYear(new Date(dateValue)) : getYearFromArgument(maxDate || new Date()));

    const dateOnChange = (date: Date) => {
        onChange(date ? format(date, 'yyyy-MM-dd') : '');
    };

    const dateOnSelect = (e: Date) => {
        if (onSelect) onSelect(e);
    };

    return (
        <DatePicker
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
            }) => {
                return (
                    <div className="flex items-center justify-between px-5 mb-2 gap-x-2">
                        <button
                            className="px-2 text-sm bg-white rounded-sm disabled:opacity-50"
                            type="button"
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}>
                            {'<'}
                        </button>
                        <select
                            className="p-1 bg-white rounded-sm outline-none border-primary border-1 focus:outline-0 focus:shadow-none"
                            value={selectedYear}
                            onChange={({ target: { value } }) => {
                                changeYear(Number(value));
                                setSelectedYear(Number(value));
                            }}>
                            {years
                                .sort((a, b) => b - a)
                                .map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                        </select>

                        <select
                            className="p-1 bg-white rounded-sm outline-none border-primary border-1 focus:outline-0 focus:shadow-none"
                            value={MONTH_LIST[getMonth(date)]}
                            onChange={({ target: { value } }) => changeMonth(MONTH_LIST.indexOf(value))}>
                            {MONTH_LIST.map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <button
                            className="px-2 text-sm bg-white rounded-sm disabled:opacity-50"
                            type="button"
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}>
                            {'>'}
                        </button>
                    </div>
                );
            }}
            className={cvaCnMerge(
                'w-full bg-white border focus-visible:border-primary focus-visible:border transition ease-in-out duration-100 rounded-md focus:outline-none px-4 h-14 border-border',
                className,
            )}
            isClearable={clearable}
            dateFormat={formattedDate || 'MM/dd/yyyy'}
            disabled={disabled}
            placeholderText={placeholder || 'MM/DD/YYYY'}
            selected={dateValue && setYear(new Date(dateValue), selectedYear)}
            showPopperArrow={false}
            onChange={dateOnChange as any}
            onSelect={dateOnSelect as any}
            maxDate={maxDate ? new Date(maxDate) : new Date()}
            minDate={minDate ? new Date(minDate) : new Date(1900, 0, 1)}
            onKeyDown={onKeyDown as any}
        />
    );
}
