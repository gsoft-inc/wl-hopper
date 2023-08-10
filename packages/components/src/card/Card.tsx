import React from "react";
import cx from "classnames";

import "./card.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: "raised" | "second-level" | "interactive";
}

const Card = ({ type = "raised", children }: React.PropsWithChildren<CardProps>): JSX.Element => (
    <div className={cx("card", {
        [`card--${type}`]: type !== "raised"
    })}
    >
        {children}
    </div>
);


export default Card;

