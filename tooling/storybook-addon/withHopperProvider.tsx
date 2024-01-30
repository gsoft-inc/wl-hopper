import { type ColorScheme, Div, HopperProvider, HtmlH1, Breakpoints } from "@hopper-ui/components";
import { makeDecorator } from "@storybook/preview-api";
import { DisableAnimations } from "./DisableAnimations.tsx";
import "./disableAnimations.css";

const AddonName = "hopper";

export interface HopperStorybookAddonOptions {
    /** Whether to disable the hopperProvider. Defaults to true. */
    disabled?: boolean;
    /** The color schemes to render. Defaults to all color schemes. */
    colorSchemes?: ColorScheme[];
    /** The height of the preview. Defaults to 1000px. */
    height?: number;
    /** Whether to disable animations. Defaults to false. */
    disableAnimations?: boolean;
}

export interface WithHopperStorybookAddonParameter {
    [AddonName]?: HopperStorybookAddonOptions;
}

export const ColorSchemes = ["light", "dark"] satisfies HopperStorybookAddonOptions["colorSchemes"];

export const withHopperProvider = makeDecorator({
    name: "withHopperProvider",
    parameterName: AddonName,
    wrapper: (getStory, context, { options: optionProp, parameters }) => {
        const options = { ...optionProp, ...parameters } as HopperStorybookAddonOptions;

        const colorSchemes = options.colorSchemes || ColorSchemes;
        const disabled = options.disabled || false;

        if (disabled) {
            return getStory(context);
        }

        let height: number | undefined;
        let minHeight: number | undefined;
        if (options.height && isNaN(options.height)) {
            minHeight = 1000;
        } else {
            height = options.height;
        }

        // do not add a top level provider, each provider variant needs to be independent so that we don't have RTL/LTR styles that interfere with each other
        return (
            <DisableAnimations disableAnimations={options.disableAnimations}>
                {colorSchemes.map(colorScheme =>
                    <HopperProvider
                        key={`${colorScheme}`}
                        colorScheme={colorScheme}
                        color="neutral"
                        backgroundColor="neutral"
                        lineHeight="body-md"
                        fontFamily="body-md"
                        fontSize="body-md"
                        display="flex"
                        flexDirection="column"

                        UNSAFE_height={height ? `${height}px` : undefined}
                        UNSAFE_minHeight={minHeight ? `${minHeight}px` : undefined}
                        padding="inset-md"
                    >
                        {getStory(context) as JSX.Element}
                    </HopperProvider>
                )}
            </DisableAnimations>
        );
    }
});
