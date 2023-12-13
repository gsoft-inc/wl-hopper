import type { Meta, StoryObj } from "@storybook/react";

import Preview from "./Preview";

const meta: Meta<typeof Preview> = {
    title: "Component/Preview",
    component: Preview
};

export default meta;
type Story = StoryObj<typeof Preview>;

export const Default: Story = {
    args: {}
};

export const Color: Story = {
    args: {
        category: "color",
        name: "sapphire-500",
        value: "#5f61c5"
    }
}

export const FontFamily: Story = {
    args: {
        category: "fontFamily",
        name: "font-family-primary",
        value: "ABC Favorit"
    }
}

export const FontSize: Story = {
    args: {
        category: "fontSize",
        name: "font-size-120",
        value: "1rem"
    }
}

export const LineHeight: Story = {
    args: {
        category: "lineHeight",
        name: "line-height-120",
        value: "1.125rem"
    }
}

export const BorderRadius: Story = {
    args: {
        category: "borderRadius",
        name: "border-radius-4",
        value: "1.5rem"
    }
}

export const Size: Story = {
    args: {
        category: "size",
        name: "space-1280",
        value: "8rem"
    }
}
