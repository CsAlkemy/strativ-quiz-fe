import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import TableActions from '@components/shared/custom/custom-table/table-action';

export const couponsColumns: ColumnDef<any>[] = [
    {
        accessorKey: 'productName',
        header: 'Coupon',
        cell: ({ row }) => (
            <div className="flex gap-2 items-center">
                <img className="h-12 w-12 rounded-[8px]" src={row.original.productLogo} alt={row.original.productName} />
                <div className="space-y-1">
                    <div className="text-paragraph-s font-medium text-neutral-8">{row.original.productName}</div>
                    <div className="text-paragraph-s font-regular text-neutral-6">{row.original.category}</div>
                </div>
            </div>
        ),
    },
    {
        accessorKey: 'discountType',
        header: 'Discount Type',
        cell: ({ row }) => (
            <div className="flex justify-start">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.discountType}</div>
            </div>
        ),
    },
    {
        accessorKey: 'discountAmount',
        header: 'Discount Amount',
        cell: ({ row }) => (
            <div className="flex justify-start">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.price}</div>
            </div>
        ),
    },
    {
        accessorKey: 'validTill',
        header: 'Valid Till',
        cell: ({ row }) => (
            <div className="flex justify-center w-fit">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.quantityLeft}</div>
            </div>
        ),
    },
    {
        accessorKey: 'usageLimit',
        header: 'Usage limit',
        cell: ({ row }) => (
            <div className="flex justify-center w-fit">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.quantityLeft}</div>
            </div>
        ),
    },
    {
        accessorKey: 'restrictions',
        header: 'Restrictions',
        cell: ({ row }) => (
            <div className="flex justify-center w-fit">
                <div className="text-paragraph-s font-medium text-neutral-8">{row.original.quantityLeft}</div>
            </div>
        ),
    },
    // {
    //     accessorKey: 'status',
    //     header: 'Status',
    //     cell: ({ row }) => (
    //         <span
    //             className={`rounded-[8px] p-2 ${row.original.status === 'active' ? 'text-success-9 bg-success-2' : row.original.status === 'pending' ? ' text-warning-9 bg-warning-2' : 'text-danger-9 bg-danger-2'}`}>
    //             {row.original.status}
    //         </span>
    //     ),
    // },
    {
        accessorKey: 'action',
        header: 'Action',
        cell: ({ row }) => (
            <div className="">
                <TableActions row={row} />
            </div>
        ),
    },
];
