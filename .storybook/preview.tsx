import type { Preview } from "@storybook/react";
import { withChromaticProvider } from "./custom-addons/chromatic/index.tsx";

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
