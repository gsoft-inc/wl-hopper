import fs from "fs";

import { IconSuffix, RichIconSuffix } from "./constants.ts";
import type { MultiSourceIconSource } from "./fetchSvgs.ts";

const GENERATED_HEADER = `/*
* This file is generated by the generate-components script. Do not edit directly.
*/\n
/* eslint-disable */`;

export const generateIndex = (componentDirectory: string, iconsByNames: MultiSourceIconSource[], isRichIcons: boolean) => {
    const iconSuffix = isRichIcons ? RichIconSuffix : IconSuffix;
    const iconListName = isRichIcons ? "iconNames" : "richIconNames";
    const iconList = iconsByNames.map(icon => icon.name + iconSuffix);
    const indexFile = `${componentDirectory}/index.ts`;
    const indexContent = `${GENERATED_HEADER}\n
${Object.values(iconsByNames).map(icon => `export * from "./${icon.name}${iconSuffix}.tsx";`).join("\n")}
\nexport const ${iconListName} = ${JSON.stringify(iconList)} as const;`;

    fs.writeFileSync(indexFile, indexContent);
};
