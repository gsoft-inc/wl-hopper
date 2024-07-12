import {
    Button,
    PopoverTrigger,
    Popover,
    Heading,
    Content,
    Footer,
    Link,
    SlotProvider,
    PopoverContext, ButtonContext
} from "@hopper-ui/components";
import { InfoIcon } from "@hopper-ui/icons";
import { type ReactNode, useRef, useState } from "react";

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

export default function Example() {
    return (
        <HighlightedTrigger>
            <PopoverTrigger>
                <Button aria-label="information"><InfoIcon /></Button>
                <Popover>
                    <Heading>Help</Heading>
                    <Content>
                        For help accessing your account, please contact support.
                    </Content>
                </Popover>
            </PopoverTrigger>
        </HighlightedTrigger>
    );
}
