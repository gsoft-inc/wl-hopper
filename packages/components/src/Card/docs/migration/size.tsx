import { Card, Content, Flex, H3, Header, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <>
            <Flex gap="inline-sm" wrap="wrap">
                <Card padding="inset-lg" UNSAFE_maxWidth="16rem" width="100%">
                    <Header>
                        <H3>XS Card</H3>
                    </Header>
                    <Content>
                        <Text>
                        300 E. Street SW, Suite 5R30
                            <br />
                        Washington, DC 20546
                            <br />
                        (202) 358-0001 (Office)
                            <br />
                        (202) 358-4338 (Fax)
                        </Text>
                    </Content>
                </Card>
                <Card padding="inset-lg" UNSAFE_maxWidth="20rem" width="100%">
                    <Flex gap="stack-md" direction="column">
                        <Header>
                            <H3>SM Card</H3>
                        </Header>
                        <Content>
                            <Text>
                        300 E. Street SW, Suite 5R30
                                <br />
                        Washington, DC 20546
                                <br />
                        (202) 358-0001 (Office)
                                <br />
                        (202) 358-4338 (Fax)
                            </Text>
                        </Content>
                    </Flex>
                </Card>
                <Card padding="inset-lg" UNSAFE_maxWidth="30rem" width="100%">
                    <Flex gap="stack-md" direction="column">
                        <Header>
                            <H3>MD Card</H3>
                        </Header>
                        <Content>
                            <Text>
                        300 E. Street SW, Suite 5R30
                                <br />
                        Washington, DC 20546
                                <br />
                        (202) 358-0001 (Office)
                                <br />
                        (202) 358-4338 (Fax)
                            </Text>
                        </Content>
                    </Flex>
                </Card>
                <Card padding="inset-lg" UNSAFE_maxWidth="35rem" width="100%">
                    <Flex gap="stack-md" direction="column">
                        <Header>
                            <H3>LG Card</H3>
                        </Header>
                        <Content>
                            <Text>
                        300 E. Street SW, Suite 5R30
                                <br />
                        Washington, DC 20546
                                <br />
                        (202) 358-0001 (Office)
                                <br />
                        (202) 358-4338 (Fax)
                            </Text>
                        </Content>
                    </Flex>
                </Card>
                <Card padding="inset-lg" UNSAFE_maxWidth="40rem" width="100%">
                    <Flex gap="stack-md" direction="column">
                        <Header>
                            <H3>XL Card</H3>
                        </Header>
                        <Content>
                            <Text>
                        300 E. Street SW, Suite 5R30
                                <br />
                        Washington, DC 20546
                                <br />
                        (202) 358-0001 (Office)
                                <br />
                        (202) 358-4338 (Fax)
                            </Text>
                        </Content>
                    </Flex>
                </Card>
            </Flex>
        </>
    );
}
