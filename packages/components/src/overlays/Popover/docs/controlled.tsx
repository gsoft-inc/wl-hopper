import { Button, Popover, Heading, Content, Flex } from "@hopper-ui/components";
import { InfoIcon } from "@hopper-ui/icons";
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
                    aria-label="information"
                >
                    <InfoIcon />
                </Button>
                <span ref={triggerRef}>Popover will be positioned relative to me</span>
            </Flex>
            <Popover triggerRef={triggerRef} isOpen={isOpen} onOpenChange={setOpen}>
                <Heading>Help</Heading>
                <Content>
                    For help accessing your account, please contact support.
                </Content>
            </Popover>
        </>
    );
}
