import type { StoryContext } from "@storybook/react";
import { IconButton, Icons, TooltipLinkList, WithTooltip } from "@storybook/components";
import { COLOR_SCHEME_TOOL_ID } from "./constants.ts";
import type { AddonColorScheme, PresetSchemeValues } from "./types.ts";
import { useCallback } from "react";
import { useGlobals } from "@storybook/manager-api";

const Values: AddonColorScheme[] = [
    { name: "light", value: "light" },
    { name: "dark", value: "dark" },
    { name: "all", value: "all" }
];

export function ColorSchemeTool() {
    const [globals, updateGlobals] = useGlobals();

    const selectedColorScheme = globals[COLOR_SCHEME_TOOL_ID]?.value;

    const handleColorSchemeChange = useCallback((value: string) => {
        updateGlobals({ [COLOR_SCHEME_TOOL_ID]: { ...globals[COLOR_SCHEME_TOOL_ID], value } });
    }, [globals, updateGlobals]);

    return (
        <WithTooltip
            placement="top"
            closeOnOutsideClick
            tooltip={({ onHide }) => {
                const links = Values.map(({ name, value }) => {
                    return {
                        id: name,
                        title: name,
                        onClick: () => {
                            if (selectedColorScheme !== value && value) {
                                handleColorSchemeChange(value);
                            }
                            onHide();
                        },
                        value
                    };
                }
                );

                return <TooltipLinkList links={links} />;
            }}
        >
            <IconButton
                key="color-scheme"
                title="Change the color scheme of the story"
            >
                <Icons icon="mirror" />
            </IconButton>
        </WithTooltip>
    );
}

export function getColorSchemeFromContext(context: StoryContext): PresetSchemeValues {
    const {
        globals: { [COLOR_SCHEME_TOOL_ID]: scheme }
    } = context;

    if (scheme) {
        return (scheme as AddonColorScheme).value ?? "light";
    }

    return "light";
}
