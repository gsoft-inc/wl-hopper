import { HopperProvider } from "@hopper-ui/components";
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
        Story => {
            return (
                <HopperProvider colorScheme="light">
                    <Story />
                </HopperProvider>
            );
        }
    ]
};

export default preview;
