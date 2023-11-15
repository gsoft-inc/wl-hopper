import { optimize } from "svgo";
import type { Icon } from "./load-icons.ts";
import config from "./svgo-config.ts";

export const optimizeIcons = (icons: Icon[]) => {
    return icons.map(icon => {
        return optimizeIcon(icon);
    });
};

export interface OptimizedIcon extends Omit<Icon, "content" | "filePath"> {
    data: string;
}

const optimizeIcon = (icon: Icon): OptimizedIcon => {
    const { content, filePath, ...rest } = icon;
    const { ...configRest } = config;

    const { data } = optimize(content, {
        path: filePath,
        ...configRest
    });

    return {
        ...rest,
        data
    };
};
