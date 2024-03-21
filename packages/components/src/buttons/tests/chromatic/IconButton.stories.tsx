import { Button, type ButtonProps } from "../../src/Button.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { Inline, Stack } from "../../../layout/index.ts";
import { AddIcon } from "@hopper-ui/icons";
import type { ElementType } from "react";
import { within } from "@storybook/test";

const meta = {
    title: "Components/Buttons/Button/Icon Only",
    component: Button,
    args: {
        children: <AddIcon />,
        "aria-label": "Add"
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: args => (
        <Stack>
            <Inline alignY="end">
                <Button size="sm" {...args} />
                <Button {...args} />
            </Inline>
            <Inline alignY="end">
                <Button isLoading size="sm" {...args} />
                <Button isLoading {...args} />
            </Inline>
            <Button size="sm" fluid {...args} />
            <Button fluid {...args} />
        </Stack>
    )
};

export const Secondary: Story = {
    ...Primary,
    args:{
        ...Primary.args,
        variant: "secondary"
    }
};

export const Tertiary: Story = {
    ...Primary,
    args:{
        ...Primary.args,
        variant: "tertiary"
    }
};

export const Upsell: Story = {
    ...Primary,
    args:{
        ...Primary.args,
        variant: "upsell"
    }
};

export const Negative: Story = {
    ...Primary,
    args:{
        ...Primary.args,
        variant: "negative"
    }
};


const StateTemplate = <T extends ElementType>(args: Partial<ButtonProps<T>>) => (
    <Inline alignY="end">
        <Button size="sm" {...args} />
        <Button {...args} />
    </Inline>
);

export const PrimaryStates: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const buttons = canvas.getAllByRole("button");

        buttons.forEach(button => {
            if (button.getAttribute("disabled") !== "") { // don't try and force states on a disabled input
                if (button.getAttribute("data-chromatic-force-press")) {
                    button.setAttribute("data-pressed", "true");
                    button.removeAttribute("data-chromatic-force-press");
                }

                if (button.getAttribute("data-chromatic-force-focus")) {
                    button.setAttribute("data-focus-visible", "true");
                    button.removeAttribute("data-chromatic-force-focus");
                }

                if (button.getAttribute("data-chromatic-force-hover")) {
                    button.setAttribute("data-hovered", "true");
                    button.removeAttribute("data-chromatic-force-hover");
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

export const SecondaryStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "secondary"
    }
};

export const TertiaryStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "tertiary"
    }
};

export const UpsellStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "upsell"
    }
};

export const NegativeStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "negative"
    }
};
