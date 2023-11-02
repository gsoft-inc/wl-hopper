import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./components/List.tsx";
import darkTokens from "./datas/tokens-dark.json";
import tokens from "./datas/tokens.json";

export default {
    title: "Tokens/Colors",
    component: List
} satisfies Meta<typeof List>;

type Story = StoryObj<typeof List>;

export const CoreLight: Story = {
    args: {
        styles: tokens,
        tokenType: "core"
    }
};

export const CoreDark = {
    args: {
        styles: darkTokens,
        tokenType: "core"
    }
};

export const SemanticBackgroundLight: Story = {
    args: {
        styles: tokens,
        tokenType: "background"
    }
};

export const SemanticBackgroundDark = {
    args: {
        styles: darkTokens,
        tokenType: "background"
    }
};

export const SemanticBorderLight: Story = {
    args: {
        styles: tokens,
        tokenType: "border"
    }
};

export const SemanticBorderDark = {
    args: {
        styles: darkTokens,
        tokenType: "border"
    }
};

export const SemanticIconLight: Story = {
    args: {
        styles: tokens,
        tokenType: "icon"
    }
};

export const SemanticIconDark = {
    args: {
        styles: darkTokens,
        tokenType: "icon"
    }
};

export const SemanticTextLight: Story = {
    args: {
        styles: tokens,
        tokenType: "text"
    }
};

export const SemanticTextDark = {
    args: {
        styles: darkTokens,
        tokenType: "text"
    }
};

export const DataVizLight: Story = {
    args: {
        styles: tokens,
        tokenType: "dataViz"
    }
};

export const DataVizDark = {
    args: {
        styles: darkTokens,
        tokenType: "dataViz"
    }
};
