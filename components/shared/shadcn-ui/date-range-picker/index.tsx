import * as React from 'react';
import { DateRange } from 'react-day-picker';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@components/shared/shadcn-ui/button';
import { Calendar } from '@components/shared/shadcn-ui/calender';
import { Popover, PopoverContent, PopoverTrigger } from '@components/shared/shadcn-ui/popover';

import { cvaCnMerge } from '@library/shadcn-utils';

type Props = {
    className: string;
    setDateRange: (value: any) => void;
    dateRange: DateRange | undefined;
};
export function DatePickerWithRange({ className, setDateRange, dateRange }: Props) {
    const disabledDays: any = [dateRange?.from, dateRange?.to].filter(date => !!date);
    return (
        <div className={cvaCnMerge('grid gap-2', className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={'outline'}
                        className={cvaCnMerge('w-[300px] justify-start text-left font-normal', !dateRange && 'text-muted-foreground')}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateRange?.from ? (
                            dateRange.to ? (
                                <>
                                    {format(dateRange.from, 'LLL dd, y')} - {format(dateRange.to, 'LLL dd, y')}
                                </>
                            ) : (
                                format(dateRange.from, 'LLL dd, y')
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={dateRange?.from}
                        selected={dateRange}
                        onSelect={d => {
                            if (setDateRange) {
                                setDateRange(d);
                            }
                        }}
                        disabled={disabledDays}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
