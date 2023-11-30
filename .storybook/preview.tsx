// import { withHopperProvider } from "@hopper-ui/hopper-chromatic-addon";
import type { Preview } from "@storybook/react";
import { withHopperProvider } from "../tooling/hopper-chromatic-addon/index.tsx";

const preview: Preview = {
    parameters: {
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
    decorators: [
        withHopperProvider
    ]
};

export default preview;
