import { Card, Flex, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Card padding="inset-squish-lg" maxWidth="1/2">
            <Flex gap="stack-md" alignItems="center">
                <Text>Software built for everyone to do their best work</Text>
            </Flex>
        </Card>
    );
}
