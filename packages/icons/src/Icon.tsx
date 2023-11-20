import { useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { filterDOMProps } from "@react-aria/utils";
import clsx from "clsx";
import { createContext, forwardRef, type ElementType, type RefAttributes, type SVGProps } from "react";
import { useContextProps, type ContextValue } from "react-aria-components";
import styles from "./Icon.module.css";

export type IconSize = "sm" | "md" | "lg";
export interface IconProps extends StyledComponentProps<"svg"> {
    /**
     * A slot to place the icon in.
     * @default 'icon'
    */
    slot?: string;

    /**
    * The size of the icon.
    */
    size?: ResponsiveProp<IconSize>;
}

export const IconContext = createContext<ContextValue<IconProps, SVGSVGElement>>({});

export interface MultiSourceIcon extends IconProps {
    src16: ElementType<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    src24: ElementType<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    src32: ElementType<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
}

export const MultiSourceIcon = forwardRef<SVGSVGElement, MultiSourceIcon>((props, ref) => {
    // This is a react-aria-component
    // eslint-disable-next-line no-param-reassign
    [props, ref] = useContextProps(props, ref, IconContext);

    const {
        size = "md",
        src16,
        src24,
        src32,
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...rest
    } = useStyledSystem(props);

    let As = src16;
    if (size === "md") {
        As = src24;
    } else if (size === "lg") {
        As = src32;
    }

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

MultiSourceIcon.displayName = "MultiSourceIcon";
