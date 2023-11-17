import fs from "fs";
import path from "path";
import { optimize } from "svgo";
import config from "./svgo-config.ts";

function ensureDirSync(dir: string) {
    if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true});
    }
}

export function generateIcons(srcDir: string, outputDir: string, fileNameConverter?: (filePath: string) => string) {
    const resolvedSrcDir = path.resolve(srcDir);
    const resolvedOutputDir = path.resolve(outputDir);
    console.log("resolve", srcDir, resolvedSrcDir, outputDir, resolvedOutputDir)
    ensureDirSync(resolvedOutputDir);

    const test = fs.readdirSync(resolvedSrcDir, { withFileTypes: true });
    const test2 = fs.readdirSync(resolvedSrcDir, { withFileTypes: true });
    console.log("files", test, test2);


    const files = fs.readdirSync(resolvedSrcDir, { recursive: true, withFileTypes: true });
    const svgFiles = files.filter(file => file.isFile() && file.name.endsWith(".svg"));
    console.log("files", files.map(x => x.name), svgFiles.map(x => x.name));

    const iconFiles = svgFiles.map(file => {
        const srcPath = path.resolve(file.path, file.name);
        const destFileName = path.resolve(resolvedOutputDir, fileNameConverter ? fileNameConverter(srcPath) : file.name);
        console.log("icon input", srcPath);

        return {
            srcPath: srcPath,
            destPath: destFileName,
            destFileName
        };
    });

    // If it's possible to rename a file with the same name, then we need to validate that there are no duplicates
    if (fileNameConverter) {
        validateNoNameDuplicate(iconFiles.map(x => x.destFileName));
    }

    for(const iconFile of iconFiles) {
        const contents = fs.readFileSync(iconFile.srcPath, "utf8");
        const { data } = optimize(contents, {
            path: iconFile.srcPath,
            ...config
        });

        fs.writeFileSync(iconFile.destPath, data);
        console.log("icon output", iconFile.destPath);
    }
}

function validateNoNameDuplicate(names: string[]) {
    const duplicateNames: string[] = [];
    const nameSet = new Set<string>();

    for (const name of names) {
        if (nameSet.has(name)) {
            duplicateNames.push(name);
        } else {
            nameSet.add(name);
        }
    }

    if (duplicateNames.length > 0) {
        throw new Error(`Duplicate icon names detected: ${duplicateNames.join(', ')}`);
    }
}
