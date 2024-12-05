"use client";

import clsx from "clsx";
import { Children, type ReactElement, type ReactNode } from "react";

import { Tabs as RACTabs, Tab, TabList, TabPanel } from "react-aria-components";
import "./tabs.css";

interface TabProps {
    id: string;
    title: string;
    titleIcon?: ReactElement<SVGElement>;
}

interface TabsProps {
    tabs: TabProps[];
    className?: string;
    children?: ReactNode;
    ariaLabel?: string;
}

const Tabs = ({ tabs, className, children, ariaLabel }: TabsProps) => {
    const arrayChildren = Children.toArray(children);

    return (
        <RACTabs className={clsx("hd-tabs", className)}>
            <TabList className="hd-tabs__list" aria-label={ariaLabel}>
                {tabs.map(tab => (
                    <Tab
                        key={tab.id}
                        id={tab.id}
                        className={p => clsx("hd-tabs__item-button", { "hd-tabs__item-button--active": p.isSelected })}
                    >
                        {tab.titleIcon && <span className="hd-tabs__icon">{tab.titleIcon}</span>}
                        {tab.title}
                    </Tab>
                ))}
            </TabList>
            {arrayChildren.map((child, index) => {

                return (
                    <TabPanel key={tabs[index].id} className="hd-tabs__content" id={tabs[index].id}>
                        <div className="hd-tabs__pane">{child}</div>
                    </TabPanel>
                );
            })}
        </RACTabs>
    );
};

export default Tabs;
