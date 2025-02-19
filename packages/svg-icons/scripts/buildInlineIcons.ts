import fs from "fs";
import path from "path";

import { IconsInlineDistDirectory, IconsOptimizedDirectory } from "./constants.ts";

const optimizedIconsPath = IconsOptimizedDirectory;

/**
 * Converts a file path to a file name.
 * @example fileNameConverter("C:\Dev\wl-hopper\packages\svg-icons\src\optimized-rich-icons\action-list-24.svg") // ActionListIcon24
 */
function fileNameConverter(filePath: string) {
    const fileName = path.basename(filePath, ".svg");

    return fileName.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("") + "Icon";
}

const files = fs.readdirSync(optimizedIconsPath, { recursive: true, withFileTypes: true });
const svgFiles = files.filter(file => file.isFile() && file.name.endsWith(".svg"));

// Clear directory (It also removes the directory itself)
fs.rmSync(IconsInlineDistDirectory, { recursive: true, force: true });
fs.mkdirSync(IconsInlineDistDirectory, { recursive: true });

const inlinedSvgs = svgFiles.map(file => {
    const contents = fs.readFileSync(path.resolve(file.path, file.name), "utf8");
    const name = fileNameConverter(file.name);
    const fileName = `${name}.js`;
    const location = path.resolve(IconsInlineDistDirectory, fileName);
    fs.writeFileSync(location, `export default \`${contents}\``);

    return {
        name,
        fileName,
        location
    };
});

// index barrel file
fs.writeFileSync(path.resolve(IconsInlineDistDirectory, "index.js"), inlinedSvgs.map(file => {
    const name = file.name;

    return `export { default as ${name} } from "./${file.fileName}";\n`;
}).join(""));

// types barrel file
fs.writeFileSync(path.resolve(IconsInlineDistDirectory, "index.d.ts"), inlinedSvgs.map(file => {
    const name = file.name;

    return `export const ${name}: string;\n`;
}).join(""));

console.log("✨ The inline icons have been generated!\n");
