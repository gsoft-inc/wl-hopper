import { SparklesIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../../buttons/index.ts";
import { Stack } from "../../../layout/index.ts";
import { Text } from "../../../typography/Text/index.ts";
import { DisclosureHeader, DisclosurePanel } from "../../index.ts";
import { Disclosure } from "../../src/Disclosure.tsx";

const meta = {
    title: "Components/Disclosure",
    component: Disclosure,
    args: {
        children: []
    }
} satisfies Meta<typeof Disclosure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    render: args => (
        <Stack>
            <h1>Default</h1>
            <Disclosure {...args}>
                <DisclosureHeader>
                    Disclosure Header
                </DisclosureHeader>
                <DisclosurePanel>
                Disclosure Panel
                </DisclosurePanel>
            </Disclosure>
            <h1>Description</h1>
            <Disclosure {...args}>
                <DisclosureHeader>
                    <Text>Disclosure Header</Text>
                    <Text slot="description">Disclosure Description</Text>
                </DisclosureHeader>
                <DisclosurePanel>
                Disclosure Panel
                </DisclosurePanel>
            </Disclosure>
            <h1>Icon</h1>
            <Disclosure {...args}>
                <DisclosureHeader prefix={<SparklesIcon />}>
                    Disclosure Header
                </DisclosureHeader>
                <DisclosurePanel>
                Disclosure Panel
                </DisclosurePanel>
            </Disclosure>
            <h1>Long</h1>
            <Disclosure {...args}>
                <DisclosureHeader prefix={<SparklesIcon />}>
                    <Text>Shipping, Delivery Times, and Easy Returns Policy Overview</Text>
                    <Text slot="description">Explore our comprehensive shipping options, estimated delivery times for various regions, and our simple, customer-friendly returns process to make sure you feel comfortable with every purchase.</Text>
                </DisclosureHeader>
                <DisclosurePanel>
                We offer free standard shipping on all orders over $50. Orders are typically processed within 1-2 business days, and delivery times vary based on your location. Expedited shipping options are available for an additional fee.

Returns are easy and hassle-free. You have 30 days from the date of delivery to return items for a full refund. Items must be in their original condition and packaging. For further assistance, please contact our support team.
                </DisclosurePanel>
            </Disclosure>
        </Stack>

    )
} satisfies Story;

export const Inline = {
    ...Default,
    args: {
        variant: "inline"
    }
} satisfies Story;

export const CustomHeader = {
    render: args => (
        <Disclosure {...args}>
            <Button slot="trigger">Custom Header</Button>
            <DisclosurePanel>
                Disclosure Panel
            </DisclosurePanel>
        </Disclosure>
    )
} satisfies Story;