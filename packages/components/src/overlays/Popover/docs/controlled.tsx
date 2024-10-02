import { Button, Content, Flex, Heading, Popover } from "@hopper-ui/components";
import { useRef, useState } from "react";

export default function Example() {
    const triggerRef = useRef(null);
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Flex direction="column" alignItems="center" gap="core_320">
                <Button
                    onPress={() => setOpen(!isOpen)}
                    variant="secondary"
                >
                    Company Profile
                </Button>
                <span ref={triggerRef}>Popover will be positioned relative to me</span>
            </Flex>
            <Popover triggerRef={triggerRef} isOpen={isOpen} onOpenChange={setOpen}>
                <Heading slot="title">ACME</Heading>
                <Content>
                    A tech company focusing on the development of software and hardware solutions.
                </Content>
            </Popover>
        </>
    );
}
