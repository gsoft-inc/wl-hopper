import { Button, Disclosure, DisclosurePanel, Div, Text } from "@hopper-ui/components";

import { ToggleArrow } from "../../ToggleArrow/index.ts";

export default function Example() {
    return (
        <Div width="100%" paddingX="core_320" paddingY="core_480">
            <Disclosure>
                {({ isExpanded }) => (
                    <>
                        <Button slot="trigger" variant="secondary">
                            <Text>Help your people work better</Text>
                            <ToggleArrow
                                isExpanded={isExpanded}
                                slot="end-icon"
                            />
                        </Button>
                        <DisclosurePanel>
                            Tackle the challenges of hybrid, remote and distributed work, no matter what. 
                            The Workleap platform builds solutions tailored to your existing HR and productivity tools to answer these challenges.
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
        </Div>
    );
}