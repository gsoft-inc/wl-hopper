"use client";

import { allComponents } from "@/.contentlayer/generated";
import "./overview.css";

const Overview = () => {
    console.log(allComponents);

    return (
        <div className="hd-component-overview">
            {allComponents.filter(component => component.status).map(component => (
                <a key={component._id} className="hd-component-overview__item" href={`/${component._raw.flattenedPath}`}>
                    <h3 className="">{component.title}</h3>
                    <p className="hd-component-overview__item-teaser">{component.teaser}</p>
                </a>
            ))}
        </div>
    );
};

export default Overview;
