"use client";

import { allComponents } from "@/.contentlayer/generated";
import Link from "next/link";

import Title from "@/components/title/Title";
import Card from "@/components/card/Card";
import { Icon, EmptyComponent } from "@/components/icon";
import { OverviewComponents } from "@/examples/overview";
import { HopperProvider } from "@hopper-ui/components";
import { type ColorScheme, ThemeContext } from "@/context/theme/ThemeProvider.tsx";

import { useContext } from "react";
import { FeatureFlagContext } from "@/context/feature/FeatureFlagProvider.tsx";

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
    const featureFlags = useContext(FeatureFlagContext);
    const { colorMode } = useContext(ThemeContext);
    const theme = colorMode as ColorScheme;

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
                <HopperProvider colorScheme={theme} >
                    <div className="hd-component-overview">
                        {allComponents.filter(component =>
                            component.category &&
    component.category === category &&
    (component.status === "ready" ||
     component.status === undefined ||
     (component.status === "alpha" && featureFlags.alpha))
                        ).map(component => {
                            const ComponentIcon = OverviewComponents[component.title] || EmptyComponent;

                            return (

                                <Card align="start" ghost className="hd-component-overview-item" key={component._id}>
                                    <Link
                                        className="hd-component-overview-item__link"
                                        href={`/components/${component.slug}`}
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
                                </Card>
                            );
                        })}
                    </div>
                </HopperProvider>
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
