import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { cvaCnMerge } from '@library/shadcn-utils';
import { Popover, PopoverContent, PopoverTrigger } from '@components/shared/shadcn-ui/popover';
import { Button } from '@components/shared/shadcn-ui/button';
import { Calendar } from '@components/shared/shadcn-ui/calender';

interface DatePickerWithRangeProps {
    className?: string;
    selectedDate: DateRange | undefined;
    onDateChange: (date: DateRange | undefined) => void;
}

export function DatePickerWithRange({ className, selectedDate, onDateChange }: DatePickerWithRangeProps) {
    return (
        <div className={cvaCnMerge('!w-full', className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={'outline'}
                        className={cvaCnMerge(' !w-full justify-start text-left font-normal', !selectedDate && 'text-muted-foreground')}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate?.from ? (
                            selectedDate.to ? (
                                <>
                                    {format(selectedDate.from, 'LLL dd, y')} - {format(selectedDate.to, 'LLL dd, y')}
                                </>
                            ) : (
                                format(selectedDate.from, 'LLL dd, y')
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
                        defaultMonth={selectedDate?.from}
                        selected={selectedDate}
                        onSelect={onDateChange}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
