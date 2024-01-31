import { Button } from "@hopper-ui/components";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it.
 *
 * View repository: https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/HopperProvider/src
 *
 * View ARIA pattern: https://www.w3.org/WAI/ARIA/apg/patterns/button/
 *
 * View package: https://www.npmjs.com/package/@hopper-ui/components
 */
const meta: Meta<typeof Button> = {
    title: "Docs/Buttons/Button",
    tags: ["autodocs"],
    component: Button,
    args: {
        children: "Click me!"
    }
};

export default meta;

type HopperProviderStory = StoryObj<typeof meta>;

/**
 * A default button.
 */
export const Default: HopperProviderStory = {
};

/**
 * Primary
 *
 * Used to indicate the main action of a page or a section. This is usually the action we want the user to take.
 *
 * In a button group, there can be only 1 primary button. This will be reserved for the suggested action.
 */
export const Primary: HopperProviderStory = {
};
