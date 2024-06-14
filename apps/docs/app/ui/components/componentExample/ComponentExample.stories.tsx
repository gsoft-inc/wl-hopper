import type { Meta, StoryObj } from "@storybook/react";

import { mockGetComponentCode } from "@/app/lib/getComponentCode.mock.ts";
import ComponentExample from "./ComponentExample.tsx";

const meta = {
    title: "components/ComponentExample",
    component: ComponentExample
} satisfies Meta<typeof ComponentExample>;

export default meta;
type Story = StoryObj<typeof meta>;

const code = await mockGetComponentCode("import { Button } from \"@headless/button\"");

export const Default: Story = {
    args: {
        src: "buttons/docs/preview",
        code
    }
};

export const Code: Story = {
    args: {
        src: "buttons/docs/preview",
        type: "code",
        code
    }
};

export const Preview: Story = {
    args: {
        src: "buttons/docs/preview",
        type: "preview"
    }
};

export const Close: Story = {
    args: {
        src: "buttons/docs/preview",
        code,
        isOpen: false
    }
};

