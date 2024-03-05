import { Div } from "@hopper-ui/styled-system";
import { Grid, fitContent, minmax, repeat } from "../../src/Grid.tsx";
import { Inline } from "../../src/Inline.tsx";
import { Stack } from "../../src/Stack.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const viewports = [640, 768, 1024, 1280, 1440];

const meta = {
    title: "Components/Grid",
    component: Grid,
    parameters:{
        chromatic: {
            viewports: viewports
        }
    }
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Grid>
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
            <Div backgroundColor="core_sapphire-500">Delta</Div>
            <Div backgroundColor="core_sapphire-500">Echo</Div>
            <Div backgroundColor="core_sapphire-500">Foxtrot</Div>
        </Grid>
    )
};

export const GridInline: Story = {
    storyName: "inline",
    render: () => (
        <>
            <Grid inline>
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
            </Grid>
            <Grid inline>
                <Div backgroundColor="core_sapphire-900">Delta</Div>
                <Div backgroundColor="core_sapphire-900">Echo</Div>
                <Div backgroundColor="core_sapphire-900">Foxtrot</Div>
            </Grid>
        </>
    )
};

export const Nesting: Story = {
    storyName: "nesting",
    render: () => (
        <Grid templateColumns={["1fr", "1fr"]} gap="core_160">
            <Grid UNSAFE_templateColumns={["8rem", "auto"]}>
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div backgroundColor="core_sapphire-600">Bravo</Div>
            </Grid>
            <Grid UNSAFE_templateColumns={["auto", "4rem"]}>
                <Div backgroundColor="core_sapphire-800">Delta</Div>
                <Div backgroundColor="core_sapphire-900">Echo</Div>
            </Grid>
        </Grid>
    )
};

export const Gap: Story = {
    storyName: "gap",
    render: () => (
        <Grid gap="core_160">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
            <Div backgroundColor="core_sapphire-500">Delta</Div>
            <Div backgroundColor="core_sapphire-500">Echo</Div>
            <Div backgroundColor="core_sapphire-500">Foxtrot</Div>
        </Grid>
    )
};

export const ColumnGap: Story = {
    storyName: "column gap",
    render: () => (
        <Grid columnGap="core_160" autoFlow="column">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
            <Div backgroundColor="core_sapphire-500">Delta</Div>
            <Div backgroundColor="core_sapphire-500">Echo</Div>
            <Div backgroundColor="core_sapphire-500">Foxtrot</Div>
        </Grid>
    )
};

export const rowGap: Story = {
    storyName: "row gap",
    render: () => (
        <Grid rowGap="core_160">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
            <Div backgroundColor="core_sapphire-500">Delta</Div>
            <Div backgroundColor="core_sapphire-500">Echo</Div>
            <Div backgroundColor="core_sapphire-500">Foxtrot</Div>
        </Grid>
    )
};

export const TemplateColumns: Story = {
    storyName: "template columns",
    render: () => (
        <Stack>
            <Grid UNSAFE_templateColumns="65px 50px 65px" gap="core_160">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
                <Div backgroundColor="core_sapphire-500">Delta</Div>
                <Div backgroundColor="core_sapphire-500">Echo</Div>
                <Div backgroundColor="core_sapphire-500">Foxtrot</Div>
            </Grid>
            <Grid UNSAFE_templateColumns={["8rem", "4.5rem", "8rem"]} gap="core_160">
                <Div backgroundColor="core_sapphire-700">Alpha</Div>
                <Div backgroundColor="core_sapphire-700">Bravo</Div>
                <Div backgroundColor="core_sapphire-700">Charlie</Div>
                <Div backgroundColor="core_sapphire-700">Delta</Div>
                <Div backgroundColor="core_sapphire-700">Echo</Div>
                <Div backgroundColor="core_sapphire-700">Foxtrot</Div>
            </Grid>
            <Grid UNSAFE_templateColumns={{ md: ["8rem", "4.5rem"], lg: "150px 100px 150px" }} gap="core_160">
                <Div backgroundColor="core_sapphire-900">Alpha</Div>
                <Div backgroundColor="core_sapphire-900">Bravo</Div>
                <Div backgroundColor="core_sapphire-900">Charlie</Div>
                <Div backgroundColor="core_sapphire-900">Delta</Div>
                <Div backgroundColor="core_sapphire-900">Echo</Div>
                <Div backgroundColor="core_sapphire-900">Foxtrot</Div>
            </Grid>
        </Stack>
    )
};

