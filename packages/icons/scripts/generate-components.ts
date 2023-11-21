import { transform } from "@svgr/core";
import fs from "fs";
import path from "path";
import { PrimaryIconColor } from "./constants.ts";
import type { IconNameDictionary } from "./fetch-svgs.ts";

function ensureDirSync(dir: string) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

export async function generateComponents(SVGsDir: string, iconsByNames: IconNameDictionary) {
    ensureDirSync(SVGsDir);

    for (const icon of Object.values(iconsByNames)) {
        let componentCode = "/* eslint-disable max-len */ import { createIcon } from \"../create-icon.tsx\";";
        let index = 0;
        const baseIconName = `${icon.name}Icon`;

        for (const [size, data] of Object.entries(icon.sizes)) {
            const currentIndex = index;
            componentCode += transform.sync(data, {
                typescript: true,
                ref: true,
                replaceAttrValues: {
                    [PrimaryIconColor]: "var(--hop-primary-icon)"
                },
                jsxRuntime: "automatic",
                svgProps: {
                    "focusable": "false"
                },
                svgoConfig: {
                    plugins: [
                        {
                            name: "preset-default",
                            params: {
                                overrides: {
                                    removeViewBox: false
                                }
                            }
                        },
                        "removeXMLNS"
                    ]
                },
                plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
                template: ({ componentName, jsx, props, imports }, { tpl }) => {
                    return tpl`
                        ${currentIndex === 0 ? imports : ""}

                        const ${componentName} = forwardRef((${props}) => (
                            ${jsx}
                        ));
                    `;
                }
            }, {
                componentName: baseIconName + size
            });
            index++;
        }
        componentCode += `export const ${baseIconName} = createIcon(${baseIconName}16, ${baseIconName}24, ${baseIconName}32, "${baseIconName}");`;

        const destinationPath = path.resolve(SVGsDir, baseIconName + ".tsx");
        fs.writeFileSync(destinationPath, Buffer.from(componentCode));
    }
}
