"use client";

import React from "react";
import { Tabs as AriaTabs, TabList, Tab, TabPanel, Collection } from "react-aria-components";
import cx from "classnames";

import "./tabs.css";

interface TabProps {
    id: number;
    title: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: TabProps[];
    className?: string;
}

const Tabs = ({ tabs, className }: TabsProps) => {
    const classes = cx("hd-tabs", className);

    return (
        <AriaTabs className={classes}>
            <TabList className="hd-tabs__list" items={tabs}>
                {item => (
                    <Tab key={item.id} className="hd-tabs__item">{item.title}</Tab>
                )}
            </TabList>
            <Collection items={tabs}>
                {item => (
                    <TabPanel key={item.id} className="hd-tabs__panel">{item.content}</TabPanel>
                )}
            </Collection>
        </AriaTabs>
    );
};

export default Tabs;
