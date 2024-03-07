import * as IconLibrary from "../../src/index.ts";
import { LI, UL } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";

type ListProps = IconLibrary.CreatedIconProps;

const List = ({ ...iconProps }: ListProps) => {
    const listItems = IconLibrary.iconNames.map(name => {
        const Component = IconLibrary[name];

        return (
            <LI key={name} display="block">
                <Component {...iconProps} />
            </LI>);
    });

    return (
        <UL display="flex" flexWrap="wrap" alignItems="center" gap="inline-md" margin="core_0" padding="core_0" style={{ listStyle: "none" }}>
            {listItems}
        </UL>
    );
};

const meta = {
    component: List,
    title: "Icons/Icons"
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => {
        return <>
            <h2>Small</h2>
            <List {...args} size="sm" />
            <h2>Medium</h2>
            <List {...args} size="md" />
            <h2>Large</h2>
            <List {...args} size="lg" />
        </>;
    }
};

export const Styles: Story = {
    ...Default,
    args: {
        fill: "danger-active"
    }
};

