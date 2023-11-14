import * as path from "path";
import * as fs from "fs";
import camelCase from "camelcase";
import {
    ICONS_SIZES 
} from "./constants.ts";
import { getAllFiles } from "./helper.ts";

interface DataItem {
    name: string;
    group: number;
}

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

const checkSameName = (data: DataItem[]): void => {
    const sizes = ICONS_SIZES;
    const dataGroupedBySize = sizes.map(s => data.filter(d => d.group === s));
  
    dataGroupedBySize.forEach(groupedData => {
        const unique = [...new Set(groupedData.map(d => d.name))];
  
        const lookup = groupedData.reduce((a: Record<string, number>, e) => {
            a[e.name] = ++a[e.name] || 0;

            return a;
        }, {});
  
        if (groupedData.length !== unique.length) {
            console.error(
                "Array contains duplicates icon name: ",
                groupedData.filter(e => lookup[e.name])
            );
            process.exit(1);
        }
    });
};
  
const handleName = (file: string): DataItem => {
    const splitPath = file.split(path.sep);
    const fileName = splitPath[splitPath.length - 1].replace(".svg", "");
    const [, , group] = splitPath;
  
    const options = { pascalCase: true };
    const formatedName = camelCase(fileName, options);
  
    const formatedGroup = Number(group.replace("px", ""));
  
    return { name: formatedName, group: formatedGroup };
};

const loadFiles = async (dir: string): Promise<Icon[]> => {
    const files = await getFiles(dir);

    const result = files.map(file => {
        const { name, group } = handleName(file);
        const content = fs.readFileSync(file, "utf-8");

        return {
            name,
            group,
            filePath: file,
            content
        };
    });

    checkSameName(result);

    return result;
};

async function loadIcons(dir: string) {
    return loadFiles(dir);
}

export {
    loadIcons
};