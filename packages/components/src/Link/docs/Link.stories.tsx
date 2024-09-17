import { useColorSchemeContext } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";
import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";
import { createMemoryRouter, RouterProvider, useNavigate } from "react-router-dom";

import { HopperProvider } from "../../HopperProvider/index.ts";
import { Stack } from "../../layout/index.ts";
import { Text } from "../../typography/Text/index.ts";
import { Link } from "../src/Link.tsx";

import { FrogImage } from "./assets/index.ts";

/**
 * Links allow users to navigate to a different location. They can be presented inline inside a paragraph, as standalone text or as an image.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Link/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Link",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Link,
    args: {
        children: "Learn more",
        href: "#"
    }
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

function GetColorScheme() {
    const colorScheme = useColorSchemeContext();

    return colorScheme;
}

/**
 * A default link
 */
export const Default: Story = {};

/**
 * A link can use a different style.
 */
export const Variants: Story = {
    render: args => (
        <>
            <Link variant="primary" {...args}>Primary</Link>
            <Link variant="secondary" {...args}>Secondary</Link>
        </>
    )
};

/**
 * All links can have a quiet style, without an underline. This style should only be used when the placement and context of the link is explicit enough that a visible underline isn’t necessary.
 */
export const Quiet: Story = {
    render: args => (
        <p>Would you like to <Link {...args}>learn more</Link> about this fine component?</p>
    ),
    args: {
        isQuiet: true
    }
};

/**
 * A text link can contain icons
 */
export const Icon: Story = {
    render: args => (
        <>
            <Link variant="primary" {...args} />
            <Link variant="secondary" {...args} />
        </>
    ),
    args: {
        children: [
            <Text key="1">Learn more</Text>,
            <SparklesIcon key="2" />
        ]
    }
};

/**
 * **Non standard** start icons can be provided to handle special cases. However, think twice before adding *start* icons, *end* icons should be your go to.
 */
export const StartIcon: Story = {
    ...Icon,
    args: {
        ...Icon.args,
        children: [
            <SparklesIcon key="1" slot="start-icon" />,
            <Text key="2">Learn more</Text>
        ]
    }
};

/**
 * A link's content can be a single icon.
 * When using this variant, an accessible name must be provided through aria-label prop. See [WCAG practices](https://www.w3.org/TR/WCAG20-TECHS/ARIA6.html).
 */
export const IconOnly: Story = {
    ...Icon,
    args: {
        ...Icon.args,
        "aria-label": "Clean",
        children: [
            <SparklesIcon key="1" />
        ]
    }
};

/**
 * A link can have a **disabled** style.
 */
export const Disabled: Story = {
    ...Variants,
    args: {
        ...Variants.args,
        isDisabled: true
    }
};

/**
 * A link can vary in size.
 */
export const Size: Story = {
    render: args => (
        <Stack>
            <Text size="xs">
                Would you like to <Link size="inherit" {...args}>learn more</Link> about this fine component?
            </Text>
            <Link size="xs" {...args}>Learn More</Link>
            <Link size="sm" {...args}>Learn More</Link>
            <Link size="md" {...args}>Learn More</Link>
            <Link size="lg" {...args}>Learn More</Link>
            <Link size="xl" {...args}>Learn More</Link>
            <Link size="2xl" {...args}>Learn More</Link>
        </Stack>
    )
};

/**
 * The size can also be inherited
 */
export const InheritSize: Story = {
    render: args => (
        <Text size="lg">
            Would you like to <Link {...args}>learn more</Link> about this fine component?
        </Text>
    )
};

/**
 * An external text link will render by default with `rel="noopener noreferrer"` and `target="_blank"` attribute.
 */
export const External: Story = {
    args: {
        isExternal: true
    }
};

/**
 * When the colors from the variant props are not enough, you can use the color prop to set the color of the link.
 * This removes the hover and focus colors from the link.
 * Use the color props when a link needs to be placed on top of a color background or visual.
 * Make sure that the background and the link color meet the minimum color contrast ratio.
 */
export const StaticColor: Story = {
    decorators: [
        Story => (
            <Div padding="inset-md" backgroundColor="decorative-option3">
                <Story />
            </Div>
        )
    ],
    args: {
        color: "decorative-option3",
        colorHover: "decorative-option3-weak",
        colorFocus: "decorative-option3-weak"
    }
};

/**
 * When a `<Link>` does not have an href prop, it is rendered as a `<span role="link">` instead of an `<a>`. Events will need to be handled in JavaScript with the `onPress` prop.
 *
 * Note: this will not behave like a native link. Browser features like context menus and open in new tab will not apply.
 */
export const NoHref: Story = {
    args: {
        href: undefined,
        onPress: () => {
            window.alert("span clicked");
        }
    }
};

/**
 * A button can be rendered as a react router link when using the href property, and setting the navigate property on the HopperProvider
 */
export const ReactRouterLink: Story = {
    render: props => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();
        const { colorScheme: parentColorScheme } = GetColorScheme();

        return (
            <HopperProvider colorScheme={parentColorScheme} navigate={navigate}>
                <Link {...props} />
            </HopperProvider>
        );
    },
    decorators: [
        Story => {
            const router = createMemoryRouter([{
                path: "/123",
                element: <>Navigated Successfully! <Story /></>
            }, {
                path: "*",
                element: <Story />
            }
            ]);

            return (
                <RouterProvider router={router} />
            );
        }
    ],
    args: {
        children: "Go to next router page",
        href: "/123"
    }
};

/**
 * A link's content can be an image element.
 */
export const Image: Story = {
    args: {
        href: "#",
        borderRadius: "rounded-md",
        overflow: "hidden",
        children: <img src={FrogImage} width="242px" height="156px" alt="Frog" />
    }
};
