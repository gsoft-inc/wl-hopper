import { Button, ButtonGroup, Card, Flex, H3, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Card padding="inset-lg" UNSAFE_maxWidth="30rem" width="100%">
            <Flex gap="stack-md" direction="column">
                <H3>NASA Headquarters</H3>
                <Text>
                    300 E. Street SW, Suite 5R30
                    <br />
                    Washington, DC 20546
                    <br />
                    (202) 358-0001 (Office)
                    <br />
                    (202) 358-4338 (Fax)
                    <br />
                </Text>
                <Text>
                    <em>Any trespassers are going to be sent in space.</em>
                </Text>
                <ButtonGroup>
                    <Button>Plan a visit</Button>
                    <Button variant="secondary">Cancel a booking</Button>
                </ButtonGroup>
            </Flex>
        </Card>
    );
}
