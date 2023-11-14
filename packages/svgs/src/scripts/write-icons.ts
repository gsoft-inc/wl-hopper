import { loadIcons, type Icon } from "./load-icons.ts";
import { optimizeIcons, type OptimizedIcon } from "./optimize-icons.ts";
import { ICONS_DIST_DIR, ICONS_SOURCE_DIR } from "./constants.ts";
import { checkFolderExists } from "./helper.ts";
import fs from "fs";

const writeIcons = (icons: OptimizedIcon[], dir: string): void => {
    checkFolderExists(dir);

    icons.map(async ({ data, group, name }: OptimizedIcon) => {
        checkFolderExists(`${dir}/${group}`);
        fs.writeFile(`${dir}/${group}/${name}.svg`, data, err => {
            if (err) {
                throw err;
            }
        });
    });
};

console.log("Optimizing and building icons...");

loadIcons(ICONS_SOURCE_DIR)
    .then((icons: Icon[]) => optimizeIcons(icons))
    .then((icons: OptimizedIcon[]) => writeIcons(icons, ICONS_DIST_DIR))
    .catch(error => console.error(error))
    .then(() => console.log("\n🚀 Build completed!\n"));