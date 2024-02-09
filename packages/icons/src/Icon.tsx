import { useResponsiveValue, useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { filterDOMProps } from "@react-aria/utils";
import clsx from "clsx";
import { forwardRef, type ElementType, type RefAttributes, type SVGProps } from "react";
import { useContextProps, type SlotProps } from "react-aria-components";
import styles from "./Icon.module.css";
import { cssModule } from "../../components/src/utils/src/css-module.ts";
import { IconContext } from "./IconContext.ts";

const GlobalIconCssSelector = "hop-Icon";
const DefaultIconSlot = "icon";

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

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    [props, ref] = useContextProps({ ...props, slot: props.slot ?? DefaultIconSlot }, ref, IconContext);

    const {
        stylingProps,
        ...ownProps
    } = useStyledSystem(props);

    const {
        size: sizeProp,
        src16,
        src24,
        src32,
        style,
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";
    const sizeMappings = {
        sm: src16,
        md: src24,
        lg: src32
    };

    const As = sizeMappings[size];

    const classNames = clsx(
        className,
        GlobalIconCssSelector,
        cssModule(
            styles,
            "hop-icon"
        ),
        stylingProps.className
    );

    return (
        <As
            ref={ref}
            style={{
                ...stylingProps.style,
                ...style
            }}
            {...filterDOMProps(otherProps)}
            focusable="false"
            role="img"
            aria-label={ariaLabel}
            aria-hidden={(ariaLabel ? (ariaHidden || undefined) : true)}
            className={classNames}
        />
    );
});

Icon.displayName = "Icon";
