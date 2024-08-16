import React from 'react';
import { ColumnDef } from '@tanstack/react-table';

export const salesColumns: ColumnDef<any>[] = [
    {
        accessorKey: 'timePeriod',
        header: 'Time Period',
        cell: ({ row }) => (
            <div className="flex justify-start">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.timePeriod || 'Jan 2024'}</div>
            </div>
        ),
    },
    {
        accessorKey: 'totalSalesRevenue',
        header: 'Total Sales Revenue',
        cell: ({ row }) => (
            <div className="flex justify-start">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.totalSalesRevenue || '$50,455'}</div>
            </div>
        ),
    },
    {
        accessorKey: 'topSellingProduct',
        header: 'Top Selling Product',
        cell: ({ row }) => (
            <div className="flex justify-start">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.topSellingProduct || 'Product A'}</div>
            </div>
        ),
    },
    {
        accessorKey: 'roi',
        header: 'Promotion Campaign ROI',
        cell: ({ row }) => (
            <div className="flex justify-start">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.roi || 'Discount Code: 20%'}</div>
            </div>
        ),
    },
    {
        accessorKey: 'returnsAndRefunds',
        header: 'Returns and Refunds',
        cell: ({ row }) => (
            <div className="flex justify-start">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.returnsAndRefunds || '$1,127'}</div>
            </div>
        ),
    },
    {
        accessorKey: 'averageOrderValue',
        header: 'Average Order Value',
        cell: ({ row }) => (
            <div className="flex justify-center w-fit">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.averageOrderValue || '$100'}</div>
            </div>
        ),
    },
];
