import { useResponsiveValue, useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { filterDOMProps } from "@react-aria/utils";
import clsx from "clsx";
import { createContext, forwardRef, type ElementType, type RefAttributes, type SVGProps } from "react";
import { useContextProps, type ContextValue, type SlotProps } from "react-aria-components";
import styles from "./Icon.module.css";

export interface IconProps extends SlotProps, StyledComponentProps<"svg"> {
    /**
    * The size of the icon.
    */
    size?: ResponsiveProp<"sm" | "md" | "lg">;
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

export const IconContext = createContext<ContextValue<Omit<IconProps, "src16" | "src24" | "src32" >, SVGSVGElement>>({});

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    // This is a react-aria-component pattern
    // eslint-disable-next-line no-param-reassign
    [props, ref] = useContextProps(props, ref, IconContext);

    const {
        size: sizeProp = "md",
        src16,
        src24,
        src32,
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...rest
    } = useStyledSystem(props);

    const size = useResponsiveValue(sizeProp) ?? "md";
    const sizeMappings = {
        sm: src16,
        md: src24,
        lg: src32
    };

    const As = sizeMappings[size];

    return (
        <As
            ref={ref}
            {...filterDOMProps(rest)}
            focusable="false"
            role="img"
            aria-label={ariaLabel}
            aria-hidden={(ariaLabel ? (ariaHidden || undefined) : true)}
            className={clsx(
                styles["hop-icon"],
                styles[`hop-icon-${size}`],
                className
            )}
        />
    );
});

Icon.displayName = "MultiSourceIcon";
