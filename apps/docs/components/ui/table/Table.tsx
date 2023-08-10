"use client";

import { Cell, Column, Row, Table as TableRA, TableBody, TableHeader } from "react-aria-components";

import Preview from "@/components/preview/Preview";
import Code from "@/components/ui/code/Code";

import "./table.css";

interface TableProps {
    category: string;
    data: {
        name: string;
        value: string;
    }[];
}

const Table = ({ category, data }: TableProps) => {
    const listItems = data?.map(token => {
        const { name, value } = token;

        return (
            <Row key={name}>
                <Cell className="hd-table__cell">
                    <Code value={`--${name}`}>{`--${name}`}</Code>
                </Cell>
                <Cell className="hd-table__cell">{value}</Cell>
                <Cell className="hd-table__cell">
                    <Preview value={value} name={name} category={category} />
                </Cell>
            </Row>
        );
    });

    return (
        <TableRA className="hd-table" aria-label="Tokens">
            <TableHeader>
                <Column className="hd-table__column" isRowHeader>Name</Column>
                <Column className="hd-table__column">Value</Column>
                <Column className="hd-table__column">Preview</Column>
            </TableHeader>
            <TableBody>
                {listItems}
            </TableBody>
        </TableRA>
    );
};

export default Table;
