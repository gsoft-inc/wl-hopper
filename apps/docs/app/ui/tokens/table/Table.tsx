"use client";

import { Cell, Column, Row, Table as TableRA, TableBody, TableHeader } from "react-aria-components";

import Preview from "@/app/ui/tokens/preview/Preview";
import Code from "@/components/code/Code";

import "./table.css";

interface TableProps {
    category: string;
    noPreview?: boolean;
    data: {
        name: string;
        value: string;
    }[];
}

const Table = ({ category, data, noPreview }: TableProps) => {
    const listItems = data?.map(token => {
        const { name, value } = token;

        return (
            <Row key={name} className="hd-table__row">
                <Cell className="hd-table__cell">
                    <Code value={`--${name}`}>{`--${name}`}</Code>
                </Cell>
                <Cell className="hd-table__cell">{value}</Cell>
                {!noPreview && <Cell className="hd-table__cell">
                    <Preview value={value} name={name} category={category} />
                </Cell>}
            </Row>
        );
    });

    return (
        <TableRA className="hd-table" aria-label="Tokens">
            <TableHeader>
                <Column className="hd-table__column" isRowHeader>Name</Column>
                <Column className="hd-table__column">Value</Column>
                {!noPreview && <Column className="hd-table__column">Preview</Column>}
            </TableHeader>
            <TableBody>
                {listItems}
            </TableBody>
        </TableRA>
    );
};

export default Table;
