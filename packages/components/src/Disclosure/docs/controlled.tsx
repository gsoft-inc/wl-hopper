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
                    This disclosure is {isExpanded ? "expanded" : "collapsed"}
                </DisclosureHeader>
                <DisclosurePanel>
                    Tackle the challenges of hybrid, remote and distributed work, no matter what. 
                    The Workleap platform builds solutions tailored to your existing HR and productivity tools to answer these challenges.
                </DisclosurePanel>
            </Disclosure>
        </Div>
    );
}