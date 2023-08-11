"use client";

import React from "react";
import cx from "classnames";

import "./tabs.css";
import Table from "../ui/table/Table";

interface TabProps {
    title: string;
    category: string;
    data: {
        name: string;
        value: string;
    }[];
}

interface TabsProps {
    tabs: TabProps[];
    className?: string;
}

const Tabs = ({ tabs, className }: TabsProps) => {
    const [selected, setSelected] = React.useState(0);

    const handleOnClick = (index: number): void => {
        setSelected(index);
    };
  
    return (
        <div className={cx("hd-tabs", className)}>
            <ul className="hd-tabs__list">
                {tabs.map((tab, index) => (
                    <li 
                        key={`${index.toString()}_${tab.category}`}
                        className={cx("hd-tabs__item", { "hd-tabs__item--active": index === selected })}
                    >
                        <button 
                            type="button" 
                            onClick={() => handleOnClick(index)}
                            className={cx("hd-tabs__item-button", { "hd-tabs__item-button--active": index === selected })}
                        >
                            {tab.title}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="hd-tabs__content">
                <div className="hd-tabs__pane"><Table category={tabs[selected].category} data={tabs[selected].data} /></div>
            </div>
        </div>
    );
};

export default Tabs;
