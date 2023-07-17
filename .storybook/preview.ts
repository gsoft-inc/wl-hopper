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
            defaultTab: "Colors",
            pageSize: Number.MAX_VALUE
        }
    }
};

export default preview;
