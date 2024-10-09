"use client";

import { CollapseIcon, Icon } from "@/components/icon";
import clsx from "clsx";
import type { ReactNode } from "react";
import { Button, composeRenderProps, UNSTABLE_Disclosure as Disclosure, UNSTABLE_DisclosurePanel as DisclosurePanel, type DisclosureProps } from "react-aria-components";

import "./collapsible.css";

export interface CollapsibleProps extends DisclosureProps {
    title: ReactNode;
}

const Collapsible = ({ title, className, children: childrenProp, ...rest }: CollapsibleProps) => {
    const children = composeRenderProps(childrenProp, prev => {
        return prev ;
    });

    return (
        <Disclosure className={clsx("hd-collapsible", className)} {...rest}>
            {disclosureRenderProps => (
                <>
                    <h3>
                        <Button className="hd-collapsible__trigger" slot="trigger">
                            {title}
                            <Icon src={CollapseIcon} />
                        </Button>
                    </h3>
                    <DisclosurePanel>
                        <div className="hd-collapsible__content">{children(disclosureRenderProps)}</div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
};

export default Collapsible;
