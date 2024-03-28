import { ErrorMessage } from "../../src/ErrorMessage.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { SlotProvider } from "@hopper-ui/components";
import { FieldErrorContext } from "react-aria-components";

const meta = {
    title: "Components/ErrorMessage",
    component: ErrorMessage,
    args: {
        children: "This field is required"
    }
} satisfies Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: props => (
        <SlotProvider values={[
            [FieldErrorContext, {
                isInvalid: true,
                validationErrors: ["This field is required.", "This field is too long."],
                validationDetails: {} as never
            }]
        ]}
        >
            <ErrorMessage />
            <ErrorMessage hideWarningIcon {...props} />
        </SlotProvider>
    )
};

export const Styling: Story = {
    render: props => (
        <SlotProvider values={[
            [FieldErrorContext, {
                isInvalid: true,
                validationErrors: [] as never[],
                validationDetails: {} as never
            }]
        ]}
        >
            <ErrorMessage border="primary-strong" {...props} />
            <ErrorMessage className="bg-blue" {...props} />
            <ErrorMessage style={{ backgroundColor: "blue" }} {...props} />
        </SlotProvider>
    )
};

