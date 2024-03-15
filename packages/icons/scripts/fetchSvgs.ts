import fs from "fs";
import path from "path";
import type { IconSizes } from "./constants.ts";

export interface MultiSourceIconSource {
    name: string;
    sizes: Record<typeof IconSizes[number], string>;
}

const fromKebabToPascalCase = (str: string) => {
    return str.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("");
};

export const fetchSvgs = (SVGsDir: string) => {
    const exists = fs.existsSync(SVGsDir);
    if (!exists) {
        throw new Error(`Directory, ${SVGsDir}, does not exist.`);
    }

    const files = fs.readdirSync(SVGsDir, { recursive: true, withFileTypes: true });

    const svgFilePaths = files.filter(file => file.isFile() && path.extname(file.name) === ".svg").map(file => {
        return path.resolve(file.path, file.name);
    });

    const dict: Record<string, MultiSourceIconSource> = {};

    svgFilePaths.forEach(svgFilePath => {
        const svg = fs.readFileSync(svgFilePath, "utf8");
        const name = path.basename(svgFilePath, ".svg");
        const baseName = name.replace(/-\d+$/, "");
        const size = Number(name.split("-").pop());

        dict[baseName] = {
            name: fromKebabToPascalCase(baseName),
            sizes: { ...dict[baseName]?.sizes, [size]: svg }
        };
    });

    return Object.values(dict);
};
