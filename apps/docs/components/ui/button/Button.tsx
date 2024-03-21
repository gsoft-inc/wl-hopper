import type { ElementType, ComponentPropsWithRef } from "react";
import { Provider, Button as RACButton, type ButtonProps as RACButtonProps } from "react-aria-components";
import clsx from "clsx";
import { IconContext } from "@/components/ui/icon/IconContext.ts";
import "./button.css";

export interface ButtonProps<T extends ElementType = "button"> extends RACButtonProps {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md";
    className?: string;
    as?: T;
}

const Button = <T extends ElementType = "button">({
    variant = "primary",
    size = "md",
    className,
    children,
    as,
    ...rest
}: ButtonProps<T> & Omit<ComponentPropsWithRef<T>, keyof ButtonProps<T>>) => {
    const classes = clsx(
        "hd-btn",
        {
            [`hd-btn--${variant}`]: variant !== "primary",
            [`hd-btn--${size}`]: size !== "md"
        },
        className
    );

    const Component = as ?? RACButton;

    return (
        <Provider values={[
            [IconContext, {
                slots: {
                    icon: {
                        className: "hd-btn__icon"
                    },
                    "end-icon": {
                        className: "hd-btn__end-icon"
                    }
                }
            }]
        ]}
        >
            <Component className={classes} {...rest}>{children}</Component>
        </Provider>
    );
};

export default Button;
