import type { ComponentProps } from "react";
import clsx from "clsx";

import "./card.css";

export interface CardProps extends ComponentProps<"div">{
    size?: "sm" | "md" | "lg";
    align?: "start" | "center" | "end";
}

const Card = ({ children, className, size = "md", align = "center", ...rest }: CardProps) => {
    const cardClass = clsx("hd-card", {
        [`hd-card--${size}`]: size !== "md",
        [`hd-card--${align}`]: align !== "center"
    }, className);

    return (
        <div className={cardClass} {...rest}>
            {children}
        </div>
    );
};

export default Card;
