import type { Preview } from "@storybook/react";
import { withHopperProvider } from "@hopper-ui/storybook-addon";

const preview: Preview = {
    parameters: {
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
        }
    },
    decorators: [withHopperProvider]
};

export default preview;
