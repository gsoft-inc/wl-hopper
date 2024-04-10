import { LI, UL } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "../../../components/src/layout/index.ts";
import * as IconLibrary from "../../src/index.ts";

type ListProps = IconLibrary.CreatedRichIconProps;

const List = ({ ...iconProps }: ListProps) => {
    const variants = ["decorative-option1", "decorative-option2", "decorative-option3", "decorative-option4", "decorative-option5", "decorative-option6", "decorative-option7", "decorative-option8", "decorative-option9"] as const;

    const allVariantList = variants.map(variant => {
        const listItems = IconLibrary.richIconNames.map(name => {
            const Component = IconLibrary[name];

            return (
                <LI key={name} display="block">
                    <Component variant={variant} {...iconProps} />
                </LI>);
        });

        return (
            <UL key={variant} display="flex" flexWrap="wrap" alignItems="center" gap="inline-md" margin="core_0" padding="core_0" style={{ listStyle: "none" }}>
                {listItems}
            </UL>
        );
    });

    return (
        <Stack>
            {allVariantList}
        </Stack>
    );
};

const meta = {
    component: List,
    title: "Icons/RichIcons"
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => {
        return <>
            <h1>Medium</h1>
            <List {...args} size="md" />
            <h1>Large</h1>
            <List {...args} size="lg" />
            <h1>XLarge</h1>
            <List {...args} size="xl" />
        </>;
    }
};
