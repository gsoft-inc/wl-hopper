import clsx from "clsx";

import "./iconButton.css";
import type { ComponentProps, ElementType, ReactNode } from "react";

interface BaseProps {
    children: ReactNode;
    className?: string;
}

type PolymorphicProps<Element extends ElementType, Props> = Props & Omit<ComponentProps<Element>, "as"> & {
    as?: Element;
};

const IconButtonClass = "hd-icon-button";
const defaultElement = "button";

const IconButton = <Element extends ElementType = typeof defaultElement>(props: PolymorphicProps<Element, BaseProps>) => {
    const {
        as: Component = defaultElement,
        children,
        className,
        ...rest
    } = props;

    return (
        <Component className={clsx(IconButtonClass, className)} {...rest}>
            {children}
        </Component>
    );
};

export default IconButton;