export const TemplateRows: Story = {
    storyName: "template rows",
    render: () => (
        <Inline>
            <Grid UNSAFE_templateRows="200px 100px 200px" gap="core_160">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
            </Grid>
            <Grid UNSAFE_templateRows={["8rem", "3.5rem", "8rem"]} gap="core_160">
                <Div backgroundColor="core_sapphire-700">Alpha</Div>
                <Div backgroundColor="core_sapphire-700">Bravo</Div>
                <Div backgroundColor="core_sapphire-700">Charlie</Div>
            </Grid>
            <Grid UNSAFE_templateRows={{ md: ["8rem", "3.5rem", "8rem"], lg: "200px 100px 200px" }} gap="core_160">
                <Div backgroundColor="core_sapphire-900">Alpha</Div>
                <Div backgroundColor="core_sapphire-900">Bravo</Div>
                <Div backgroundColor="core_sapphire-900">Charlie</Div>
            </Grid>
        </Inline>
    )
};

export const Areas: Story = {
    storyName: "areas",
    render: () => (
        <Stack>
            <Grid areas={["a a", "b c", "d e"]} gap="core_160">
                <Div gridArea="a" backgroundColor="core_sapphire-100">Alpha</Div>
                <Div gridArea="b" backgroundColor="core_sapphire-200">Bravo</Div>
                <Div gridArea="c" backgroundColor="core_sapphire-300">Charlie</Div>
                <Div gridArea="d" backgroundColor="core_sapphire-400">Delta</Div>
                <Div gridArea="e" backgroundColor="core_sapphire-500">Echo</Div>
            </Grid>
            <Grid areas={{ md: ["a", "b", "c", "d", "e"], lg: ["a a", "b c", "d e"] }} gap="core_160">
                <Div gridArea="a" backgroundColor="core_sapphire-600">Alpha</Div>
                <Div gridArea="b" backgroundColor="core_sapphire-700">Bravo</Div>
                <Div gridArea="c" backgroundColor="core_sapphire-800">Charlie</Div>
                <Div gridArea="d" backgroundColor="core_sapphire-900">Delta</Div>
                <Div gridArea="e" backgroundColor="core_sapphire-900">Echo</Div>
            </Grid>
        </Stack>
    )
};

export const AutoFlow: Story = {
    storyName: "auto flow",
    render: () => (
        <Stack>
            <Grid autoFlow="column" gap="core_160">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
                <Div backgroundColor="core_sapphire-500">Delta</Div>
                <Div backgroundColor="core_sapphire-500">Echo</Div>
            </Grid>
            <Grid autoFlow="row" gap="core_160">
                <Div backgroundColor="core_sapphire-700">Alpha</Div>
                <Div backgroundColor="core_sapphire-700">Bravo</Div>
                <Div backgroundColor="core_sapphire-700">Charlie</Div>
                <Div backgroundColor="core_sapphire-700">Delta</Div>
                <Div backgroundColor="core_sapphire-700">Echo</Div>
            </Grid>
            <Grid autoFlow={{ md: "row", lg: "column" }} gap="core_160">
                <Div backgroundColor="core_sapphire-900">Alpha</Div>
                <Div backgroundColor="core_sapphire-900">Bravo</Div>
                <Div backgroundColor="core_sapphire-900">Charlie</Div>
                <Div backgroundColor="core_sapphire-900">Delta</Div>
                <Div backgroundColor="core_sapphire-900">Echo</Div>
            </Grid>
        </Stack>
    )
};

