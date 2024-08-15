import React, { useState } from 'react';

import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from '@tanstack/react-table';

import { Input } from '../../shadcn-ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../shadcn-ui/table';
import { Skeleton } from '../../shadcn-ui/skeleton';
import { CustomButton } from '@components/shared/custom/custom-button';

interface ReusableTableProps {
    data: any[];
    columns: ColumnDef<any>[];
    isPagination?: boolean;
    isSearch?: boolean;
    onSelectionChange?: (selectedUserIds: string[]) => void;
    hideRowSelectLabel?: boolean;
    className?: string;
    tableHeader?: React.ReactNode | React.ReactElement;
    isLoading?: boolean;
}

const CustomTable: React.FC<ReusableTableProps> = props => {
    const { data, tableHeader, className, columns, isPagination, isSearch, onSelectionChange, hideRowSelectLabel, isLoading } = props;
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });
    React.useEffect(() => {
        const selectedRows = table.getSelectedRowModel().rows;
        const selectedUserIds = selectedRows.map(row => row.original.userId || row.original.id);
        if (onSelectionChange) {
            onSelectionChange(selectedUserIds);
        }
    }, [table.getState().rowSelection]);

    return (
        <div className={`w-full bg-white rounded-sm p-2 ${className}`}>
            {isSearch && (
                <div className="flex justify-end py-4">
                    <Input
                        placeholder="Type in to search"
                        value={(table.getColumn('jobTitle')?.getFilterValue() as string) ?? ''}
                        onChange={(event: { target: { value: any } }) => table.getColumn('jobTitle')?.setFilterValue(event.target.value)}
                        className="max-w-sm"
                    />
                </div>
            )}

            {!!tableHeader && tableHeader}

            {isLoading && <Skeleton />}

            {!isLoading && (
                <>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map(headerGroup => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map(header => {
                                            return (
                                                <TableHead className="text-base font-bold" key={header.id}>
                                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                                </TableHead>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map(row => (
                                        <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                            {row.getVisibleCells().map(cell => (
                                                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={columns.length} className="h-24 text-center">
                                            No Data Found!
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    {isPagination && (
                        <div className="flex items-center justify-end space-x-2 py-4">
                            <div className="flex-1 text-sm text-muted-foreground my-2">
                                {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
                            </div>
                            <div className="space-x-5 mx-2">
                                <CustomButton size="sm" variant="outline" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                                    Previous
                                </CustomButton>
                                <CustomButton size="sm" variant="outline" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                                    Next
                                </CustomButton>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export { CustomTable };
