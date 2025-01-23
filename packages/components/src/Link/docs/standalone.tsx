import { Card, Content, Footer, Link } from "@hopper-ui/components";
import { Heading } from "react-aria-components";

export default function Example() {
    return (
        <Card padding="core_240" UNSAFE_width="300px">
            <Heading>
                Card component
            </Heading>
            <Content>
                This card component can include a link which is standalone
            </Content>
            <Footer>
                <Link isStandalone href="#">Learn more</Link>
            </Footer>
        </Card>
    );
}
