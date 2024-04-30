import { promises as fs } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ReactNode } from "react";
import type { PropItem } from "react-docgen-typescript/lib/parser";
import type { ComponentDocWithGroups } from "@/scripts/generateComponentData.mjs";

import { getType } from "@/app/lib/gePropsType.ts";
import { generateUniqueKey } from "@/app/lib/generateUniqueKey.ts";
import { formatCode } from "@/app/lib/formatingCode.ts";

import Code from "@/components/code/Code.tsx";
import { HighlightCode } from "@/components/highlightCode";

import "./propTable.css";
import { PropTableRender } from "@/app/ui/components/propTable/PropTableRender.tsx";

export interface PropTableProps {
    component: string;
}

export interface RenderRowReturn {
    id: string;
    name: ReactNode;
    type: ReactNode;
    defaultValue: { value: string };
    description: ReactNode;
}

export type FormatedGroupsData = Array<{ [group: string]: RenderRowReturn[] }>;

const filePath = path.join(process.cwd(), "datas", "components");

export const renderRow = async (prop: PropItem) => {
    const { name, type, defaultValue, description } = prop;
    const formatType = getType(type);
    const code = await formatCode(formatType, "tsx");
    const hilighCode = <HighlightCode code={code} variant="tiny" />;
    const formatedDescription = description.replace(/<form>/g, "");

    return ({
        id: generateUniqueKey(),
        name: <Code value={name}>{name}</Code>,
        type: hilighCode,
        defaultValue: defaultValue ? defaultValue.value : "",
        description: <MDXRemote source={formatedDescription} />
    });
};

const formatPropTable = async (data: ComponentDocWithGroups[]) => {
    const result = [];
    for (const item of data) {
        const { groups } = item;
        for (const group of Object.keys(groups)) {
            const groupItems = await Promise.all(Object.keys(groups[group]).map(key => renderRow(groups[group][key])));
            result.push({ [group]: groupItems });
        }
    }

    return result;
};

const getDescripton = (data: ComponentDocWithGroups[]) => data.map((item: ComponentDocWithGroups) => item.description);

export default async function PropTable({ component }: PropTableProps) {
    const file = await fs.readFile(filePath + `/${component}.json`, "utf8");
    const data = JSON.parse(file);

    const formatedGroupsData = await formatPropTable(data);
    const description = getDescripton(data);

    return (
        <>
            <p>{description}</p>
            <PropTableRender groupsData={formatedGroupsData} />
        </>
    );
}
