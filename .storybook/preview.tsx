import type { Preview } from "@storybook/react";
import { withHopperProvider, viewport } from "@hopper-ui/storybook-addon";
import {
    Description,
    Stories,
    Subtitle,
    Title
} from "@storybook/blocks";
import "./stories.css";

const preview: Preview = {
    parameters: {
        backgrounds: {
            disable: true
        },
        layout: "fullscreen", // removes the padding around the preview
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        designToken: {
            disable: true
        },
        typescript: {
            reactDocgen: "react-docgen"
        }, // disable prop table as suggested here: https://storybook.js.org/blog/optimize-storybook-7-6/
        viewport,
        docs: {
            page: () => {
                return (
                    <>
                        <Title />
                        <Subtitle />
                        <Description />
                        <Stories title="Usage" />
                    </>
                );
            }
        }

    },
    decorators: [withHopperProvider]
};

export default preview;
