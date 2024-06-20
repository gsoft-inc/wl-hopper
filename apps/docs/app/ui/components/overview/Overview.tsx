"use client";

import { allComponents } from "@/.contentlayer/generated";
import Image from "next/image";
import "./overview.css";

const Overview = () => {
    // Get unique categories
    const categories = Array.from(new Set(allComponents.map(component => component.category)));

    return (
        <div className="hd-component-overview-wrapper">
            {categories.map(category => (
                <div className="hd-component-overview-category" key={category}>
                    <h2 className="hd-component-overview-category__title">{category}</h2>
                    <div className="hd-component-overview">
                        {allComponents.filter(component => component.category && component.category === category).map(component => (
                            <a key={component._id} className="hd-component-overview__item" href={`/${component._raw.flattenedPath}`}>
                                <div className="hd-component-overview__item-thumb">
                                    <Image src={`https://place-hold.it/260x140?text=${component.title}&fontsize=20`} alt="thumb" width="260" height="140" className="hd-component-overview__item-img" />
                                </div>
                                <div className="hd-component-overview-item__caption">
                                    <h3>{component.title}</h3>
                                    <p className="hd-component-overview__item-teaser">{component.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Overview;
