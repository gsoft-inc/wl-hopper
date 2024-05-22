import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/test";

import { Inline, Stack } from "../../../layout/index.ts";
import { ClearButton, type ClearButtonProps } from "../../src/ClearButton.tsx";

const meta = {
    title: "Components/Buttons/ClearButton",
    component: ClearButton
} satisfies Meta<typeof ClearButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => {
        return (
            <Stack>
                <Stack>
                    <h1>Default</h1>
                    <Inline alignY="end">
                        <ClearButton {...args} />
                        <ClearButton {...args} size="lg" />
                    </Inline>
                </Stack>
                <Stack>
                    <h1>Zoom</h1>
                    <Inline alignY="end">
                        <Div className="zoom-in">
                            <ClearButton {...args} />
                        </Div>
                        <Div className="zoom-out'">
                            <ClearButton {...args} />
                        </Div>
                    </Inline>
                    <Inline alignY="end">
                        <Div className="zoom-in">
                            <ClearButton {...args} size="lg" />
                        </Div>
                        <Div className="zoom-out'">
                            <ClearButton {...args} size="lg" />
                        </Div>
                    </Inline>
                </Stack>
            </Stack>
        );
    }
};

const StateTemplate = (args: Partial<ClearButtonProps>) => (
    <Inline alignY="end">
        <ClearButton {...args} />
        <ClearButton {...args} size="lg" />
    </Inline>
);

export const DefaultStates: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const buttons = canvas.getAllByRole("button");

        buttons.forEach(button => {
            if (button.getAttribute("disabled") !== "") { // don't try and force states on a disabled input
                if (button.getAttribute("data-chromatic-force-focus")) {
                    button.setAttribute("data-focus-visible", "true");
                    button.removeAttribute("data-chromatic-force-focus");
                }

                if (button.getAttribute("data-chromatic-force-hover")) {
                    button.setAttribute("data-hovered", "true");
                    button.removeAttribute("data-chromatic-force-hover");
                }

                if (button.getAttribute("data-chromatic-force-press")) {
                    button.setAttribute("data-pressed", "true");
                    button.removeAttribute("data-chromatic-force-press");
                }
            }
        });
    },
    render: args => {
        return (
            <Stack>
                <h1>Default</h1>
                <StateTemplate {...args} />
                <h1>Disabled</h1>
                <StateTemplate {...args} isDisabled />
                <h1>Pressed</h1>
                <StateTemplate {...args} data-chromatic-force-press />
                <h1>Focus Visible</h1>
                <StateTemplate {...args} data-chromatic-force-focus />
                <h1>Hovered</h1>
                <StateTemplate {...args} data-chromatic-force-hover />
                <h1>Focus Visible and Hovered</h1>
                <StateTemplate {...args} data-chromatic-force-focus data-chromatic-force-hover />
            </Stack>
        );
    }
};
