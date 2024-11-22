import { Disclosure, DisclosureHeader, DisclosurePanel, Inline } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline width="100%" paddingX="core_240" paddingY="core_480" alignX="center" alignY="flex-start">
            <Disclosure variant="standalone" flex="0 0 48%">
                <DisclosureHeader>
                Shipping & Returns Overview
                </DisclosureHeader>
                <DisclosurePanel>
        Free shipping on orders over $50. Processing takes 1-2 business days. Expedited options available.

        Returns are hassle-free within 30 days of delivery, as long as items are in original condition. Contact support for help.
                </DisclosurePanel>
            </Disclosure>
            <Disclosure variant="inline" flex="0 0 48%">
                <DisclosureHeader>
                Shipping & Returns Overview
                </DisclosureHeader>
                <DisclosurePanel>
        Free shipping on orders over $50. Processing takes 1-2 business days. Expedited options available.

        Returns are hassle-free within 30 days of delivery, as long as items are in original condition. Contact support for help.
                </DisclosurePanel>
            </Disclosure>
        </Inline>
    );
}