import { Button, PopoverTrigger, Popover, Heading, Content, Footer, Link } from "@hopper-ui/components";
import { InfoIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <PopoverTrigger>
            <Button aria-label="information" variant="secondary"><InfoIcon /></Button>
            <Popover>
                <Heading>Help</Heading>
                <Content>
                    For help accessing your account, please contact support.
                </Content>
                <Footer>
                    <Link href="#">Contact support</Link>
                </Footer>
            </Popover>
        </PopoverTrigger>
    );
}
