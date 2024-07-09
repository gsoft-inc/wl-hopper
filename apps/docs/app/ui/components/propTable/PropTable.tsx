import { MDXRemote } from "next-mdx-remote/rsc";
import { getComponentProps } from "@/app/lib/getComponentProps.ts";
import { capitalize } from "@/app/lib/capitalize.ts";

import Collapsible from "@/components/collapsible/Collapsible.tsx";
import Title from "@/components/title/Title.tsx";
import Code from "@/components/code/Code.tsx";
import HighlightCode from "@/components/highlightCode/HighlightCode.tsx";

import { PropTableRender } from "./PropTableRender.tsx";
import type { Item } from "./PropTableRender.tsx";

import "./propTable.css";
import { Fragment } from "react";


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
                const containsBraces = /{.*}/.test(description);

                return {
                    ...item,
                    name: <Code>{item.name}</Code>,
                    type: <HighlightCode code={item.type} variant="tiny" />,
                    defaultValue: item.defaultValue.replace(/'/g, "\""),
                    description: containsBraces ? <p>{item.description}</p> : <MDXRemote source={description} />
                };
            })
        };
    });
};

export default async function PropTable({ component }: PropTableProps) {
    const { groups } = await getComponentProps(component);
    const formatedGroups = formatGroup(groups);

    return (
        <>
            {formatedGroups.map(group => {
                const [key] = Object.keys(group);
                const isEmpty = group[key].length === 0;

                return (
                    <Fragment key={key}>
                        {key === "default" ?
                            <PropTableRender items={group[key]} /> :
                            !isEmpty && <Collapsible className="hd-props-table__section"
                                key={key}
                                title={<Title as="h3" level={3}>
                                    {capitalize(key)}
                                </Title>}
                            >
                                <PropTableRender items={group[key]} />
                            </Collapsible>
                        }
                    </Fragment>
                );
            })}
        </>
    );
}

