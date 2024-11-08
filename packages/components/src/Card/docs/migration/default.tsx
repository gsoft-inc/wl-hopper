import { Card, Content, H3, Header, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Card padding="inset-lg" UNSAFE_maxWidth="30rem" width="100%" gap="stack-md">
            <Header>
                <H3>NASA Headquarters</H3>
            </Header>
            <Content>
                <Text>NASA Headquarters, officially known as Mary W. Jackson NASA Headquarters or NASA HQ and formerly named Two Independence Square, is a low-rise office building in the two-building Independence Square complex at 300 E Street SW in Washington, D.C.</Text>
            </Content>
        </Card>
    );
}