export const AutoColumns: Story = {
    storyName: "auto columns",
    render: () => (
        <Stack>
            <Grid UNSAFE_autoColumns="8rem" gap="core_160">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div gridColumn={2} backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
                <Div backgroundColor="core_sapphire-500">Delta</Div>
                <Div backgroundColor="core_sapphire-500">Echo</Div>
            </Grid>
            <Grid UNSAFE_autoColumns="200px" gap="core_160">
                <Div backgroundColor="core_sapphire-700">Alpha</Div>
                <Div gridColumn={2} backgroundColor="core_sapphire-700">Bravo</Div>
                <Div backgroundColor="core_sapphire-700">Charlie</Div>
                <Div backgroundColor="core_sapphire-700">Delta</Div>
                <Div backgroundColor="core_sapphire-700">Echo</Div>
            </Grid>
            <Grid UNSAFE_autoColumns={{ md: "8rem", lg: "200px" }} gap="core_160">
                <Div backgroundColor="core_sapphire-900">Alpha</Div>
                <Div gridColumn={2} backgroundColor="core_sapphire-900">Bravo</Div>
                <Div backgroundColor="core_sapphire-900">Charlie</Div>
                <Div backgroundColor="core_sapphire-900">Delta</Div>
                <Div backgroundColor="core_sapphire-900">Echo</Div>
            </Grid>
        </Stack>
    )
};

export const AutoRows: Story = {
    storyName: "auto rows",
    render: () => (
        <Stack>
            <Grid UNSAFE_autoRows="3.5rem" gap="core_160">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div gridColumn={3} backgroundColor="core_sapphire-500">Bravo</Div>
                <Div gridColumnSpan={3} backgroundColor="core_sapphire-500">Charlie</Div>
                <Div backgroundColor="core_sapphire-500">Delta</Div>
                <Div backgroundColor="core_sapphire-500">Echo</Div>
            </Grid>
            <Grid UNSAFE_autoRows="core_240" gap="core_160">
                <Div backgroundColor="core_sapphire-700">Alpha</Div>
                <Div gridColumn={3} backgroundColor="core_sapphire-700">Bravo</Div>
                <Div gridColumnSpan={3} backgroundColor="core_sapphire-700">Charlie</Div>
                <Div backgroundColor="core_sapphire-700">Delta</Div>
                <Div backgroundColor="core_sapphire-700">Echo</Div>
            </Grid>
            <Grid UNSAFE_autoRows={{ md: "core_240", lg: "3.5rem" }} gap="core_160">
                <Div backgroundColor="core_sapphire-900">Alpha</Div>
                <Div gridColumn={3} backgroundColor="core_sapphire-900">Bravo</Div>
                <Div gridColumnSpan={3} backgroundColor="core_sapphire-900">Charlie</Div>
                <Div backgroundColor="core_sapphire-900">Delta</Div>
                <Div backgroundColor="core_sapphire-900">Echo</Div>
            </Grid>
        </Stack>
    )
};

export const ColumnSpan: Story = {
    storyName: "column span",
    render: () => (
        <Stack>
            <Grid templateColumns={["1fr", "1fr", "1fr"]} gap="core_160">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div gridColumnSpan={2} backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
                <Div backgroundColor="core_sapphire-500">Delta</Div>
                <Div backgroundColor="core_sapphire-500">Echo</Div>
                <Div backgroundColor="core_sapphire-500">Foxtrot</Div>
            </Grid>
            <Grid templateColumns={["1fr", "1fr", "1fr"]} gap="core_160">
                <Div backgroundColor="core_sapphire-900">Alpha</Div>
                <Div gridColumnSpan={{ md: undefined, lg: 2 }} backgroundColor="core_sapphire-900">Bravo</Div>
                <Div backgroundColor="core_sapphire-900">Charlie</Div>
                <Div backgroundColor="core_sapphire-900">Delta</Div>
                <Div backgroundColor="core_sapphire-900">Echo</Div>
                <Div backgroundColor="core_sapphire-900">Foxtrot</Div>
            </Grid>
        </Stack>
    )
};

