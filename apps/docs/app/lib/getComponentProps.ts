import { promises as fs } from "fs";
import path from "path";
import type { ComponentDocWithGroups } from "@/scripts/generateComponentData.ts";
import type { PropItem } from "react-docgen-typescript/lib/parser";
import { getType } from "@/app/lib/gePropsType.ts";
import { formatCode } from "@/app/lib/formatingCode.ts";
import { generateUniqueKey } from "@/app/lib/generateUniqueKey.ts";

const filePath = path.join(process.cwd(), "datas", "components");

export const formatData = async (prop: PropItem) => {
    const { name, type, defaultValue, description } = prop;
    const formatType = getType(type);
    const code = await formatCode(formatType, "tsx");
    const formatedDescription = description.replace(/<form>/g, "");

    return ({
        id: generateUniqueKey(),
        name,
        type: code,
        defaultValue: defaultValue ? defaultValue.value : "",
        description: formatedDescription
    });
};

async function formatPropTable(data: ComponentDocWithGroups[]) {
    const result = [];
    for (const item of data) {
        const { groups } = item;
        for (const group of Object.keys(groups)) {
            const groupItems = await Promise.all(Object.keys(groups[group]).map(key => formatData(groups[group][key])));
            result.push({ [group]: groupItems });
        }
    }

    return result;
}

export async function getComponentProps(component: string) {
    const file = await fs.readFile(path.join(filePath, `${component}.json`), "utf8");
    const data = JSON.parse(file);

    if (data.length === 0) {
        throw new Error("No data found, run the command in docs app `pnpm build:componentData`");
    }

    const [item] = data;

    const groups = await formatPropTable(data);

    return ({ description: item.description, groups });
}
