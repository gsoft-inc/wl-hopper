"use client";

import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    type ColumnDef
} from "@tanstack/react-table";
import clsx from "clsx";

import type { ReactNode } from "react";

export interface Item {
    id: string;
    name: ReactNode;
    type: ReactNode;
    defaultValue: string;
    description: ReactNode;
}

const columns: ColumnDef<Item>[] = [
    {
        id: "name",
        accessorKey: "name",
        header: () => "Prop",
        cell: info => info.getValue()
    },
    {
        id: "type",
        accessorKey: "type",
        header: () => "Type",
        cell: info => info.getValue()
    },
    {
        id: "default",
        accessorKey: "defaultValue",
        header: () => "Default"

    },
    {
        id: "description",
        accessorKey: "description",
        header: () => "Description",
        cell: info => info.getValue()
    }
];

const isColumnAvailable = (columnName: string, items: Item[]) => {
    return items.some(item => item[columnName as keyof Item] !== "");
};

export const PropTableRender = ({ items }: { items: Item[] }) => {
    const table = useReactTable({
        columns,
        state: {
            columnVisibility: {
                "default": isColumnAvailable("defaultValue", items)
            }
        },
        data: items,
        getCoreRowModel: getCoreRowModel()
    });


    return (
        <table className="hd-table hd-props-table">
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr className="hd-table__column" key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id} className="hd-table__th">
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id} className="hd-table__row">
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}
                                className={clsx("hd-table__cell", `hd-props-table__col-${cell.column.id}`)}
                            >
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        )
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
