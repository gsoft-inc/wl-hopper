"use client";

import { Cell, Column, Row, Table as TableRA, TableBody, TableHeader } from "react-aria-components";

import "./table.css";

interface IconSpecTableProps {
    data: {
        name: string;
        sm: string;
        md: string;
        lg: string;
        [key: string]: string;
    }[];
}

const IconSpecTable = ({ data }: IconSpecTableProps) => {
    const sizes = ["sm", "md", "lg"];

    const listItems = data?.map(row => {
        return (
            <Row key={row.name} className="hd-table__row">
                <Cell className="hd-table__cell">{row.name}</Cell>
                {sizes.map(size => (
                    <Cell key={size} className="hd-table__cell">
                        {row[size]}
                    </Cell>
                ))}
            </Row>
        );
    });

    return (
        <TableRA className="hd-table hd-table--icon-spec" aria-label="Tokens">
            <TableHeader>
                <Column className="hd-table__column" isRowHeader>Anatomy</Column>
                <Column className="hd-table__column">Small</Column>
                <Column className="hd-table__column">Medium</Column>
                <Column className="hd-table__column">Large</Column>
            </TableHeader>
            <TableBody>
                {listItems}
            </TableBody>
        </TableRA>
    );
};

export default IconSpecTable;
