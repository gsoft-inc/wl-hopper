// Purpose: Build script for the icons package.

import { ComponentDirectory, SVGsDirectory } from "./constants.ts";
import { fetchSvgs } from "./fetchSvgs.ts";
import { generateComponents } from "./generateComponents.ts";
import { generateIndex } from "./generateIndex.ts";

console.log("⚙️ Fetching SVGs...\n");
const multiSourceIcons = fetchSvgs(SVGsDirectory);

console.log("⚙️ Generating react components...\n");
generateComponents(ComponentDirectory, multiSourceIcons);

console.log("📋 List of icons generation...\n");
generateIndex(ComponentDirectory, multiSourceIcons);

console.log("✨ Build completed!\n");
