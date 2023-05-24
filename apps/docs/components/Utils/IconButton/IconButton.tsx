import cx from "classnames";
import React from "react";
import Link, { LinkProps } from "next/link";

import "./iconButton.css";

interface IconButtonAsLinkProps extends LinkProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string;
    href: string;
}

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

const IconButtonClass = "hd-icon-button";

export const IconButton = ({ className, children, ...rest }: IconButtonProps) => {
    return (
        <button
            className={cx(IconButtonClass, className)}
            {...rest}
        >
            {children}
        </button>
    );
};

export const IconButtonAsLink = ({ className, children, ...rest }: IconButtonAsLinkProps) => {
    return (
        <Link
            className={cx(IconButtonClass, className)}
            {...rest}
        >
            {children}
        </Link>
    );
};
