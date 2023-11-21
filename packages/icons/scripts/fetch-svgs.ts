import fs from "fs-extra";
import path from "path";

export interface SVGData {
    data: string;
    name: string;
    size: number;
}

export interface IconNameDictionary {
    [name: string]: {
        name: string;
        sizes: {
            [size: number]: string;
        };
    };
}

const fromKebabToPascalCase = (str: string) => {
    return str.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("");
};

export const fetchSvgs = (SVGsDir: string) => {
    const exists = fs.pathExistsSync(SVGsDir);
    if (!exists) {
        throw new Error(`Directory, ${SVGsDir}, does not exist. Please create it before continuing.`);
    }

    const files = fs.readdirSync(SVGsDir, { recursive: true, withFileTypes: true });

    const svgFilePaths = files.filter(file => file.isFile() && path.extname(file.name) === ".svg").map(file => {
        return path.resolve(file.path, file.name);
    });

    const dict: IconNameDictionary = {};

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

    return dict;
};