import path from "path";
import { IconSizes, IconsDistDirectory, IconsSourceDirectory } from "./constants.ts";
import { generateIcons } from "./generate-icons.ts";

/**
 * Converts a file path to a file name.
 * @example fileNameConverter("C:\\Dev\\wl-hopper\\packages\\svgs\\src\\icons\\16px\\Add.svg") // add-16.svg
 */
function fileNameConverter(filePath: string) {
    const dirName = path.dirname(filePath);
    const size = path.basename(dirName).replace("px", "");

    if ((IconSizes as readonly number[]).includes(Number(size)) === false) {
        throw new Error(`Invalid icon size: ${size}`);
    }

    const fileName = path.basename(filePath, ".svg");

    const kebabCaseName = fileName
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .toLowerCase();

    return `${kebabCaseName}-${size}.svg`;
}

console.log("⚙️  Optimizing icons...\n");

generateIcons(IconsSourceDirectory, IconsDistDirectory, fileNameConverter);

console.log("✨ The icons have been optimized!\n");
