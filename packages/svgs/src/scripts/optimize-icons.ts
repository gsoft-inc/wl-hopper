import { optimize, type CustomPlugin } from "svgo";
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

const plugin: CustomPlugin = {
    name: "find-size",
    fn: () => {
        return {
            element: {
                enter: (node, parentNode) => {
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

export const optimizeIcons = (icons: Icon[]): OptimizedIcon[] => {
    const result = icons.map(icon => {
        return optimizeIcon(icon);
    });

    result.forEach(icon => {
        validateSize(icon?.size?.width, icon?.size?.height, icon?.name);
    });

    return result;
};
