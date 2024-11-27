import { Disclosure, DisclosureHeader, DisclosurePanel, Div, Flex, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Div width="100%" paddingX="core_320" paddingY="core_480">
            <Disclosure>
                <DisclosureHeader>
                    <Flex wrap="wrap" columnGap="inline-sm" alignItems="baseline">
                        <Text>Workleap Officevibe</Text>
                        <Text color="neutral-weak" size="sm">Engagement and Feedback</Text>
                    </Flex>
                </DisclosureHeader>
                <DisclosurePanel>
                    Help employees speak up and make sure they feel heard. 
                    Continuous and real-time surveys offer feedback to celebrate every win, recognize commitment, and uncover challenges.
                </DisclosurePanel>
            </Disclosure>
        </Div>
    );
}