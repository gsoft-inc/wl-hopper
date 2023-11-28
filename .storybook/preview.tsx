import { withChromaticProvider } from "@hopper-ui/chromatic-storybook-addon";
import type { Preview } from "@storybook/react";

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
        withChromaticProvider
    ]
};

export default preview;
