import cx from "classnames";
import React from "react";

import "./iconButton.css";

interface BaseProps {
    children: React.ReactNode;
    className?: string;
}

type PolymorphicProps<Element extends React.ElementType, Props> = Props & Omit<React.ComponentProps<Element>, "as"> & {
    as?: Element;
};

const IconButtonClass = "hd-icon-button";
const defaultElement = "button";

export const IconButton = <Element extends React.ElementType = typeof defaultElement>(props: PolymorphicProps<Element, BaseProps>) => {
    const {
        as: Component = defaultElement,
        children,
        className,
        ...rest
    } = props;

    return (
        <Component className={cx(IconButtonClass, className)} {...rest}>
            {children}
        </Component>
    );
};
