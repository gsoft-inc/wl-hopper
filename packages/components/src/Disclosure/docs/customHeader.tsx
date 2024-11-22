import { Button, Disclosure, DisclosurePanel, Div, Text } from "@hopper-ui/components";

import { ToggleArrow } from "../../ToggleArrow/index.ts";

export default function Example() {
    return (
        <Div width="100%" paddingX="core_320" paddingY="core_480">
            <Disclosure>
                {({ isExpanded }) => (
                    <>
                        <Button slot="trigger" variant="secondary">
                            {({ isDisabled, isFocusVisible, isHovered, isPressed }) => (
                                <>
                                    <Text>Shipping & Returns Overview</Text>
                                    <ToggleArrow
                                        isExpanded={isExpanded}
                                        isDisabled={isDisabled}
                                        isFocused={isFocusVisible}
                                        isHovered={isHovered}
                                        isPressed={isPressed}
                                        order="2"
                                    />
                                </>
                            )}
                        </Button>
                        <DisclosurePanel>
        Free shipping on orders over $50. Processing takes 1-2 business days. Expedited options available.

        Returns are hassle-free within 30 days of delivery, as long as items are in original condition. Contact support for help.
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
        </Div>
    );
}