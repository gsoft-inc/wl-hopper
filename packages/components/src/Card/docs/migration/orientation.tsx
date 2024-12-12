import { Card, Content, Flex, Grid, H3, Image, Stack, Text } from "@hopper-ui/components";

import planet from "./assets/planet.png";

export default function Example() {
    return (
        <Card UNSAFE_maxWidth="30rem" width="100%" display="grid" gridTemplateAreas="image aside" alignItems="start">
            <Content>
                <Grid areas={["image aside"]} templateColumns={["max-content", "auto"]}>
                    <Flex height="100%" borderTopLeftRadius="inherit" borderTopRightRadius="inherit" overflow="hidden" backgroundColor="primary-weak" alignItems="center" justifyContent="center" padding="inset-md">
                        <Image src={planet.src} alt="Planet" />
                    </Flex>
                    <Stack padding="inset-lg">
                        <H3>NASA</H3>
                        <Text>
                            300 E. Street SW, Suite 5R30
                            <br />
                            Washington, DC 20546
                            <br />
                            (202) 358-0001 (Office)
                            <br />
                            (202) 358-4338 (Fax)
                        </Text>
                        <em>Please note that we are moving from December 12th to December 23rd.</em>
                    </Stack>
                </Grid>
            </Content>
        </Card>
    );
}
