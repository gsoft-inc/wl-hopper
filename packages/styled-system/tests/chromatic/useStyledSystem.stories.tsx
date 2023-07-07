import { Div, type DivProps } from "../../src/index.ts";
import type { Meta, StoryObj } from "@storybook/react";

const viewports = [640, 768, 1024, 1280, 1536];

const meta = {
    title: "useStyledSystem",
    component: Div as any,
    parameters: {
        chromatic: {
            delay: 100,
            viewports: viewports
        },
        controls: { hideNoControlsWarning: true }
    },
    args: {
        color: "alias-static-white",
        width: 12,
        children: "Space X"
    }
} satisfies Meta<DivProps>;

export default meta;
type UseStyledSystemStory = StoryObj<typeof meta>;

export const EverySingleBreakpoints: UseStyledSystemStory = {
    name: "every single breakpoints",
    args: {
        backgroundColor: { base: "purple-5", xs: "green-5", sm: "alert-5", md: "purple-5", lg: "neutral-5", xl: "green-5" }
    }
};

export const MatchHigherBreakpoint: UseStyledSystemStory = {
    name: "match higher breakpoint",
    args: {
        backgroundColor: { base: "purple-3", sm: "alert-3" }
    }
};

export const MatchBase: UseStyledSystemStory = {
    name: "match base",
    args: {
        backgroundColor: { base: "purple-8" }
    }
};
