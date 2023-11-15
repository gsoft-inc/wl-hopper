import fs from "fs";
import { IconsDistDirectory, IconsSourceDirectory } from "./constants.ts";
import { checkFolderExists } from "./helper.ts";
import { loadIcons } from "./load-icons.ts";
import { optimizeIcons, type OptimizedIcon } from "./optimize-icons.ts";

const writeIcons = (icons: OptimizedIcon[], dir: string) => {
    checkFolderExists(dir);

    icons.map(async ({ data, group, name }) => {
        checkFolderExists(`${dir}/${group}`);
        fs.writeFile(`${dir}/${group}/${name}.svg`, data, err => {
            if (err) {
                throw err;
            }
        });
    });
};

console.log("\n⚙️ Optimizing icons...");

loadIcons(IconsSourceDirectory)
    .then(icons => optimizeIcons(icons))
    .then(icons => writeIcons(icons, IconsDistDirectory))
    .catch(error => console.error(error))
    .then(() => console.log("\n✨ The icons have been optimized!\n"));
