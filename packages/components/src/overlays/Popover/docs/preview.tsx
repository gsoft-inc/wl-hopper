import { Button, PopoverTrigger, Popover, Heading, Content, Footer, Link } from "@hopper-ui/components";
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
                <Footer>
                    <Link href="#">Tell me more</Link>
                </Footer>
            </Popover>
        </PopoverTrigger>
    );
}
