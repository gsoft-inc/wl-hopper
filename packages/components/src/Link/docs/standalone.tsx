import { Card, Footer, Link, Text } from "@hopper-ui/components";
import { Heading } from "react-aria-components";

export default function Example() {
    return (
        <Card padding="core_240" UNSAFE_width="300px">
            <Heading>
                Card component
            </Heading>
            <Text>
                This card component can include a link which is standalone
            </Text>
            <Footer>
                <Link isStandalone href="#">Learn more</Link>
            </Footer>
        </Card>
    );
}
