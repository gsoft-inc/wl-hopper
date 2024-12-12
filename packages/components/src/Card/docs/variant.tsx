import { Card, Content, H2, H3, Header, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Card padding="inset-squish-lg" width="3/4" gap="stack-md">
            <Header>
                <H2>Roles</H2>
            </Header>
            <Content>
                <Card gap="stack-md" padding="inset-squish-lg" variant="second-level">
                    <Header>
                        <H3>Manager</H3>
                    </Header>
                    <Content>
                        <Text>A manager leads team operations, aligns goals, and fosters a productive work environment to achieve results.</Text>
                    </Content>
                </Card>
            </Content>
        </Card>
    );
}
