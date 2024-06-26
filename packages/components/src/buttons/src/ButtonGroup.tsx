import { useStyledSystem, type StyledComponentProps, useResponsiveValue, type ResponsiveProp } from "@hopper-ui/styled-system";
import { filterDOMProps } from "@react-aria/utils";
import clsx from "clsx";
import { forwardRef, type ForwardedRef, type HTMLAttributes, type CSSProperties } from "react";
import type { Orientation } from "react-aria";
import { useContextProps } from "react-aria-components";

import { SlotProvider, cssModule } from "../../utils/index.ts";

import { ButtonContext } from "./ButtonContext.ts";
import { ButtonGroupContext } from "./ButtonGroupContext.ts";

import styles from "./ButtonGroup.module.css";

export interface ButtonGroupProps extends StyledComponentProps<HTMLAttributes<HTMLDivElement>> {
    /**
   * The axis the ButtonGroup should align with.
   * @default 'horizontal'
   */
    orientation?: ResponsiveProp<Orientation>;

    /** Whether the Buttons in the ButtonGroup are all disabled. */
    isDisabled?: boolean;

    /** Whether the Buttons in the ButtonGroup are all fluid. */
    isFluid?: ResponsiveProp<boolean>;

    /**
     * The size of the buttons in the ButtonGroup.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;

    /**
     * Whether elements are forced onto one line or can wrap onto multiple rows.
     * @default true
     */
    wrap?: ResponsiveProp<boolean>;

    /**
   * The alignment of the buttons within the ButtonGroup.
   * @default 'start'
   */
    align?: ResponsiveProp<"start" | "end" | "center">;
}

export const GlobalButtonGroupCssSelector = "hop-ButtonGroup";

function ButtonGroup(props: ButtonGroupProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, ButtonGroupContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);

    const {
        children,
        size: sizeProp,
        isFluid: isFluidProp,
        isDisabled = false,
        className,
        align: alignProp,
        style: styleProp,
        orientation: orientationProp,
        wrap: wrapProp,
        ...otherProps
    } = ownProps;

    const align = useResponsiveValue(alignProp) ?? "start";
    const size = useResponsiveValue(sizeProp) ?? "md";
    const isFluid = useResponsiveValue(isFluidProp) ?? false;
    const wrap = useResponsiveValue(wrapProp) ?? true;
    const orientation = useResponsiveValue(orientationProp) ?? "horizontal";

    const classNames = clsx(
        className,
        GlobalButtonGroupCssSelector,
        cssModule(
            styles,
            "hop-ButtonGroup",
            size,
            align,
            isFluid && "fluid",
            wrap && "wrap",
            orientation
        ),
        stylingProps.className
    );

    const style: CSSProperties = {
        ...stylingProps.style,
        ...styleProp
    };

    return (
        <div
            {...filterDOMProps(otherProps, { labelable: true })}
            ref={ref}
            className={classNames}
            style={style}
            slot={props.slot || undefined}
        >
            <SlotProvider values={[[
                ButtonContext, {
                    size,
                    isDisabled,
                    isFluid
                }
            ]]}
            >
                {children}
            </SlotProvider>
        </div>
    );
}

/**
 * ButtonGroup handles the spacing and orientation for a grouping of buttons whose actions are related to each other.
 *
 * [View Documentation](TODO)
 */
const _ButtonGroup = forwardRef(ButtonGroup);

_ButtonGroup.displayName = "ButtonGroup";

export { _ButtonGroup as ButtonGroup };
