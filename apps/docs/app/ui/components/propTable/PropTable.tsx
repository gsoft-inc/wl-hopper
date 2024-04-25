import { promises as fs } from "fs";
import path from "path";
import type { PropItem } from "react-docgen-typescript/lib/parser";
import type { ComponentDocWithGroups } from "@/scripts/generateComponentData.mjs";
import Collapsible from "@/components/collapsible/Collapsible.tsx";
import Title from "@/components/title/Title.tsx";

import "./propTable.css";

export interface PropTableProps {
    component: string;
}

interface PropItemTypeValue {
    name: string;
    value?: Array<{ value: string; name: string }>;
    raw?: string;
}

const filePath = path.join(process.cwd(), "datas", "components");

const getType = (type: PropItemTypeValue) => {
    const handler: {
        [key: string]: (type: PropItemTypeValue) => string;
    } = {
        enum: t =>
            t.value ? t.value.map(item => item.value.replace(/'/g, "")).join(" \\| ") : "",
        union: t => t.value ? t.value.map(item => item.name).join(" \\| ") : ""
    };
    if (typeof handler[type.name] === "function") {
        return handler[type.name](type).replace(/\|/g, "");
    }

    return type.name;
};

const renderRow = (key: string, prop: PropItem) => {
    const { name, type, defaultValue, required, description } = prop;

    return (
        <tr key={key}>
            <td>{name}</td>
            <td>{getType(type)}</td>
            <td>{defaultValue?.value}</td>
            <td>{required ? "✓" : "✗"}</td>
            <td>{description}</td>
        </tr>
    );
};

export default async function PropTable({ component }: PropTableProps) {
    const file = await fs.readFile(filePath + `/${component}.json`, "utf8");
    const data = JSON.parse(file);

    return data.map((item: ComponentDocWithGroups) => {
        const { description, displayName, groups } = item;

        return (
            <>
                <p>{displayName}</p>
                <p>{description}</p>
                {Object.keys(groups).map(group => {
                    return (
                        <Collapsible
                            key={group}
                            title={
                                <Title as="h3" level={3}>
                                    {group}
                                </Title>
                            }
                            className="props__section"
                        >
                            <table>
                                <thead>
                                    <tr>
                                        <th>Property</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Required</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(groups[group]).map(key => renderRow(key, groups[group][key]))}
                                </tbody>
                            </table>
                        </Collapsible>
                    );
                })}
            </>
        );
    });
}
