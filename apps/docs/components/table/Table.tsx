"use client";

import clsx from "clsx";
import { Cell, Column, Row, Table as TableRA, TableBody, TableHeader } from "react-aria-components";
import { type ReactNode, useMemo } from "react";

import "./table.css";

interface dataType {
    [key: string]: string | number | boolean | undefined | null | ReactNode;
}

interface TableProps {
    head: (string | boolean)[];
    data: dataType[];
    lastColumnAlignment?: "left" | "right";
    "ariaLabel"?: string;
    className?: string;
}

function generateUniqueKey() {
    return `${Date.now()}-${Math.random()}`;
}

const Table = ({ data, head, lastColumnAlignment = "left", ariaLabel = "standard table", className }: TableProps) => {
    const textAlignRight = lastColumnAlignment === "right";
    const lastColumn = head.length - 1;
    const dataItem = useMemo(() => data, [data]);

    const headItems = head.map((item, index) => {
        return (
            <Column isRowHeader
                key={`table-body-${generateUniqueKey()}`}
                className={clsx("hd-table__column", { "hd-table__colum--right": index === lastColumn && textAlignRight })}
            >
                {item}
            </Column>
        );
    });

    const dataItems = dataItem.map(item => {
        return (
            <Row key={`table-body-${generateUniqueKey()}`} className="hd-table__row">
                {Object.keys(item).map((key, index) => {
                    return (
                        <Cell key={key}
                            className={clsx("hd-table__cell", { "hd-table__cell--right": index === lastColumn && textAlignRight })}
                        >
                            {item[key]}
                        </Cell>
                    );
                })}
            </Row>
        );
    });

    return (

        <TableRA className={clsx("hd-table", className)} aria-label={ariaLabel}>
            <TableHeader>
                {headItems}
            </TableHeader>
            <TableBody>
                {dataItems}
            </TableBody>
        </TableRA>
    );
};

export default Table;
