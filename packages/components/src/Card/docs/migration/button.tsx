import { Button, Card, Flex, H3, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Card padding="inset-lg" UNSAFE_maxWidth="30rem" width="100%">
            <Flex gap="stack-md" direction="column">
                <H3>NASA Headquarters</H3>
                <Text>NASA Headquarters, officially known as Mary W. Jackson NASA Headquarters or NASA HQ and formerly named Two Independence Square, is a low-rise office building in the two-building Independence Square complex at 300 E Street SW in Washington, D.C.</Text>
                <Button variant="secondary">Plan a visit</Button>
            </Flex>
        </Card>
    );
}
