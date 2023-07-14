"use client";

import React, { type HTMLAttributes } from "react";
import { usePathname } from "next/navigation";
import { generateId } from "@/components/Utils/GenerateId/GenerateId";

import "./heading.css";

export type HeadingProps = React.DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = ({ as, ...props }: HeadingProps) => {
    const Component = `${as}`;

    return <Component {...props} />;
};

export const CustomHeading = ({ as, ...props }: HeadingProps) => {
    const { children, ...restProps } = props;
    const pathname = usePathname();

    if (children == null) {
        return null;
    }

    const uniqueId = generateId(children.toString());

    // not using next/link as there is issues with scrolling to the ID issue #44295
    return (
        <Heading as={as} id={`${uniqueId}`} {...restProps}>
            <a href={`${pathname}#${uniqueId}`} className="hd-heading-link">
                {children}
            </a>
        </Heading>
    );
};
