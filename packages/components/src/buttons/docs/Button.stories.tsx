import { SparklesIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { RouterProvider, createMemoryRouter, useNavigate } from "react-router-dom";

import { HopperProvider } from "../../HopperProvider/index.ts";
import { Inline, Stack } from "../../layout/index.ts";
import { Text } from "../../typography/Text/index.ts";
import { SlotProvider } from "../../utils/index.ts";
import { Button } from "../src/Button.tsx";
import { ButtonContext } from "../src/ButtonContext.ts";

/**
 * Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Buttons/src)
 * -
 * [View ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Buttons/Button",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Button,
    args: {
        children: "Save"
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A default button.
 */
export const Default: Story = {};

/**
 * A button can use different variants.
 *
 * **Primary**: For the principal call to action on the page. Primary buttons should only appear once per screen (not including the application header, modal or side panel).
 *
 * **Secondary**: For secondary actions on each page. Secondary buttons can be used in conjunction with a primary button or on its own. Paired with a Primary button, the secondary button usually performs the negative action of the set, such as “Cancel.”
 *
 * **Upsell**: For upsell actions that relates to upgrading an account or a plan. Use the upsell button to distinguish from an existing primary button. In some case a primary button can be used in its place when the general context of the page is about upselling.
 *
 * **Danger**: For actions that could have destructive effects on the user’s data.
 *
 * **Ghost-[primary|secondary|danger]**: For less prominent, and sometimes independent, actions. Ghost buttons can be used in isolation or paired with a primary button when there are multiple calls to action. Ghost buttons can also be used for sub-tasks on a
 * page where a primary button for the main and final action is present.
 */
export const Variants: Story = {
    render: props => (
        <Inline>
            <Button variant="primary" {...props} />
            <Button variant="secondary" {...props} />
            <Button variant="upsell" {...props} />
            <Button variant="danger" {...props} />
            <Button variant="ghost-primary" {...props} />
            <Button variant="ghost-secondary" {...props} />
            <Button variant="ghost-danger" {...props} />
        </Inline>
    )
};

/**
 * A button can vary in size.
 */
export const Size: Story = {
    render: props => (
        <Stack>
            <Inline>
                <Button size="sm" variant="primary" {...props} />
                <Button size="sm" variant="secondary" {...props} />
                <Button size="sm" variant="upsell" {...props} />
                <Button size="sm" variant="danger" {...props} />
                <Button size="sm" variant="ghost-primary" {...props} />
                <Button size="sm" variant="ghost-secondary" {...props} />
                <Button size="sm" variant="ghost-danger" {...props} />
            </Inline>
            <Inline>
                <Button size="md" variant="primary" {...props} />
                <Button size="md" variant="secondary" {...props} />
                <Button size="md" variant="upsell" {...props} />
                <Button size="md" variant="danger" {...props} />
                <Button size="md" variant="ghost-primary" {...props} />
                <Button size="md" variant="ghost-secondary" {...props} />
                <Button size="md" variant="ghost-danger" {...props} />
            </Inline>
        </Stack>
    )
};

/**
 * A button can be disabled.
 */
export const Disabled: Story = {
    ...Variants,
    args: {
        isDisabled: true
    }
};

/**
 * A button can be expanded to full width to fill its parent container.
 */
export const Fluid: Story = {
    render: props => (
        <div style={{ display: "flex", gap: "1.25rem", flexDirection: "column" }}>
            <Button {...props}>
                Save
            </Button>
            <Button {...props}>
                <SparklesIcon />
                <Text>Save</Text>
            </Button>
            <Button {...props}>
                <Text>Save</Text>
                <SparklesIcon slot="end-icon" />
            </Button>
            <Button {...props}>
                <SparklesIcon />
                <Text>Save</Text>
                <SparklesIcon slot="end-icon" />
            </Button>
        </div>
    ),
    args: {
        isFluid: true
    }
};

/**
 * A button can contain only an icons.
 */
export const IconOnly: Story = {
    ...Size,
    args: {
        "aria-label": "Clean",
        children: [
            <SparklesIcon key="1" />
        ]
    }
};

/**
 * A button can contain icons.
 */
export const Icon: Story = {
    ...Size,
    args: {
        children: [
            <SparklesIcon key="1" />,
            <Text key="2">Save</Text>
        ]
    }
};

/**
 * Non standard end icons can be provided to handle special cases. However, think twice before adding end icons, start icons should be your go to.
 */
export const EndIcon: Story = {
    ...Size,
    args: {
        children: [
            <SparklesIcon key="1" slot="end-icon" />,
            <Text key="2">Save</Text>
        ]
    }
};

/**
 * Non standard end icons with start icons can be provided to handle special cases. However, think twice before adding end icons, start icons should be your go to.
 */
export const BothIcon: Story = {
    ...Size,
    args: {
        children: [
            <SparklesIcon key="1" />,
            <Text key="2">Save</Text>,
            <SparklesIcon key="3" slot="end-icon" />
        ]
    }
};

/**
 * A button can show a loading indicator. The button text is hidden but the button maintains the width that it would have if the text were visible.
 */
export const Loading: Story = {
    ...Variants,
    args: {
        isLoading: true
    }
};

/**
 * A button can be rendered as a link by using the href property.
 */
export const AsLink: Story = {
    args: {
        children: "Go to google",
        href: "https://www.google.com"
    }
};

/**
 * A button can be rendered as a react router link when using the href property, and setting the navigate property on the HopperProvider
 */
export const ReactRouterLink: Story = {
    render: props => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();

        return (
            <HopperProvider colorScheme="light" navigate={navigate}>
                <Button {...props} />
            </HopperProvider>
        );
    },
    decorators: [
        Story => {
            const router = createMemoryRouter([{
                path: "/123",
                element: <>Navigated Successfully! <Story /></>
            }, {
                path: "*",
                element: <Story />
            }
            ]);

            return (
                <RouterProvider router={router} />
            );
        }
    ],
    args: {
        children: "Go to next router page",
        href: "/123"
    }
};

/**
 * All Hopper Components export a corresponding context that can be used to send props to them from a parent element.
 * You can send any prop or ref via context that you could pass to the corresponding component.
 * The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence
 */
export const AdvancedCustomization: Story = {

    render: props => (
        <SlotProvider values={[
            [ButtonContext, { variant: "secondary", size: "sm" }]
        ]}
        >
            <Button {...props} />
        </SlotProvider>
    )
};
