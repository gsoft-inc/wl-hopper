import { Disclosure, DisclosureHeader, DisclosurePanel, Div } from "@hopper-ui/components";

export default function Example() {
    return (
        <Div width="100%" paddingX="core_320" paddingY="core_480">
            <Disclosure isDisabled>
                <DisclosureHeader>
                    Help your people work better
                </DisclosureHeader>
                <DisclosurePanel>
                    Tackle the challenges of hybrid, remote and distributed work, no matter what.
                    The Workleap platform builds solutions tailored to your existing HR and productivity tools to answer these challenges.
                </DisclosurePanel>
            </Disclosure>
            <Disclosure isDisabled>
                <DisclosureHeader>
                    Help your people work better
                </DisclosureHeader>
                <DisclosurePanel>
                    Tackle the challenges of hybrid, remote and distributed work, no matter what.
                    The Workleap platform builds solutions tailored to your existing HR and productivity tools to answer these challenges.
                </DisclosurePanel>
            </Disclosure>
        </Div>
    );
}
