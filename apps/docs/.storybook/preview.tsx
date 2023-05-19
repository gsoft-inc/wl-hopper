import type { Preview } from "@storybook/react"

import "../app/tokens.css";
import "./global.css";

const Container = ({ children, theme }) => (
    <div className="container" data-theme={theme}>{children}</div>
)

const preview: Preview = {
    parameters: {
        layout: "fullscreen",
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    globalTypes: {
        scheme: {
            name: "Color scheme",
            description: "Global color scheme for components",
            defaultValue: "light",
            toolbar: {
                icon: "mirror",
                items: ["light", "dark"],
                dynamicTitle: true,
            }
        }
    },
    decorators: [
        (Story, context) => {
            const { scheme } = context.globals;
            const theme = scheme === "light" ? "light" : "dark";

            return (
                <Container theme={theme}>
                    <Story />
                </Container>
            );
        }
    ]
}

export default preview
