import fs from "fs-extra";
import path from "path";
// import { optimize } from "svgo";
// import config from "./svgo-config.ts";

export async function  generateIcons(srcDir: string, outputDir: string, fileNameConverter?: (filePath: string) => string) {
    await fs.ensureDir(outputDir);

    fs.readdir(srcDir, { recursive: true, withFileTypes: true }, (err, files) => {
        const svgFiles = files.filter(file => file.isFile() && file.name.endsWith(".svg"));
        console.log("files", files.map(x => x.name), svgFiles.map(x => x.name));

        const iconFiles = files.filter(file => file.isFile() && file.name.endsWith(".svg")).map(file => {
            const srcPath = path.resolve(file.path, file.name);
            const destFileName = path.resolve(outputDir, fileNameConverter ? fileNameConverter(srcPath) : file.name);
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
    });




    // iconFiles.forEach(iconFile => {
    //     const contents = fs.readFileSync(iconFile.srcPath, "utf8");
    //     const { data } = optimize(contents, {
    //         path: iconFile.srcPath,
    //         ...config
    //     });

    //     fs.writeFileSync(iconFile.destPath, Buffer.from(data));
    //     console.log("icon output", iconFile.destPath);
    // });
}

function validateNoNameDuplicate(names: string[]) {
    const uniqueNames = new Set(names);
    if (names.length !== uniqueNames.size) {
        names.reduce((acc, name) => {
            if (acc.has(name)) {
                throw new Error(`Duplicate icon name detected: ${name}`);
            } else {
                acc.add(name);
            }

            return acc;
        }, new Set<string>());
    }
}