export const AlignContentStart: Story = {
    storyName: "align content start",
    render: () => (
        <Grid alignContent="start" gap="core_160" UNSAFE_height="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const AlignContentCenter: Story = {
    storyName: "align content center",
    render: () => (
        <Grid alignContent="center" gap="core_160" UNSAFE_height="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const AlignContentSpaceBetween: Story = {
    storyName: "align content space-between",
    render: () => (
        <Grid alignContent="space-between" gap="core_160" UNSAFE_height="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const AlignContentSpaceAround: Story = {
    storyName: "align content space-around",
    render: () => (
        <Grid alignContent="space-around" gap="core_160" UNSAFE_height="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const AlignItemsStart: Story = {
    storyName: "align items start",
    render: () => (
        <Grid alignItems="start" gap="core_160" UNSAFE_height="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const AlignItemsCenter: Story = {
    storyName: "align items center",
    render: () => (
        <Grid alignItems="center" gap="core_160" UNSAFE_height="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const AlignItemsEnd: Story = {
    storyName: "align items end",
    render: () => (
        <Grid alignItems="end" gap="core_160" UNSAFE_height="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const JustifyContentStart: Story = {
    storyName: "justify content start",
    render: () => (
        <Grid justifyContent="start" gap="core_160" UNSAFE_width="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div gridColumn={2} backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const JustifyContentCenter: Story = {
    storyName: "justify content center",
    render: () => (
        <Grid justifyContent="center" gap="core_160" UNSAFE_width="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div gridColumn={2} backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const JustifyContentEnd: Story = {
    storyName: "justify content end",
    render: () => (
        <Grid justifyContent="end" gap="core_160" UNSAFE_width="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div gridColumn={2} backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const JustifyContentLeft: Story = {
    storyName: "justify content left",
    render: () => (
        <Grid justifyContent="left" gap="core_160" UNSAFE_width="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div gridColumn={2} backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const JustifyContentRight: Story = {
    storyName: "justify content right",
    render: () => (
        <Grid justifyContent="right" gap="core_160" UNSAFE_width="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div gridColumn={2} backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const JustifyContentSpaceBetween: Story = {
    storyName: "justify content space between",
    render: () => (
        <Grid justifyContent="space-between" gap="core_160" UNSAFE_width="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div gridColumn={2} backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const JustifyContentSpaceAround: Story = {
    storyName: "justify content space around",
    render: () => (
        <Grid justifyContent="space-around" gap="core_160" UNSAFE_width="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div gridColumn={2} backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const JustifyContentSpaceEvenly: Story = {
    storyName: "justify content space evenly",
    render: () => (
        <Grid justifyContent="space-evenly" gap="core_160" UNSAFE_width="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div gridColumn={2} backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const JustifyItemsStart: Story = {
    storyName: "justify items start",
    render: () => (
        <Grid justifyItems="start" gap="core_160" UNSAFE_width="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div gridColumn={2} backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const JustifyItemsCenter: Story = {
    storyName: "justify items center",
    render: () => (
        <Grid justifyItems="center" gap="core_160" UNSAFE_width="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div gridColumn={2} backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const JustifyItemsEnd: Story = {
    storyName: "justify items end",
    render: () => (
        <Grid justifyItems="end" gap="core_160" UNSAFE_width="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div gridColumn={2} backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const JustifyItemsLeft: Story = {
    storyName: "justify items left",
    render: () => (
        <Grid justifyItems="left" gap="core_160" UNSAFE_width="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div gridColumn={2} backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const JustifyItemsRight: Story = {
    storyName: "justify items right",
    render: () => (
        <Grid justifyItems="right" gap="core_160" UNSAFE_width="300px">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div gridColumn={2} backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Grid>
    )
};

export const RowSpan: Story = {
    storyName: "row span",
    render: () => (
        <Stack>
            <Grid templateColumns={["1fr", "1fr", "1fr"]} gap="core_160">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div gridRowSpan={2} backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
                <Div backgroundColor="core_sapphire-500">Delta</Div>
                <Div backgroundColor="core_sapphire-500">Echo</Div>
                <Div backgroundColor="core_sapphire-500">Foxtrot</Div>
            </Grid>
            <Grid templateColumns={["1fr", "1fr", "1fr"]} gap="core_160">
                <Div backgroundColor="core_sapphire-900">Alpha</Div>
                <Div gridRowSpan={{ lg: 2 }} backgroundColor="core_sapphire-900">Bravo</Div>
                <Div backgroundColor="core_sapphire-900">Charlie</Div>
                <Div backgroundColor="core_sapphire-900">Delta</Div>
                <Div backgroundColor="core_sapphire-900">Echo</Div>
                <Div backgroundColor="core_sapphire-900">Foxtrot</Div>
            </Grid>
        </Stack>
    )
};

export const Repeat: Story = {
    storyName: "repeat",
    render: () => (
        <Stack>
            <Grid templateColumns={repeat("auto-fit", "4.5rem")} gap="core_160">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
                <Div backgroundColor="core_sapphire-500">Delta</Div>
                <Div backgroundColor="core_sapphire-500">Echo</Div>
                <Div backgroundColor="core_sapphire-500">Foxtrot</Div>
            </Grid>
            <Grid templateColumns={repeat("auto-fit", "4.5rem")} gap="core_160">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
                <Div backgroundColor="core_sapphire-500">Delta</Div>
                <Div backgroundColor="core_sapphire-500">Echo</Div>
                <Div backgroundColor="core_sapphire-500">Foxtrot</Div>
            </Grid>
        </Stack>
    )
};

export const Minmax: Story = {
    storyName: "minmax",
    render: () => (
        <Stack>
            <Grid UNSAFE_templateColumns={[minmax("8rem", "auto"), "4.5rem", "4.5rem"]} gap="core_160">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
                <Div backgroundColor="core_sapphire-500">Delta</Div>
                <Div backgroundColor="core_sapphire-500">Echo</Div>
                <Div backgroundColor="core_sapphire-500">Foxtrot</Div>
            </Grid>
            <Grid UNSAFE_templateColumns={[minmax("600px", "auto"), "4.5rem", "4.5rem"]} gap="core_160">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
                <Div backgroundColor="core_sapphire-500">Delta</Div>
                <Div backgroundColor="core_sapphire-500">Echo</Div>
                <Div backgroundColor="core_sapphire-500">Foxtrot</Div>
            </Grid>
        </Stack>
    )
};

export const FitContent: Story = {
    storyName: "fit-content",
    render: () => (
        <Stack>
            <Grid UNSAFE_templateColumns={[fitContent("8rem"), "4.5rem", "4.5rem"]} gap="core_160">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
                <Div backgroundColor="core_sapphire-500">Delta</Div>
                <Div backgroundColor="core_sapphire-500">Echo</Div>
                <Div backgroundColor="core_sapphire-500">Foxtrot</Div>
            </Grid>
            <Grid UNSAFE_templateColumns={[fitContent("8rem"), "4.5rem", "4.5rem"]} gap="core_160">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
                <Div backgroundColor="core_sapphire-500">Delta</Div>
                <Div backgroundColor="core_sapphire-500">Echo</Div>
                <Div backgroundColor="core_sapphire-500">Foxtrot</Div>
            </Grid>
        </Stack>
    )
};
