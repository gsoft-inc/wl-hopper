import { optimize } from "svgo";
import { ICONS_SIZES } from "./constants.ts";
import type { Icon } from "./load-icons.ts";
import config from "./svgo-config.ts";

interface Size {
    width: string | null;
    height: string | null;
}

export interface OptimizedIcon extends Omit<Icon, "content" | "filePath"> {
    size: Size;
    data: string;
}

export interface XastDoctype {
    type: "doctype";
    name: string;
    data: {
        doctype: string;
    };
}
  
export interface XastInstruction {
    type: "instruction";
    name: string;
    value: string;
}
  
export interface XastComment {
    type: "comment";
    value: string;
}
  
export interface XastCdata {
    type: "cdata";
    value: string;
}
  
export interface XastText {
    type: "text";
    value: string;
}
  
export interface XastElement {
    type: "element";
    name: string;
    attributes: Record<string, string>;
    children: Array<XastChild>;
}
  
export type XastChild =
    | XastDoctype
    | XastInstruction
    | XastComment
    | XastCdata
    | XastText
    | XastElement;
  
export interface XastRoot {
    type: "root";
    children: Array<XastChild>;
}
  
export type XastParent = XastRoot | XastElement;

let width: string | null = null;
let height: string | null = null;

const validateSize = (iconWidth: string | null, iconHeight: string | null, name: string): boolean => {
    const sizes = ICONS_SIZES;

    if (sizes.includes(Number(iconWidth)) && sizes.includes(Number(iconHeight))) {
        return true;
    } else {
        console.error(
            `The size of ${name} is not correct. width: ${iconWidth} height: ${iconHeight}`
        );
        process.exit(1);
    }
};

const plugin = {
    name: "find-size",
    fn: () => {
        return {
            element: {
                enter: (node: XastElement, parentNode: XastParent) => {
                    if (parentNode.type === "root") {
                        width = node.attributes.width;
                        height = node.attributes.height;
                    }
                }
            }
        };
    }
};

const optimizeIcon = (icon: Icon): OptimizedIcon => {
    const { content, filePath, ...rest } = icon;
    const { plugins = [], ...configRest } = config;

    const { data } = optimize(content, {
        path: filePath,
        ...configRest,
        plugins: [...plugins, plugin]
    });

    return {
        ...rest,
        size: {
            width: width,
            height: height
        },
        data
    };
};

const optimizeIcons = (icons: Icon[]): OptimizedIcon[] => {
    const result = icons.map(icon => {
        return optimizeIcon(icon);
    });

    result.forEach(icon => {
        validateSize(icon?.size?.width, icon?.size?.height, icon?.name);
    });

    return result;
};

export {
    optimizeIcons
};