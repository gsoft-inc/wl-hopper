"use client";

import clsx from "clsx";
import type { ReactNode } from "react";
import { Button, UNSTABLE_Disclosure as Disclosure, UNSTABLE_DisclosurePanel as DisclosurePanel } from "react-aria-components";
import { Icon, CollapseIcon } from "@/components/icon";

import "./collapsible.css";

export interface CollapsibleProps {
    children: ReactNode;
    title: ReactNode;
    className?: string;
}

const Collapsible = ({ children, title, className }: CollapsibleProps) => {
    return (
        <Disclosure className={clsx("hd-collapsible", className)}>
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
