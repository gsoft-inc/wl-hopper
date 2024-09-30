import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/test";

import { ErrorMessage } from "../../../ErrorMessage/index.ts";
import { HelperMessage } from "../../../HelperMessage/index.ts";
import { Inline, Stack } from "../../../layout/index.ts";
import { Label } from "../../../typography/index.ts";
import { TextArea, type TextAreaProps } from "../../src/TextArea.tsx";

const meta = {
    title: "Components/Forms/TextArea",
    component: TextArea
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => (
        <Stack>
            <Div>
                <h1>Sizes</h1>
                <Inline alignY="flex-start">
                    <TextArea {...args} />
                    <TextArea size="sm" {...args} />
                </Inline>
            </Div>
            <Div>
                <h1>Disabled</h1>
                <TextArea isDisabled {...args} />
            </Div>
            <Div>
                <h1>Read Only</h1>
                <TextArea isReadOnly {...args} />
            </Div>
            <Div>
                <h1>Fluid</h1>
                <TextArea isFluid {...args} />
            </Div>
            <Div>
                <h1>Fluid with container Width</h1>
                <Div width="10%">
                    <TextArea isFluid {...args} />
                </Div>
            </Div>
            <Div>
                <h1>Character Count</h1>
                <TextArea showCharacterCount maxLength={200} {...args} />
            </Div>
            <Div>
                <h1>Character Count Overflow</h1>
                <TextArea showCharacterCount allowExceedingMaxLength maxLength={10} {...args} />
            </Div>
            <Div>
                <h1>Rows</h1>
                <TextArea rows={10} {...args} />
            </Div>
            <Div>
                <h1>Max Rows</h1>
                <TextArea maxRows={4} {...args} />
            </Div>
            <Div>
                <h1>Resize</h1>
                <TextArea resizeMode="vertical" {...args} />
            </Div>
        </Stack>
    ),
    args: {
        "aria-label": "Label"
    }
};

export const WithLabel: Story = {
    ...Default,
    args: {
        children: [
            <Label key="1">Name:</Label>
        ]
    }
};

export const Placeholder: Story = {
    ...WithLabel,
    args: {
        ...WithLabel.args,
        placeholder: "Where to?"
    }
};

export const Value: Story = {
    ...WithLabel,
    args: {
        ...WithLabel.args,
        defaultValue: "Hop we go! Over the lily pads. Hop we go! Over the lily pads. Hop we go! Over the lily pads. Hop we go! Over the lily pads. Hop we go! Over the lily pads."
    }
};

export const HelperText: Story = {
    ...Default,
    args: {
        ...Default.args,
        children: [
            <HelperMessage key="1">Helper message</HelperMessage>,
            <ErrorMessage key="2">Error message</ErrorMessage>
        ],
        defaultValue: "Hop we go!"
    }
};

export const Validation: Story = {
    ...Default,
    args: {
        ...Default.args,
        isInvalid: true,
        children: [
            <HelperMessage key="1">Helper message</HelperMessage>,
            <ErrorMessage key="2">Error message</ErrorMessage>
        ],
        defaultValue: "Hop we go!"
    }
};

export const Zoom: Story = {
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Inline alignY="center">
                    <TextArea placeholder="Where to?" />
                    <TextArea placeholder="Where to?" size="sm" />
                </Inline>
            </Div>
            <Div className="zoom-out">
                <Inline alignY="center">
                    <TextArea placeholder="Where to?" />
                    <TextArea placeholder="Where to?" size="sm" />
                </Inline>
            </Div>
        </Stack>
    )
};

export const Styling: Story = {
    render: () => (
        <Inline>
            <TextArea UNSAFE_border="1px solid red" aria-label="Label" />
            <TextArea className="bg-red" aria-label="Label" />
            <TextArea style={{ backgroundColor: "red" }} aria-label="Label" />
        </Inline>
    )
};

const StateTemplate = (args: Partial<TextAreaProps>) => (
    <Stack>
        <Inline alignY="center">
            <TextArea {...args} />
            <TextArea size="sm" {...args} />
        </Inline>
        <TextArea isDisabled {...args} />
        <TextArea isReadOnly {...args} />
        <TextArea isFluid {...args} />
        <Div width="10%">
            <TextArea isFluid {...args} />
        </Div>
    </Stack>
);

export const States: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const inputs = canvas.getAllByRole("textbox");

        inputs.forEach(input => {
            if (input.getAttribute("disabled") !== "") {
                const inputGroup = input.parentElement;
                const field = inputGroup?.parentElement;

                if (field?.getAttribute("data-chromatic-force-focus")) {
                    input.setAttribute("data-focus-visible", "true");
                    inputGroup?.setAttribute("data-focus-within", "true");
                    field?.removeAttribute("data-chromatic-force-focus");
                }

                if (field?.getAttribute("data-chromatic-force-focus-within")) {
                    inputGroup?.setAttribute("data-focus-within", "true");
                    field?.removeAttribute("data-chromatic-force-focus-within");
                }

                if (field?.getAttribute("data-chromatic-force-hover")) {
                    input.setAttribute("data-hovered", "true");
                    inputGroup?.setAttribute("data-hovered", "true");
                    field?.removeAttribute("data-chromatic-force-hover");
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
                <h1>Focus Within</h1>
                <StateTemplate {...args} data-chromatic-force-focus-within />
                <h1>Focus Visible</h1>
                <StateTemplate {...args} data-chromatic-force-focus />
                <h1>Hovered</h1>
                <StateTemplate {...args} data-chromatic-force-hover />
                <h1>Focus Visible and Hovered</h1>
                <StateTemplate {...args} data-chromatic-force-focus data-chromatic-force-hover />
            </Stack>
        );
    },
    args: {
        "aria-label": "Label",
        defaultValue: "Some random text"
    }
};
