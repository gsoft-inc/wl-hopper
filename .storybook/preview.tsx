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
                <HopperProvider
                    colorScheme="light"
                    color="neutral"
                    backgroundColor="neutral"
                    lineHeight="body-md"
                    fontFamily="body-md"
                    fontSize="body-md"
                >
                    <Story />
                </HopperProvider>
            );
        }
    ]
};

export default preview;
