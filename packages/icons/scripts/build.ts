// Purpose: Build script for the icons package.

import { ComponentDirectory, SVGsDirectory } from "./constants.ts";
import { fetchSvgs } from "./fetch-svgs.ts";
import { generateComponents } from "./generate-components.ts";
import { generateIndex } from "./generate-index.ts";

console.log("⚙️ Fetching SVGs...\n");
const multiSourceIcons = fetchSvgs(SVGsDirectory);

console.log("⚙️ Generating react components...\n");
generateComponents(ComponentDirectory, multiSourceIcons);

console.log("📋 List of icons generation...\n");
generateIndex(ComponentDirectory, multiSourceIcons);

console.log("✨ Build completed!\n");
