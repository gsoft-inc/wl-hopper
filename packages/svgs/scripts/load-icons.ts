import camelCase from "camelcase";
import fs from "fs";
import path from "path";
import { getFiles } from "./helper.ts";

export const loadIcons = async (dir: string) => {
    const files = await getFiles(dir);

    return files.map(file => {
        return loadIcon(file);
    });
};

export interface Icon {
    content: string;
    group: number;
    filePath: string;
    name: string;
}

const loadIcon = (file: string): Icon => {
    const splitPath = file.split(path.sep);

    if (splitPath.length < 2) {
        throw new Error(`Invalid file path: ${file}`);
    }

    const fileName = splitPath[splitPath.length - 1].replace(".svg", "");
    const group = splitPath[splitPath.length - 2];

    const formattedName = camelCase(fileName, { pascalCase: true });
    const formattedGroup = Number(group.replace("px", ""));

    const content = fs.readFileSync(file, "utf-8");

    return {
        name: formattedName,
        group: formattedGroup,
        content,
        filePath: file
    };
};
