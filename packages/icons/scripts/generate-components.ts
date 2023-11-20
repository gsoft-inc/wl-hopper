import { transform } from "@svgr/core";
import { PrimaryIconColor } from "./constants.ts";

export interface SVGData {
    data: string;
    name: string;
    size: number;
}

export async function generateComponents(SVGsDir: string, svgDatas: SVGData[]) {
    const fromKebabToPascalCase = (str: string) => {
        return str.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("");
    };

    // console.log("SVG Data: ", svgDatas);
    const test = [svgDatas[0], svgDatas[1]];
    for (const svgData of test) {
        const data = transform.sync(svgData.data, {
            typescript: true,
            ref: true,
            replaceAttrValues: {
                [PrimaryIconColor]: "var(--coucou)" // TODO fix this
            },
            jsxRuntime: "automatic",
            svgProps: {
                "focusable": "false"
            },
            // svgoConfig: config
            // add svgo config to remove xmlns attribute
            plugins: ["@svgr/plugin-jsx"],
            template: ({ componentName, jsx, props, imports }, { tpl }) => {
                return tpl`
                ${componentName.endsWith("16") ? imports : ""}
                ${componentName.endsWith("16") ? "/* eslint-disable max-len */" : ""}

                const ${componentName} = forwardRef((${props}) => (
                    ${jsx}
                ));
                `;
            }
        }, {
            componentName: fromKebabToPascalCase(svgData.name)
        });
        // add this to the package.json
        /*
        "@svgr/plugin-svgo": "8.1.0", // optinonal?
    "@svgr/plugin-jsx": "8.1.0"
"@svgr/core": "8.1.0",
        */
        console.log(data);
    }
}
