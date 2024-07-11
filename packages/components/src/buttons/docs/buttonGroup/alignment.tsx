import { Button, ButtonGroup, Flex } from "@hopper-ui/components";

export default function Example() {
    return (
        <Flex width="100%" direction="column">
            <ButtonGroup align="end">
                <Button variant="secondary">No, thanks</Button>
                <Button variant="secondary">Remind me later</Button>
                <Button variant="primary">Rate Now</Button>
            </ButtonGroup>
        </Flex>
    );
}
