import type { Preview } from "@storybook/react";
import { HopperProvider } from "../packages/components/src/index.ts";

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
