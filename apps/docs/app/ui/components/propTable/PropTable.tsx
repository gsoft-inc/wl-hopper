import { MDXRemote } from "next-mdx-remote/rsc";
import { getComponentProps } from "@/app/lib/getComponentProps.ts";

import Collapsible from "@/components/collapsible/Collapsible.tsx";
import Title from "@/components/title/Title.tsx";
import Code from "@/components/code/Code.tsx";
import HighlightCode from "@/components/highlightCode/HighlightCode.tsx";

import { PropTableRender } from "./PropTableRender.tsx";
import type { Item } from "./PropTableRender.tsx";

import "./propTable.css";

export interface PropTableProps {
    component: string;
}

interface PropTableItem extends Item {
    name: string;
    type: string;
    description: string;
}

export interface Groups {
    [group: string]: PropTableItem[];
}

const formatGroup = (groups: Groups[]) => {
    return groups.map(group => {
        const [key] = Object.keys(group);

        return {
            [key]: group[key].map(item => {
                const description = item.description;
                const formatedDescription = description.replace(/<form>/g, "");

                return {
                    ...item,
                    name: <Code value={item.name}>{item.name}</Code>,
                    type: <HighlightCode code={item.type} variant="tiny" />,
                    description: <MDXRemote source={formatedDescription} />
                };
            })
        };
    });
};

export default async function PropTable({ component }: PropTableProps) {
    const { description, groups } = await getComponentProps(component);
    const formatedGroups = formatGroup(groups);

    return (
        <>
            <p>{description}</p>
            {formatedGroups.map(group => {
                const [key] = Object.keys(group);

                return (
                    <>
                        {key === "default" ?
                            <PropTableRender items={group[key]} /> :
                            <Collapsible className="hd-props-table__section"
                                key={key}
                                title={<Title as="h3" level={3}>
                                    {key}
                                </Title>}
                            >
                                <PropTableRender items={group[key]} />
                            </Collapsible>
                        }
                    </>
                );
            })}
        </>
    );
}
