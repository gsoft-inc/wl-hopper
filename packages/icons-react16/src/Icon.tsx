import React, { forwardRef, type ElementType, type RefAttributes, type SVGProps, type ComponentProps } from "react";
import styles from "./Icon.module.css";

export interface IconProps extends Omit<ComponentProps<"svg">, "ref"> {
    /**
    * The size of the icon.
    */
    size?: "sm" | "md" | "lg";
    /**
     * The source of the icon with a size of 16px.
     */
    src16: ElementType<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    /**
     * The source of the icon with a size of 24px.
     */
    src24: ElementType<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    /**
     * The source of the icon with a size of 32px.
     */
    src32: ElementType<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const {
        size = "md",
        src16,
        src24,
        src32,
        style,
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...rest
    } = props;

    const sizeMappings = {
        sm: src16,
        md: src24,
        lg: src32
    };

    const As = sizeMappings[size];
    const classNames = [
        styles["hop-icon"],
        className
    ].filter(x => x !== undefined).join(" ");

    return (
        <>
            <As
                style={style}
                {...rest}
                ref={ref}
                focusable="false"
                role="img"
                aria-label={ariaLabel}
                aria-hidden={(ariaLabel ? (ariaHidden || undefined) : true)}
                className={classNames}
            />
        </>
    );
});

Icon.displayName = "Icon";
