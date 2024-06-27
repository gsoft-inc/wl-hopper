"use client";

import { allComponents } from "@/.contentlayer/generated";
import Link from "next/link";

import Title from "@/components/title/Title";
import Card from "@/components/card/Card";
import { Icon, EmptyComponent } from "@/components/icon";
import { OverviewComponents } from "@/examples/overview";

import "./overview.css";

const Overview = () => {
    // Get unique categories
    const categories = Array.from(new Set(allComponents.map(component => component.category)));

    const overviewSection = categories.map(category => {
        if (!category) {
            return null;
        }

        return (
            <div className="hd-component-overview-category" key={category}>
                <Title as="h3"
                    level={2}
                    interactive
                    className="hd-component-overview-category__title"
                >{category}</Title>
                <div className="hd-component-overview">
                    {allComponents.filter(component => component.category && component.category === category).map(component => {
                        const ComponentIcon = OverviewComponents[component.title] || EmptyComponent;

                        return (
                            <Card key={category} align="start" ghost className="hd-component-overview-item">
                                <Link key={component._id}
                                    className="hd-component-overview-item__link"
                                    href={`/${component._raw.flattenedPath}`}
                                >
                                    <div className="hd-component-overview-item__img">
                                        <Icon src={ComponentIcon} />
                                    </div>
                                    <div className="hd-component-overview-item__caption">
                                        <Title as="h3"
                                            level={3}
                                            className="hd-component-overview-item__title"
                                        >{component.title}</Title>
                                        <p className="hd-component-overview-item__description">{component.description}</p>
                                    </div>
                                </Link>
                            </Card>);
                    })}
                </div>
            </div>
        );
    });

    return (
        <div className="hd-component-overview-wrapper">
            {overviewSection}
        </div>
    );
};

export default Overview;
