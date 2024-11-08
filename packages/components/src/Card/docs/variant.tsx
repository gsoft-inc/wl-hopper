import { Card, Content, Flex, H2, H3, Header, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Card padding="inset-squish-lg" width="3/4">
            <H2>Roles</H2>
            <Flex gap="stack-md" alignItems="stretch" marginTop="stack-md" wrap="wrap">
                <Card gap="stack-md" padding="inset-squish-lg" flexBasis="50%" variant="second-level" flex="1">
                    <Header>
                        <H3>Manager</H3>
                    </Header>
                    <Content>
                        <Text>A manager leads team operations, aligns goals, and fosters a productive work environment to achieve results.</Text>
                    </Content>
                </Card>
                <Card padding="inset-squish-lg" flexBasis="50%" variant="second-level" flex="1">
                    <Flex gap="stack-md" alignItems="start" direction="column">
                        <Header>
                            <H3>Designer</H3>
                        </Header>
                        <Content>
                            <Text>A designer crafts visual solutions, enhancing user experience and aligning designs with brand goals.</Text>
                        </Content>
                    </Flex>
                </Card>
            </Flex>
        </Card>
    );
}
