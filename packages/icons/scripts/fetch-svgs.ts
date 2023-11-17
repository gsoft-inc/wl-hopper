import fs from "fs-extra";
import path from "path";

export const fetchSvgs = (SVGsDir: string) => {
    const exists = fs.pathExistsSync(SVGsDir);
    if (!exists) {
        throw new Error(`Directory, ${SVGsDir}, does not exist. Please create it before continuing.`);
    }

    const files = fs.readdirSync(SVGsDir, { recursive: true, withFileTypes: true });

    const svgFilePaths = files.filter(file => file.isFile() && path.extname(file.name) === ".svg").map(file => {
        return path.resolve(file.path, file.name);
    });

    const result = svgFilePaths.map(svgFilePath => {
        const svg = fs.readFileSync(svgFilePath, "utf8");
        const name = path.basename(svgFilePath, ".svg");
        const size = Number(name.split("-").pop());

        return {
            data: svg,
            name,
            size
        };
    });

    return result;
};