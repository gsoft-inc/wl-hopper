import { MailIcon } from "@hopper-ui/icons";
import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/test";

import { ErrorMessage } from "../../../ErrorMessage/index.ts";
import { HelperMessage } from "../../../HelperMessage/index.ts";
import { Inline, Stack } from "../../../layout/index.ts";
import { Label } from "../../../typography/index.ts";
import { TextField, type TextFieldProps } from "../../src/TextField.tsx";

const meta = {
    title: "Components/TextField",
    component: TextField
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => (
        <Stack>
            <Inline alignY="center">
                <TextField {...args} />
                <TextField size="sm" {...args} />
            </Inline>
            <TextField isDisabled {...args} />
            <TextField isReadOnly {...args} />
            <TextField isFluid {...args} />
            <Div width="10%">
                <TextField isFluid {...args} />
            </Div>
            <TextField showCharacterCount maxLength={20} {...args} />
            <TextField showCharacterCount maxLength={20} isClearable {...args} />
            <TextField isClearable {...args} />
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
        defaultValue: "Hop we go!"
    }
};

export const PrefixIcon: Story = {
    ...WithLabel,
    args: {
        ...WithLabel.args,
        prefix: <MailIcon />,
        defaultValue: "Hop we go!"
    }
};

export const TextIcon: Story = {
    ...WithLabel,
    args: {
        ...WithLabel.args,
        prefix: "$",
        defaultValue: "Hop we go!"
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
                    <TextField placeholder="Where to?" />
                    <TextField placeholder="Where to?" size="sm" />
                </Inline>
            </Div>
            <Div className="zoom-out">
                <Inline alignY="center">
                    <TextField placeholder="Where to?" />
                    <TextField placeholder="Where to?" size="sm" />
                </Inline>
            </Div>
        </Stack>
    )
};

export const Styling: Story = {
    render: () => (
        <Inline>
            <TextField UNSAFE_border="red" aria-label="Label" />
            <TextField className="bg-red" aria-label="Label" />
            <TextField style={{ backgroundColor: "red" }} aria-label="Label" />
        </Inline>
    )
};

const StateTemplate = (args: Partial<TextFieldProps>) => (
    <Stack>
        <Inline alignY="center">
            <TextField {...args} />
            <TextField size="sm" {...args} />
        </Inline>
        <TextField isDisabled {...args} />
        <TextField isReadOnly {...args} />
        <TextField isFluid {...args} />
        <Div width="10%">
            <TextField isFluid {...args} />
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
