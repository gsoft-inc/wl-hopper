import { Button, PopoverTrigger, Popover, Heading, Content, ButtonGroup } from "@hopper-ui/components";
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
                <ButtonGroup>
                    <Button variant="secondary">Next</Button>
                    <Button>Got it</Button>
                </ButtonGroup>
            </Popover>
        </PopoverTrigger>
    );
}
