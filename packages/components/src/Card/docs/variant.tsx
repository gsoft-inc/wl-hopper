import { Card, Flex, H2, H3, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Card padding="inset-squish-lg" width="3/4">
            <H2>Roles</H2>
            <Flex gap="stack-md" alignItems="stretch" marginTop="stack-md" wrap="wrap">
                <Card padding="inset-squish-lg" flexBasis="50%" variant="second-level" flex="1">
                    <Flex gap="stack-md" alignItems="start" direction="column">
                        <H3>Manager</H3>
                        <Text>A manager leads team operations, aligns goals, and fosters a productive work environment to achieve results.</Text>
                    </Flex>
                </Card>
                <Card padding="inset-squish-lg" flexBasis="50%" variant="second-level" flex="1">
                    <Flex gap="stack-md" alignItems="start" direction="column">
                        <H3>Designer</H3>
                        <Text>A designer crafts visual solutions, enhancing user experience and aligning designs with brand goals.</Text>
                    </Flex>
                </Card>
            </Flex>
        </Card>
    );
}
