import { Button, PopoverTrigger, Popover, Heading, Content, Footer } from "@hopper-ui/components";
import { NewTipIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <PopoverTrigger>
            <Button aria-label="information" variant="secondary"><NewTipIcon /></Button>
            <Popover>
                <Heading>Title</Heading>
                <Content>
                    Popover content
                </Content>
                <Footer>
                    1 of 5
                </Footer>
                <Button>Next</Button>
            </Popover>
        </PopoverTrigger>
    );
}
