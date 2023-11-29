"use client";

import clsx from "clsx";
import { Children, useState } from "react";

import "./tabs.css";

interface TabProps {
    title: string;
    category: string;
}

interface TabsProps {
    tabs: TabProps[];
    className?: string;
    children?: React.ReactNode;
}

const Tabs = ({ tabs, className, children }: TabsProps) => {
    const [selected, setSelected] = useState(0);

    const handleOnClick = (index: number): void => {
        setSelected(index);
    };

    const arrayChildren = Children.toArray(children);
    const selectedChild = arrayChildren[selected];

    return (
        <div className={clsx("hd-tabs", className)}>
            <ul className="hd-tabs__list">
                {tabs.map((tab, index) => (
                    <li
                        key={`${index.toString()}_${tab.category}`}
                        className={clsx("hd-tabs__item", { "hd-tabs__item--active": index === selected })}
                    >
                        <button
                            type="button"
                            onClick={() => handleOnClick(index)}
                            className={clsx("hd-tabs__item-button", { "hd-tabs__item-button--active": index === selected })}
                        >
                            {tab.title}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="hd-tabs__content">
                <div className="hd-tabs__pane">{selectedChild}</div>
            </div>
        </div>
    );
};

export default Tabs;
