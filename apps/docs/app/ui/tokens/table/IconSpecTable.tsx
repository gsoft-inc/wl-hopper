import Table from "@/components/table/Table";

import "./tokenTable.css";

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
    return <Table className="hd-table--icon-spec"
        head={["Anatomy", "Small", "Medium", "Large"]}
        data={data}
        ariaLabel="Icons specs"
    />;
};

export default IconSpecTable;
