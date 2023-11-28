import "./iconTable.css";
import IconItem from "./IconItem";

interface IconTableProps {
    size: string;
    type: string;
}

export const IconTable = ({ size, type }: IconTableProps) => {
    return (
        <>
            <div className="hd-icon-table">
                <IconItem type={type} size={size} name="Alert" />
                <IconItem type={type} size={size} name="Chevron" />
                <IconItem type={type} size={size} name="Mail" />
            </div>
        </>
    );
};
