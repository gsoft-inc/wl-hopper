import { Breakpoint, ColorScheme, Div, HopperProvider, HtmlH1 } from "@hopper-ui/components";
import { makeDecorator } from "@storybook/addons";
import { DisableAnimations } from "./DisableAnimations.tsx";
import "./disableAnimations.css";

type Scale = "mobile" | "desktop";

export interface HopperProviderOptions {
    /** Whether to disable the hopperProvider. Defaults to true. */
    disabled?: boolean;
    /** The color schemes to render. Defaults to all color schemes. */
    colorSchemes?: ColorScheme[];
    /** The scales to render. Defaults to all scales. */
    scales?: Scale[] ;
    /** The height of the preview. Defaults to 1000px. */
    height?: number;
    /** Whether to disable animations. Defaults to false. */
    disableAnimations?: boolean;
}

export const ColorSchemes = ["light", "dark"] satisfies HopperProviderOptions["colorSchemes"];
export const Scales = ["mobile", "desktop"]  satisfies HopperProviderOptions["scales"];

const ScaleToBreakpointMapping:Record<Scale, Breakpoint> = {
    desktop: "lg",
    mobile: "xs"
}

export const withHopperProvider = makeDecorator({
    name: "withHopperProvider",
    parameterName: "hopperProvider",
    wrapper: (getStory, context, { options: optionProp, parameters }) => {
        const options = { ...optionProp, ...parameters } as HopperProviderOptions;

        const colorSchemes = options.colorSchemes || ColorSchemes;
        const scalesToRender = options.scales || Scales;
        const disabled = options.disabled || false;

        if(disabled) {
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
                    scalesToRender.map(scale => (
                        // TODO: once icons PR merge, update the style tag to styled system properties
                            <HopperProvider key={`${colorScheme}_${scale}`} colorScheme={colorScheme} style={{display: "flex", flexDirection:"column", height, minHeight, width: ScaleToBreakpointMapping[scale] }}>
                                <Div margin="core_80" >
                                    <HtmlH1
                                    fontFamily="overline"
                                    fontWeight="overline"
                                    fontSize="overline"
                                    lineHeight="overline"
                                    margin="core_0"
                                    padding="core_0"
                                    >{`${colorScheme}, ${scale}`}</HtmlH1>
                                    {getStory(context) as JSX.Element}
                                </Div>
                            </HopperProvider>
                    )))}
            </DisableAnimations>
        );
    }
});
