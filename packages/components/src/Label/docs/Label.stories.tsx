import { Label } from "../src/Label.tsx";
import { LabelContext } from "../src/LabelContext.ts";
import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-aria-components";

/**
 * A primitive label component matching Hopper's typography type scale.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Label/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta: Meta<typeof Label> = {
    title: "Docs/Label",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Label,
    args: {
        children: "Software built for everyone to do their best work"
    }
};

export default meta;

type LabelStory = StoryObj<typeof meta>;

/**
 * The Label component provides default styling based on it's `size` prop`, but can also receive styling from a parent component
 * when used as a child of a Hopper component.
 */
export const Default: LabelStory = {
};

/**
 * You can alter the size of the label by specifying a `size` prop.
 * The available sizes match Hopper Typography Type Scale (a type scale is a set of [font-size and line-height](https://hopper.workleap.design/tokens/semantic/typography#body) pairs).
 */
export const Size: LabelStory = {
    render: props => (
        <>
            <Label size="xs" {...props} />
            <Label size="sm" {...props} />
            <Label size="md" {...props} />
            <Label size="lg" {...props} />
            <Label size="xl" {...props} />
            <Label size="2xl" {...props} />
        </>
    )
};

/**
 * You can also alter the size to match the parent element's type scale by using the `inherit` size.
 */
export const Inherit: LabelStory = {
    render: props => (
        <div style={{ fontSize: "0.625rem" }}>
            <Label size="inherit" {...props} />
        </div>
    )
};

/**
 * All Hopper Components export a corresponding context that can be used to send props to them from a parent element.
 * You can send any prop or ref via context that you could pass to the corresponding component.
 * The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence
 */
export const AdvancedCustomization: LabelStory = {
    render: props => (
        <Provider values={[
            [LabelContext, { size: "xl" }]
        ]}
        >
            <Label {...props} />
        </Provider>
    )
};
