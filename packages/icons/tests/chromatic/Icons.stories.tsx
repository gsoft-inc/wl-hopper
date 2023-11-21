import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import type { ContextValue } from "react-aria-components";
import type { ResponsiveProp, ColorValue } from "@hopper-ui/styled-system";
import * as IconLibrary from "@hopper-ui/icons";

import "./icons.stories.css";

interface IconLibraryType {
    [key: string]: React.ComponentType<ContextValue<Omit<IconLibrary.IconProps, "src16" | "src24" | "src32" >, SVGSVGElement>>;
}

interface ListProps {
    icons: string[];
    size?: ResponsiveProp<"sm" | "md" | "lg">;
    color?: ResponsiveProp<ColorValue>;
}

const List = ({ icons, size, color }: ListProps) => {
    const listItems = icons.map(name => {
        const Component = (IconLibrary as unknown as IconLibraryType)[name];

        return (
            <li className="icons-list__item" key={name} >
                <Component size={size} color={color} />
            </li>);
    });

    return <ul className="icons-list">{listItems}</ul>;
};

export default {
    component: List,
    title: "Icons/Icons"
} as Meta<typeof List>;

type Story = StoryObj<typeof List>;

export const Sizes: Story = {
    render: args => {
        return <>
            <h2>Small</h2>
            <List {...args} size="sm" />
            <h2>Medium</h2>
            <List {...args} size="md" />
            <h2>Large</h2>
            <List {...args} size="lg" />
        </>;
    },
    args: {
        icons: IconLibrary.iconNames
    }
};

export const Styles: Story = {
    render: args => {
        return <>
            <h2>Small</h2>
            <List {...args} size="sm" />
            <h2>Medium</h2>
            <List {...args} size="md" />
            <h2>Large</h2>
            <List {...args} size="lg" />
        </>;
    },
    args: {
        icons: IconLibrary.iconNames,
        color: "success"
    }
};
