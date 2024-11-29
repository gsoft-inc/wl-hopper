import { Disclosure, DisclosureHeader, DisclosurePanel, Div, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Div width="100%">
            <Disclosure>
                <DisclosureHeader>
                    <SparklesIcon />
                    <Text>Help your people work better</Text>
                </DisclosureHeader>
                <DisclosurePanel>
                    Tackle the challenges of hybrid, remote and distributed work, no matter what. 
                    The Workleap platform builds solutions tailored to your existing HR and productivity tools to answer these challenges.
                </DisclosurePanel>
            </Disclosure>
        </Div>
    );
}