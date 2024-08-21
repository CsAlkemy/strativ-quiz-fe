import React from 'react';
import { ColumnDef } from '@tanstack/react-table';

export const ordersColumns: ColumnDef<any>[] = [
    {
        accessorKey: 'customerName',
        header: 'Customer',
        cell: ({ row }) => (
            <div className="flex gap-2 items-center">
                <img className="h-12 w-12 rounded-full" src={row.original.productLogo} alt={row.original.customerName} />
                <div className="space-y-1">
                    <div className="text-paragraph-s font-medium text-neutral-8">{row.original.customerName || 'Olivia Redriguz'}</div>
                    <div className="text-paragraph-s font-regular text-neutral-6">{row.original.email || 'olivia@gmaill.com'}</div>
                </div>
            </div>
        ),
    },
    {
        accessorKey: 'orderID',
        header: 'Order ID',
        cell: ({ row }) => (
            <div className="flex justify-start">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.orderID || '#12847911213'}</div>
            </div>
        ),
    },
    {
        accessorKey: 'orderDate',
        header: 'Order Date',
        cell: ({ row }) => (
            <div className="flex justify-start">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.orderDate || 'May 15, 2023'}</div>
            </div>
        ),
    },
    {
        accessorKey: 'shipTo',
        header: 'Ship to',
        cell: ({ row }) => (
            <div className="flex justify-start">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.shipTo || 'London, UK'}</div>
            </div>
        ),
    },
    {
        accessorKey: 'orderTotal',
        header: 'Order total',
        cell: ({ row }) => (
            <div className="flex justify-start">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.orderTotal || '80'}</div>
            </div>
        ),
    },
];
