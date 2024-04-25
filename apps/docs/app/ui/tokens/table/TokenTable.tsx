import Table from "@/components/table/Table";

import Preview from "@/app/ui/tokens/preview/Preview";
import Code from "@/components/code/Code";

import "./tokenTable.css";

interface TableProps {
    category: string;
    noPreview?: boolean;
    data: {
        name: string;
        value: string;
    }[];
}

const TokenTable = ({ category, data, noPreview }: TableProps) => {
    const formattedData = data.map(token => {
        const { name, value } = token;

        return {
            name: <Code value={`--${name}`}>{`--${name}`}</Code>,
            value: value,
            preview: !noPreview && <Preview value={value} name={name} category={category} />
        };
    });


    return <Table head={["Name", "Value", !noPreview && "Preview"]}
        data={formattedData}
        lastColumnAlignment="right"
        ariaLabel="Tokens"
    />;
};

export default TokenTable;
