import { allComponents } from "@/.contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/title/Title";

import "./overview.css";

const ignoreCategories = ["application"];
const sortOrder = [
    "layout",
    "buttons",
    "collections",
    "forms",
    "icons",
    "navigation",
    "overlays",
    "pickers",
    "status",
    "content"
];

const categories = Array.from(new Set(allComponents.map(component => component.category))).filter(x => x && !ignoreCategories.includes(x)).sort((a, b) => {
    const aIndex = sortOrder.indexOf(a!);
    const bIndex = sortOrder.indexOf(b!);

    if (aIndex === -1 && bIndex === -1) {
        return 0;
    }

    if (aIndex === -1) {
        return 1;
    }

    if (bIndex === -1) {
        return -1;
    }

    return aIndex - bIndex;
});

const Overview = () => {
    return (
        <div className="hd-component-overview-wrapper">
            {categories.map(category => (
                <div className="hd-component-overview-category" key={category}>
                    <Title as="h3" level={2} className="hd-component-overview-category__title">{category}</Title>
                    <div className="hd-component-overview">
                        {allComponents.filter(component => component.category && component.category === category).map(component => (
                            <Link key={component._id} className="hd-component-overview__item" href={`/components/${component.slug}`}>
                                <div className="hd-component-overview__item-thumb">
                                    <Image src={`https://place-hold.it/260x140?text=${component.title}&fontsize=20`} alt="thumb" width="260" height="140" className="hd-component-overview__item-img" />
                                </div>
                                <div className="hd-component-overview-item__caption">
                                    <h3>{component.title}</h3>
                                    <p className="hd-component-overview__item-teaser">{component.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Overview;
