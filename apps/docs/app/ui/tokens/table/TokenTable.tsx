import Table from "@/components/table/Table";

import Preview from "@/app/ui/tokens/preview/Preview";
import Code from "@/components/code/Code";

import type { ReactNode } from "react";
import "./tokenTable.css";

interface TableProps {
    category: string;
    noPreview?: boolean;
    tokenType?: "core" | "semantic" | null;
    data: {
        name: string;
        value: string;
    }[];
}

function formatStyledSystemName(name: string, tokenType: "core" | "semantic" | null) {
    let prefix = "";
    if (tokenType === "core") {
        prefix = "core_";
    } else if (name?.includes("dataviz")) {
        prefix = "dataviz_";
    }

    const formattedName = name
        .replace("hop-", "")
        .replace("-border", "")
        .replace("-surface", "")
        .replace("-text", "")
        .replace("-icon", "")
        .replace("elevation-", "")
        .replace("shape-", "")
        .replace("space-", "")
        .replace("border-", "")
        .replace("radius-", "")
        .replace("border-", "")
        .replace("dataviz-", "")
        .replace("shadow-", "")
        .replace("font-family-", "")
        .replace("font-size-", "")
        .replace("font-weight-", "")
        .replace("line-height-", "")
    ;

    return `${prefix}${formattedName}`;
}

const TokenTable = ({ category, data, noPreview = false, tokenType }: TableProps) => {
    const formattedData = data.map(token => {
        const { name, value } = token;
        const values: Record<string, ReactNode> = {
            name: <Code value={`--${name}`}>{`--${name}`}</Code>,
            styledSystemValue: tokenType && formatStyledSystemName(name, tokenType),
            value: value,
            preview: !noPreview && <Preview value={value} name={name} category={category} />
        };

        if (!tokenType) {
            delete values.styledSystemValue;
        }

        if (noPreview) {
            delete values.preview;
        }

        return values;
    });
    const columns = ["Name", tokenType && "Styled-System Value", "Value", !noPreview && "Preview"].filter(Boolean) as string[];

    return (
        <Table head={columns}
            data={formattedData}
            lastColumnAlignment="right"
            ariaLabel="Tokens"
        />
    );
};

export default TokenTable;
