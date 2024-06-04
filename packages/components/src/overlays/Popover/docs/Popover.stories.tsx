import { SlotProvider } from "@hopper-ui/components";
import { InfoIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { type ReactNode, useRef, useState } from "react";

import { Button, ButtonGroup, ButtonContext } from "../../../buttons/index.ts";
import { Footer, Inline } from "../../../layout/index.ts";
import { Link } from "../../../Link/index.ts";
import { Text } from "../../../typography/index.ts";
import { Popover, PopoverTrigger } from "../src/Popover.tsx";
import { PopoverContext } from "../src/PopoverContext.ts";

/**
 * Popovers are small overlays that open on demand.
 * They let users access additional content and actions without cluttering the page.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Popover/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Popover",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Popover,
    render: props =>
        <PopoverTrigger>
            <Button aria-label="information" variant="secondary"><InfoIcon /></Button>
            <Popover {...props} />
        </PopoverTrigger>
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A Popover can contain title, content, and a footer.
 */
export const Default: Story = {
    args: {
        children: <>
            <Text>Title</Text>
            <p>Popover content</p>
            <Footer>
                <Link href="#">Tell me more</Link>
            </Footer>
        </>
    }
};

/**
 * A popover can have a single button:
 */
export const Buttons: Story = {
    args: {
        children: <>
            <Text>Title</Text>
            <p>Popover content</p>
            <Button>Go it</Button>
        </>
    }
};

/**
 * A popover can have a group of buttons:
 */
export const MutlipleButton: Story = {
    args: {
        children: <>
            <Text>Title</Text>
            <p>Popover content</p>
            <ButtonGroup>
                <Button variant="secondary">Next</Button>
                <Button>Got it</Button>
            </ButtonGroup>
        </>
    }
};

/**
 * A popover can have footer text.
 */
export const FooterText: Story = {
    args: {
        children: <>
            <Text>Title</Text>
            <p>Popover content</p>
            <Footer>
                All right reserved.
            </Footer>
            <Button>Got it</Button>
        </>
    }
};

/**
 * A popover can open at different positions.
 */
export const Placement: Story = {
    args: {
        placement: "right",
        children: <>
            <Text>Title</Text>
            <p>Popover content</p>
        </>
    }
};

/**
 * A popover will not open when its trigger is disabled.
 */
export const DisabledTrigger: Story = {
    render: () =>
        <PopoverTrigger>
            <Button isDisabled variant="secondary" aria-label="information"><InfoIcon /></Button>
            <Popover>
                <Text>Title</Text>
                <p>Popover content</p>
            </Popover>
        </PopoverTrigger>
};

const HighlightedTrigger = ({ children }: { children: ReactNode }) => {
    const triggerRef = useRef(null);
    const [isOpen, setOpen] = useState(false);

    return (
        <SlotProvider values={[
            [PopoverContext, { isOpen, onOpenChange: setOpen }],
            [ButtonContext, {
                onPress: () => setOpen(!isOpen),
                ref: triggerRef,
                variant: isOpen ? "primary" : "secondary"
            }]
        ]}
        >
            {children}
        </SlotProvider>
    );
};

/**
 * A popover's isOpen state or close function can be retrieved from PopoverContext and ButtonContext.
 **/
export const Context: Story = {
    render: () =>
        <HighlightedTrigger>
            <PopoverTrigger>
                <Button aria-label="information"><InfoIcon /></Button>
                <Popover>
                    <Text>Title</Text>
                    <p>Popover content</p>
                </Popover>
            </PopoverTrigger>
        </HighlightedTrigger>
};

const ControlledPopover = () => {
    const triggerRef = useRef(null);
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Inline>

                <Button
                    onPress={() => setOpen(!isOpen)}
                    variant="secondary"
                    aria-label="information"
                >
                    <InfoIcon />
                </Button>
                <span ref={triggerRef}>Popover will be positioned relative to me</span>
            </Inline>
            <Popover triggerRef={triggerRef} isOpen={isOpen} onOpenChange={setOpen}>
                <Text>Title</Text>
                <p>Popover content</p>
            </Popover>
        </>
    );
};

/**
 * A popover's open state can be handled in controlled mode.
 */
export const Controlled: Story = {
    render: () => <ControlledPopover />
};
