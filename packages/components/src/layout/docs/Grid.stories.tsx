import { Div } from "@hopper-ui/styled-system";
import { Grid, fitContent, minmax, repeat } from "../src/Grid.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import type { DivProps } from "@hopper-ui/styled-system";

/**
 * The Grid component is used to create a grid container and provides some shortcuts for the grid properties.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/layout/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Layout/Grid",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Grid
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

function Square(props: DivProps) {
    return <Div backgroundColor="decorative-option1" minHeight="core_640" minWidth="core_640" {...props} />;
}

/**
 * A grid can define explicit sections with areas.
 */
export const Areas: Story = {
    args:{
        areas: ["a  a", "b c"],
        children: [
            <Square key="1" gridArea="a" backgroundColor="decorative-option1" />,
            <Square key="2" gridArea="b" backgroundColor="decorative-option3" />,
            <Square key="3" gridArea="c" backgroundColor="decorative-option4" />
        ]
    }
};

/**
 * A grid can define explicit columns (and rows). A value can be a grid length value or an Hopper spacing scale value.
 */
export const TemplateColumns: Story = {
    args:{
        templateColumns: ["core_800", "core_1280", "1fr"],
        children: [
            <Square key="1" backgroundColor="decorative-option1" />,
            <Square key="2" backgroundColor="decorative-option3" />,
            <Square key="3" backgroundColor="decorative-option4" />
        ]
    }
};

/**
 * A grid can define the size of implicitly created columns. A value can be a grid length value or a Hopper spacing scale value.
 */
export const AutoColumns: Story = {
    args:{
        autoColumns: "1fr",
        children: [
            <Square key="1" gridColumn={2} backgroundColor="decorative-option1" />,
            <Square key="2" backgroundColor="decorative-option3" />,
            <Square key="3" backgroundColor="decorative-option4" />
        ]
    }
};

/**
 * A grid layout can have a gap between his columns and rows. `columnGap` and `rowGap` are also available to specify a gap for a single axis.
 */
export const Gap: Story = {
    args:{
        templateColumns: ["1fr", "1fr"],
        gap: "stack-sm",
        children: [
            <Square key="1" backgroundColor="decorative-option1" />,
            <Square key="2" backgroundColor="decorative-option2" />,
            <Square key="3" backgroundColor="decorative-option3" />,
            <Square key="4" backgroundColor="decorative-option4" />
        ]
    }
};

/**
 * A grid item can span over multiple columns.
 */
export const ColumnSpanning: Story = {
    args:{
        templateColumns: ["1fr", "1fr", "1fr"],
        gap: "stack-sm",
        children: [
            <Square key="1" backgroundColor="decorative-option1" />,
            <Square key="2" backgroundColor="decorative-option2" />,
            <Square key="3" backgroundColor="decorative-option3" />,
            <Square key="4" gridColumnSpan={3} gridRow={2} backgroundColor="decorative-option4" />
        ]
    }
};

/**
 * Grids can be nested.
 */
export const Nesting: Story = {
    args:{
        templateRows: ["1fr", "1fr"],
        gap: "stack-sm",
        children: [
            <Grid key="1" templateColumns={["core_800", "auto"]}>
                <Square backgroundColor="decorative-option1" />
                <Square backgroundColor="decorative-option3" />
            </Grid>,
            <Grid key="2" templateColumns={["auto", "core_960"]}>
                <Square backgroundColor="decorative-option1-strong" />
                <Square backgroundColor="decorative-option3-strong" />
            </Grid>
        ]
    }
};

/**
 * A custom `repeat` function is available to support Hopper spacing scale values. However, if you prefer, you can use the [native CSS repeat function](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat())
 */
export const Repeat: Story = {
    args:{
        templateColumns: repeat("auto-fit", "core_640"),
        autoRows: "core_640",
        gap: "stack-sm",
        children: [
            <Square key="1" backgroundColor="decorative-option1-weak" />,
            <Square key="2" backgroundColor="decorative-option2-weak" />,
            <Square key="3" backgroundColor="decorative-option3-weak" />,
            <Square key="4" backgroundColor="decorative-option4-weak" />,
            <Square key="5" backgroundColor="decorative-option5-weak" />,
            <Square key="6" backgroundColor="decorative-option6-weak" />,
            <Square key="7" backgroundColor="decorative-option7-weak" />,
            <Square key="8" backgroundColor="decorative-option8-weak" />,
            <Square key="9" backgroundColor="decorative-option9-weak" />,
            <Square key="21" backgroundColor="decorative-option1" />,
            <Square key="22" backgroundColor="decorative-option2" />,
            <Square key="23" backgroundColor="decorative-option3" />,
            <Square key="24" backgroundColor="decorative-option4" />,
            <Square key="25" backgroundColor="decorative-option5" />,
            <Square key="26" backgroundColor="decorative-option6" />,
            <Square key="27" backgroundColor="decorative-option7" />,
            <Square key="28" backgroundColor="decorative-option8" />,
            <Square key="29" backgroundColor="decorative-option9" />,
            <Square key="31" backgroundColor="decorative-option1-strong" />,
            <Square key="32" backgroundColor="decorative-option2-strong" />,
            <Square key="33" backgroundColor="decorative-option3-strong" />,
            <Square key="34" backgroundColor="decorative-option4-strong" />,
            <Square key="35" backgroundColor="decorative-option5-strong" />,
            <Square key="36" backgroundColor="decorative-option6-strong" />,
            <Square key="37" backgroundColor="decorative-option7-strong" />,
            <Square key="38" backgroundColor="decorative-option8-strong" />,
            <Square key="39" backgroundColor="decorative-option9-strong" />
        ]
    }
};

/**
 * A custom `minmax` function is available to support Hopper spacing scale values. However, if you prefer, you can use the [native CSS minmax function](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax())
 */
export const Minmax: Story = {
    args:{
        templateColumns: [minmax("core_800", "1fr"), "core_960", minmax("core_800", "1fr")],
        gap: "stack-sm",
        children: [
            <Square key="1" backgroundColor="decorative-option1" />,
            <Square key="2" backgroundColor="decorative-option2" />,
            <Square key="3" backgroundColor="decorative-option3" />
        ]
    }
};

/**
 * A custom `fit-content` function is available to support Hopper spacing scale values. However, if you prefer, you can use the [native CSS fit-content function](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content)
 */
export const FitContent: Story = {
    args:{
        alignItems:"center",
        templateColumns: [fitContent("core_800"), fitContent("core_800"), "1fr"],
        gap: "stack-sm",
        children: [
            <Square key="1" padding="inset-sm" backgroundColor="decorative-option1" />,
            <Square key="2" padding="inset-sm" backgroundColor="decorative-option2" />,
            <Square key="3" padding="inset-sm" backgroundColor="decorative-option3" />
        ]
    }
};


