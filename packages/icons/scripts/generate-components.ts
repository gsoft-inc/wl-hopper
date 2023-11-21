import { transform } from "@svgr/core";
import fs from "fs";
import path from "path";
import { PrimaryIconColor } from "./constants.ts";
import type { MultiSourceIconSource } from "./fetch-svgs.ts";
import svgoConfig from "./svgo-config.ts";

function ensureDirSync(dir: string) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

export async function generateComponents(SVGsDir: string, icons: MultiSourceIconSource[]) {
    ensureDirSync(SVGsDir);

    for (const icon of icons) {
        let componentCode = [
            "/**",
            " * This file is generated by the generate-components script. Do not edit directly.",
            " */",
            "/* eslint-disable */",
            "import { createIcon } from \"../create-icon.tsx\";",
            "import { forwardRef, type Ref, type SVGProps } from \"react\";"
        ].join("\n");
        componentCode += "\n\n";

        const baseIconName = `${icon.name}Icon`;

        for (const [size, data] of Object.entries(icon.sizes)) {
            componentCode += transform.sync(data, {
                typescript: true,
                ref: true,
                replaceAttrValues: {
                    [PrimaryIconColor]: "var(--hop-primary-icon)"
                },
                jsxRuntime: "automatic",
                svgoConfig: svgoConfig,
                plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
                template: ({ componentName, jsx, props }, { tpl }) => {
                    return tpl`
                        const ${componentName} = forwardRef((${props}) => (
                            ${jsx}
                        ));
                    `;
                }
            }, {
                componentName: `${baseIconName}${size}`
            });
            componentCode += "\n";
        }
        componentCode += `\nexport const ${baseIconName} = createIcon(${baseIconName}16, ${baseIconName}24, ${baseIconName}32, "${baseIconName}");`;

        const destinationPath = path.resolve(SVGsDir, baseIconName + ".tsx");
        fs.writeFileSync(destinationPath, Buffer.from(componentCode));
    }
}
