// Purpose: Build script for the icons package.

import { ComponentDirectory, SVGsDirectory } from "./constants.ts";
import { fetchSvgs } from "./fetch-svgs.ts";
import { generateComponents } from "./generate-components.ts";

console.log("⚙️ Fetching SVGs...\n");
const iconsByNames = fetchSvgs(SVGsDirectory);

console.log("⚙️ Generating react components...\n");
generateComponents(ComponentDirectory, iconsByNames);

console.log("✨ Build completed!\n");
