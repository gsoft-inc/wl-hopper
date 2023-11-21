import fs from "fs";
import type { MultiSourceIconSource } from "./fetch-svgs.ts";

const GENERATED_HEADER = `/*
* THIS FILE IS GENERATED. DO NOT EDIT IT.
*/`;

export const generateIndex = (componentDirectory: string, iconsByNames: MultiSourceIconSource[]) => {
    const indexFile = `${componentDirectory}/index.ts`;
    const indexContent = `${GENERATED_HEADER}\n
${Object.values(iconsByNames).map(icon => `export * from "./${icon.name}Icon.tsx";`).join("\n")}`;

    fs.writeFileSync(indexFile, indexContent);
};