import { Div } from "../../src/index.ts";
import type { Meta, StoryObj } from "@storybook/react";

const viewports = [640, 768, 1024, 1280, 1536];

const meta = {
    title: "useStyledSystem",
    parameters: {
        chromatic: {
            delay: 100,
            viewports: viewports
        }
    }
} satisfies Meta;

export default meta;
type UseStyledSystemStory = StoryObj<typeof meta>;

export const EverySingleBreakpoints: UseStyledSystemStory = {
    storyName: "every single breakpoints",
    render: () => (
        <Div
            backgroundColor={{ base: "purple-5", xs: "green-5", sm: "alert-5", md: "purple-5", lg: "neutral-5", xl: "green-5" }}
            color="alias-static-white"
            width={12}
        >
            Space X
        </Div>
    )
};

export const MatchHigherBreakpoint: UseStyledSystemStory = {
    storyName: "match higher breakpoint",
    render: () => (
        <Div
            backgroundColor={{ base: "purple-3", sm: "alert-3" }}
            color="alias-static-white"
            width={12}
        >
        Space X
        </Div>
    )
};

export const MatchBase: UseStyledSystemStory = {
    storyName: "match base",
    render: () => (
        <Div
            backgroundColor={{ base: "purple-8" }}
            color="alias-static-white"
            width={12}
        >
        Space X
        </Div>
    )
};
