import { ErrorMessage } from "../src/ErrorMessage.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { SlotProvider } from "@hopper-ui/components";
import { FieldErrorContext } from "react-aria-components";

/**
 * An ErrorMessage displays validation errors for a form field.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/ErrorMessage/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/ErrorMessage",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: ErrorMessage
} satisfies Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * You can display a custom error message.
 */
export const Default: Story = {
    render: () => {
        return <SlotProvider values={[
            [FieldErrorContext, {
                isInvalid: true,
                validationErrors: [] as never[],
                validationDetails: {} as never
            }]
        ]}
        >
            <ErrorMessage>Test Error Message</ErrorMessage>
        </SlotProvider>;
    }
};

/**
 * An ErrorMessage can display multiple validation errors created by a form field
 */
export const FormErrors: Story = {
    render: () => {
        return <SlotProvider values={[
            [FieldErrorContext, {
                isInvalid: true,
                validationErrors: ["This field is required.", "This field is too long."],
                validationDetails: {} as never
            }]
        ]}
        >
            <ErrorMessage />
        </SlotProvider>;
    }
};

/**
 * An ErrorMessage can display an icon
 */
export const Icon: Story = {
    render: () => {
        return <SlotProvider values={[
            [FieldErrorContext, {
                isInvalid: true,
                validationErrors: [] as never[],
                validationDetails: {} as never
            }]
        ]}
        >
            <ErrorMessage showWarningIcon>Test Error Message</ErrorMessage>
        </SlotProvider>;
    }
};
