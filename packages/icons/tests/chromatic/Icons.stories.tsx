import * as IconLibrary from "@hopper-ui/icons";
import { LI, UL, type ColorValue, type ResponsiveProp } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";

interface ListProps {
    size?: ResponsiveProp<"sm" | "md" | "lg">;
    color?: ResponsiveProp<ColorValue>;
}

const List = ({ size, color }: ListProps) => {
    const listItems = IconLibrary.iconNames.map(name => {
        const Component = IconLibrary[name];


        return (
            <LI key={name} display="block">
                <Component size={size} color={color} />
            </LI>);
    });

    return (
        <UL display="flex" flexWrap="wrap" alignItems="center" gap="inline-md" margin="core_0" padding="core_0" style={{ listStyle: "none" }}>
            {listItems}
        </UL>
    );
};

const meta: Meta<typeof List> = {
    component: List,
    title: "Icons/Icons"
};

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
        color: "danger"
    }
};
