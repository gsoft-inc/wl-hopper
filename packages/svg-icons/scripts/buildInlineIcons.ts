import fs from "fs";
import path from "path";

import { IconsInlineDistDirectory, IconsOptimizedDirectory } from "./constants.ts";

//
const optimizedIconsPath = IconsOptimizedDirectory;

console.log("⚙️  Generating inline icons...\n");

const files = fs.readdirSync(optimizedIconsPath, { recursive: true, withFileTypes: true });
const svgFiles = files.filter(file => file.isFile() && file.name.endsWith(".svg"));

// Clear directory (It also removes the directory itself)
fs.rmSync(IconsInlineDistDirectory, { recursive: true, force: true });
fs.mkdirSync(IconsInlineDistDirectory, { recursive: true });

svgFiles.forEach(file => {
    const contents = fs.readFileSync(path.resolve(file.path, file.name), "utf8");
    // TODO: fix the /, there is probably a method to join those paths
    fs.writeFileSync(`${IconsInlineDistDirectory}/${file.name.replace(".svg", ".js")}`, `export default \`${contents}\``);
    fs.writeFileSync(`${IconsInlineDistDirectory}/${file.name.replace(".svg", ".d.ts")}`, "declare const _default: string; export default _default;");
});

console.log("✨ The inline icons have been generated!\n");
