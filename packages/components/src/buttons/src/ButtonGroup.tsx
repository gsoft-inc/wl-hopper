//   /** Whether the Buttons in the ButtonGroup are all disabled. */
//   isDisabled?: boolean,
//   /**
//    * The axis the ButtonGroup should align with. Setting this to 'vertical' will prevent
//    * any switching behaviors between 'vertical' and 'horizontal'.
//    * @default 'horizontal'
//    */
//   orientation?: Orientation,
//   /** The Buttons contained within the ButtonGroup. */
//   children: ReactNode,
//   /**
//    * The alignment of the buttons within the ButtonGroup.
//    * @default 'start'
//    */
//   align?: Alignment | 'center'
// size
// fluid

import { forwardRef, type ForwardedRef, type HTMLAttributes, type CSSProperties } from "react";
import { ButtonContext } from "./ButtonContext.ts";
import type { Orientation } from "react-aria";
import { useStyledSystem, type StyledComponentProps, useResponsiveValue, type ResponsiveProp } from "@hopper-ui/styled-system";
import { useContextProps } from "react-aria-components";
import { ButtonGroupContext } from "./ButtonGroupContext.ts";
import { SlotProvider, cssModule } from "../../utils/index.ts";
import styles from "./ButtonGroup.module.css";
import { filterDOMProps } from "@react-aria/utils";
import clsx from "clsx";

export interface ButtonGroupProps extends StyledComponentProps<HTMLAttributes<HTMLDivElement>> {
    /**
   * The axis the ButtonGroup should align with.
   * @default 'horizontal'
   */
    orientation?: ResponsiveProp<Orientation>;

    /** Whether the Buttons in the ButtonGroup are all disabled. */
    isDisabled?: boolean;

    /** Whether the Buttons in the ButtonGroup are all fluid. */
    fluid?: ResponsiveProp<boolean>;

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
export const DefaultButtonGroupSlot = "ButtonGroup";

function ButtonGroup(props: ButtonGroupProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultButtonGroupSlot }, ref, ButtonGroupContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);

    const {
        children,
        size: sizeProp,
        fluid: fluidProp,
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
    const fluid = useResponsiveValue(fluidProp) ?? false;
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
            fluid && "fluid",
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
                    fluid
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
