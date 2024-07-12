import { Button, PopoverTrigger, Popover, Heading, Content } from "@hopper-ui/components";
import { InfoIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <PopoverTrigger>
            <Button aria-label="information" variant="secondary"><InfoIcon /></Button>
            <Popover>
                <Heading>Title</Heading>
                <Content>
                    Popover content
                </Content>
                <Button>Got it</Button>
            </Popover>
        </PopoverTrigger>
    );
}

