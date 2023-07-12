import { addons, types } from "@storybook/manager-api";
import { ADDON_ID, COLOR_SCHEME_TOOL_ID } from "./constants.ts";
import { ColorSchemeTool } from "./color-scheme.tsx";

addons.register(ADDON_ID, () => {
    const match = ({ viewMode }: { viewMode?: string }) =>
        Boolean(viewMode && viewMode.match(/^(story)$/));

    addons.add(COLOR_SCHEME_TOOL_ID, {
        type: types.TOOL,
        title: "Color Scheme",
        render: ColorSchemeTool,
        match
    });
});
