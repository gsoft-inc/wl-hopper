import camelCase from "camelcase";
import fs from "fs";
import path from "path";
import { ICONS_SIZES } from "./constants.ts";
import { getAllFiles } from "./helper.ts";

export interface Icon {
    content: string;
    group: number;
    filePath: string;
    name: string;
}

const getFiles = (dir: string): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dir)) {
            resolve(getAllFiles(dir));
        } else {
            reject(`no such directory ${dir}`);
        }
    });
};

const checkSameName = (data: Icon[]): void => {
    const dataGroupedBySize = ICONS_SIZES.map(s => data.filter(d => d.group === s));

    dataGroupedBySize.forEach(groupedData => {
        const unique = [...new Set(groupedData.map(d => d.name))];

        const lookup = groupedData.reduce((a, e) => {
            a[e.name] = ++a[e.name] || 0;

            return a;
        }, {} as Record<string, number>);

        if (groupedData.length !== unique.length) {
            console.error(
                "Array contains duplicates icon name: ",
                groupedData.filter(e => lookup[e.name])
            );
            process.exit(1);
        }
    });
};

const loadIcon = (file: string): Icon => {
    const splitPath = file.split(path.sep);
    const fileName = splitPath[splitPath.length - 1].replace(".svg", "");
    const [, , group] = splitPath;

    const options = { pascalCase: true };
    const formattedName = camelCase(fileName, options);

    const formattedGroup = Number(group.replace("px", ""));

    const content = fs.readFileSync(file, "utf-8");

    return {
        name: formattedName,
        group: formattedGroup,
        content,
        filePath: file
    };
};

export const loadIcons = async (dir: string): Promise<Icon[]> => {
    const files = await getFiles(dir);

    const result = files.map(file => {
        return loadIcon(file);
    });

    checkSameName(result);

    return result;
};
