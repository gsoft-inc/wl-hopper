import { Disclosure, DisclosureHeader, DisclosurePanel, Div, Inline, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Div width="100%" paddingX="core_320" paddingY="core_480">
            <Disclosure>
                <DisclosureHeader>
                    <Inline columnGap="inline-sm" alignY="baseline">
                        <Text>Workleap Officevibe</Text>
                        <Text color="neutral-weak" size="sm">Engagement and Feedback</Text>
                    </Inline>
                </DisclosureHeader>
                <DisclosurePanel>
                    Help employees speak up and make sure they feel heard. 
                    Continuous and real-time surveys offer feedback to celebrate every win, recognize commitment, and uncover challenges.
                </DisclosurePanel>
            </Disclosure>
        </Div>
    );
}