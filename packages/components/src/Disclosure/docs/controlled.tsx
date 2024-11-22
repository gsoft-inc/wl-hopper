import { Disclosure, DisclosureHeader, DisclosurePanel, Div } from "@hopper-ui/components";
import { useState } from "react";

export default function Example() {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <Div width="100%" paddingX="core_320" paddingY="core_480">
            <Disclosure
                isExpanded={isExpanded}
                onExpandedChange={setIsExpanded}
            >
                <DisclosureHeader>
                Shipping & Returns Overview
                </DisclosureHeader>
                <DisclosurePanel>
        Free shipping on orders over $50. Processing takes 1-2 business days. Expedited options available.

        Returns are hassle-free within 30 days of delivery, as long as items are in original condition. Contact support for help.
                </DisclosurePanel>
            </Disclosure>
        </Div>
    );
}