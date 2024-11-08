import { Card, Content, Footer, H3, Header, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Card gap="inline-lg" padding="inset-squish-lg" UNSAFE_maxWidth="30rem" width="100%">
            <Header>
                <H3>Developer</H3>
            </Header>
            <Content>
                <Text>
                    A developer builds and maintains software, ensuring functionality, performance, and alignment with project goals.
                </Text>
            </Content>
            <Footer>Start date : <em>September 13th</em></Footer>
        </Card>
    );
}
