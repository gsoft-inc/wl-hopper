import { MailIcon } from "@hopper-ui/icons";
import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@testing-library/react";

import { ErrorMessage } from "../../../errorMessage/index.ts";
import { HelperMessage } from "../../../helperMessage/index.ts";
import { Label } from "../../../Label/index.ts";
import { Inline, Stack } from "../../../layout/index.ts";
import { SearchField, type SearchFieldProps } from "../../src/SearchField.tsx";

const meta = {
    title: "Components/SearchField",
    component: SearchField
} satisfies Meta<typeof SearchField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => (
        <Stack>
            <Inline alignY="center">
                <SearchField {...args} />
                <SearchField size="sm" {...args} />
            </Inline>
            <SearchField isDisabled {...args} />
            <SearchField isReadOnly {...args} />
            <SearchField isFluid {...args} />
            <Div width="10%">
                <SearchField isFluid {...args} />
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
        ...Default.args,
        "aria-label": undefined,
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

export const NonClearable: Story = {
    ...Value,
    args: {
        ...Value.args,
        isClearable: false
    }
};

export const CustomIcon: Story = {
    ...Value,
    args: {
        ...Value.args,
        icon: <MailIcon />
    }
};

export const NoIcon: Story = {
    ...Value,
    args: {
        ...Value.args,
        icon: null
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
                    <SearchField placeholder="Where to?" />
                    <SearchField placeholder="Where to?" size="sm" />
                </Inline>
            </Div>
            <Div className="zoom-out">
                <Inline alignY="center">
                    <SearchField placeholder="Where to?" />
                    <SearchField placeholder="Where to?" size="sm" />
                </Inline>
            </Div>
        </Stack>
    )
};

export const Styling: Story = {
    render: () => (
        <Inline>
            <SearchField border="core_amanita-600" aria-label="Label" />
            <SearchField className="bg-red" aria-label="Label" />
            <SearchField style={{ backgroundColor: "red" }} aria-label="Label" />
            {/* <SearchField wrapperProps={{ border: "amanita-500" }} aria-label="Label" />
            <SearchField wrapperProps={{ className: "border-red" }} aria-label="Label" />
            <SearchField wrapperProps={{ style: { border: "1px solid red" } }} aria-label="Label" /> */}
        </Inline>
    )
};

const StateTemplate = (args: Partial<SearchFieldProps>) => (
    <Stack>
        <Inline alignY="center">
            <SearchField {...args} />
            <SearchField size="sm" {...args} />
        </Inline>
        <SearchField isDisabled {...args} />
        <SearchField isReadOnly {...args} />
        <SearchField isFluid {...args} />
        <Div width="10%">
            <SearchField isFluid {...args} />
        </Div>
    </Stack>
);

export const States: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const inputs = canvas.getAllByRole("searchbox");

        inputs.forEach(input => {
            if (input.getAttribute("disabled") !== "") { // don't try and force states on a disabled input
                const inputGroup = input.parentElement;
                const field = inputGroup?.parentElement;

                if (field?.getAttribute("data-chromatic-force-focus")) {
                    input.setAttribute("data-focus-visible", "true");
                    inputGroup?.setAttribute("data-focus-within", "true");
                    field?.removeAttribute("data-chromatic-force-focus");
                }

                if (field?.getAttribute("data-chromatic-force-focus-within")) {
                    input.setAttribute("data-focus-within", "true");
                    field?.removeAttribute("data-chromatic-force-focus");
                }

                if (field?.getAttribute("data-chromatic-force-hover")) {
                    input.setAttribute("data-hovered", "true");
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
