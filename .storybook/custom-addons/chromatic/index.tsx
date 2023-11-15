import { HopperProvider } from "@hopper-ui/components";
import { makeDecorator } from "@storybook/addons";
import { useEffect, type ReactNode } from "react";
import "./disableAnimations.css";

export interface ChromaticProviderOptions {
    /** The color schemes to render. Defaults to all color schemes. */
    colorSchemes?: ("light" | "dark")[];
    /** The scales to render. Defaults to all scales. */
    scales?: ("medium" | "large")[];
    /** The height of the preview. Defaults to 1000px. */
    height?: number;
    /** Whether to disable animations. Defaults to false. */
    disableAnimations?: boolean;
}

export const ColorSchemes = ["light", "dark"] as const; // TODO: is this the best place to put this?
export const Scales = ["medium", "large"] as const; // TODO: is this the best place to put this?

export const withChromaticProvider = makeDecorator({
    name: "withChromaticProvider",
    parameterName: "chromaticProvider",
    wrapper: (getStory, context, { options: optionProp, parameters }) => {
        const options = { ...optionProp, ...parameters } as ChromaticProviderOptions;

        const colorSchemes = options.colorSchemes || ColorSchemes;
        const scalesToRender = options.scales || Scales;

        let height;
        let minHeight;
        if (options.height && isNaN(options.height)) {
            minHeight = 1000;
        } else {
            height = options.height;
        }

        // do not add a top level provider, each provider variant needs to be independent so that we don't have RTL/LTR styles that interfere with each other
        return (
            <DisableAnimations disableAnimations={options.disableAnimations}>
                <div style={{ display: "flex", flexDirection: "column", height, minHeight }}>
                    {colorSchemes.map(colorScheme =>
                        scalesToRender.map(scale =>
                            <HopperProvider key={`${colorScheme}_${scale}`} colorScheme={colorScheme}>
                                <div style={{ margin: "8px" }}>
                                    <h1 style={{ margin: 0, padding: 0 }}>{`${colorScheme}, ${scale}`}</h1>
                                    {getStory(context) as unknown as JSX.Element}
                                </div>
                            </HopperProvider>
                        )
                    )}
                </div>
            </DisableAnimations>
        );
    }
});

interface DisableAnimationsProps {
    children: ReactNode;
    disableAnimations?: boolean;
}

function DisableAnimations({ children, disableAnimations }: DisableAnimationsProps) {
    useEffect(() => {
        if (disableAnimations) {
            document.body.classList.add("disableAnimations");
        } else {
            document.body.classList.remove("disableAnimations");
        }
    }, [disableAnimations]);

    return children;
}
