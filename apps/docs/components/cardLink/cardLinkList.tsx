import clsx from "clsx";
import type { ComponentProps } from "react";

import "./cardLinkList.css";

export interface CardLinkListProps extends ComponentProps<"div">{}

const CardLinkList = ({ children, className, ...rest }: CardLinkListProps) => {
    const cardLinkListClass = clsx("hd-cardlink-list", {
    }, className);

    return (
        <div className={cardLinkListClass} {...rest}>
            {children}
        </div>
    );
};

export default CardLinkList;
