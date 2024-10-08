"use client";

import { CollapseIcon, Icon } from "@/components/icon";
import clsx from "clsx";
import type { ReactNode } from "react";
import { Button, UNSTABLE_Disclosure as Disclosure, UNSTABLE_DisclosurePanel as DisclosurePanel, type DisclosureProps } from "react-aria-components";

import "./collapsible.css";

export interface CollapsibleProps extends DisclosureProps {
    children: ReactNode;
    title: ReactNode;
}

const Collapsible = ({ title, className, children, ...rest }: CollapsibleProps) => {
    return (
        <Disclosure className={clsx("hd-collapsible", className)} {...rest}>
            <h3>
                <Button className="hd-collapsible__trigger" slot="trigger">
                    {title}
                    <Icon src={CollapseIcon} />
                </Button>
            </h3>
            <DisclosurePanel>
                <div className="hd-collapsible__content">{children}</div>
            </DisclosurePanel>
        </Disclosure>
    );
};

export default Collapsible;
