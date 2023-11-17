// Purpose: Build script for the icons package.

import { generateComponents } from "./generate-components.ts";
import { fetchSvgs } from "./fetch-svgs.ts";
import { SVGsDirectory, ComponentDirectory } from "./constants.ts";

console.log("⚙️ Fetching SVGs...\n");
const svgData = fetchSvgs(SVGsDirectory);
console.log("⚙️ Generating react components...\n");
generateComponents(ComponentDirectory, svgData);

console.log("✨ Build completed!\n");
