import { Button } from "../../src/Button.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { Primary as PrimaryButtonStory } from "./Button.stories.tsx";
import { HopperProvider } from "../../../index.ts";
import { useColorSchemeContext } from "@hopper-ui/styled-system";
import { useNavigate, RouterProvider, createMemoryRouter } from "react-router-dom";
import type { PropsWithChildren } from "react";

// TODO: this will be replaced by unit tests
const ReactRouterHopperProvider = ({ children }: PropsWithChildren) => {
    const colorScheme = useColorSchemeContext();
    const navigate = useNavigate();

    return (
        <HopperProvider colorScheme={colorScheme.colorScheme} navigate={navigate}>
            {children}
        </HopperProvider>
    );
};

const meta = {
    title: "Components/Buttons/Button/As Router Link",
    component: Button,
    decorators: [
        Story => {
            const router = createMemoryRouter([{
                path: "/123",
                element: <ReactRouterHopperProvider>Navigated Successfully! <Story /></ReactRouterHopperProvider>
            }, {
                path: "*",
                element: <ReactRouterHopperProvider><Story /></ReactRouterHopperProvider>
            }
            ]);

            return (
                <RouterProvider router={router} />
            );
        }
    ],
    args: {
        children: "Click me!"
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExternalLink: Story = {
    ...PrimaryButtonStory,
    args:{
        ...PrimaryButtonStory.args,
        href: "https://www.google.com"
    }
};

export const RouterLink: Story = {
    ...PrimaryButtonStory,
    args:{
        ...PrimaryButtonStory.args,
        href: "/123"
    }
};
