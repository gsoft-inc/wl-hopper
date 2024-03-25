import type { ReactNode } from "react";
import clsx from "clsx";

import "./card.css";

export interface CardProps {
    children: ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg";
    align?: "start" | "center" | "end";
}

const Card = ({ children, className, size = "md", align = "center" }: CardProps) => {
    const cardClass = clsx("hd-card", {
        [`hd-card--${size}`]: size !== "md",
        [`hd-card--${align}`]: align !== "center"
    }, className);

    return (
        <div className={cardClass}>
            {children}
        </div>
    );
};

export default Card;
