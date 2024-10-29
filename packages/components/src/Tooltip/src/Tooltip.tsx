import {
    useColorSchemeContext,
    useStyledSystem,
    type StyledComponentProps,
    type StyledSystemProps
} from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, useContext, type ForwardedRef } from "react";
import { composeRenderProps, Tooltip as RACTooltip, useContextProps, type TooltipProps as RACTooltipProps } from "react-aria-components";

import { HopperProvider } from "../../HopperProvider/index.ts";
import { TextContext } from "../../typography/index.ts";
import { composeClassnameRenderProps, cssModule, ensureTextWrapper, SlotProvider, type BaseComponentDOMProps } from "../../utils/index.ts";

import { TooltipContext } from "./TooltipContext.ts";
import { TooltipTriggerContext } from "./TooltipTriggerContext.ts";


import styles from "./Tooltip.module.css";

export const GlobalTooltipCssSelector = "hop-Tooltip";

type PropsToOmit = "triggerRef" | "UNSTABLE_portalContainer" | "placement" | "containerPadding" | "offset" | "crossOffset" |
"shouldFlip" | "arrowBoundaryOffset" | "isOpen" | "defaultOpen" | "onOpenChange";

export type TooltipContainerProps = Omit<BaseComponentDOMProps, "slot"> & StyledSystemProps;

export interface TooltipProps extends StyledComponentProps<Omit<RACTooltipProps, PropsToOmit>> {
    /**
     * The props of the tooltip's inner container.
     */
    containerProps?: TooltipContainerProps;
}

function Tooltip(props: TooltipProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, TooltipContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        children: childrenProp,
        className,
        containerProps,
        style: styleProp,
        ...otherProps
    } = ownProps;

    const {
        containerPadding,
        crossOffset,
        offset,
        placement = "top",
        shouldFlip
    } = useContext(TooltipTriggerContext);
    
    const { colorScheme } = useColorSchemeContext();
    
    const { stylingProps: containerStylingProps, ...containerOwnProps } = useStyledSystem(containerProps ?? {});
    const {
        className: containerClassName,
        style: containerStyleProp,
        ...containerOtherProps
    } = containerOwnProps;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalTooltipCssSelector,
        cssModule(
            styles,
            "hop-Tooltip",
            placement
        ),
        stylingProps.className
    );

    const containerClassNames = clsx(containerClassName, styles["hop-Tooltip__container"], containerStylingProps.className);

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const containerStyle = {
        ...containerStylingProps.style,
        ...containerStyleProp
    };

    const children = composeRenderProps(childrenProp, prev => {
        return ensureTextWrapper(prev);
    });

    return (
        <RACTooltip
            ref={ref}
            className={classNames}
            style={style}
            containerPadding={containerPadding}
            crossOffset={crossOffset}
            offset={offset}
            placement={placement}
            shouldFlip={shouldFlip}
            {...otherProps}
        >
            {tooltipRenderProps => {
                return (
                    <HopperProvider colorScheme={colorScheme} withCssVariables={false}>
                        <div
                            className={containerClassNames}
                            style={containerStyle}
                            {...containerOtherProps}
                        >
                            <SlotProvider values={[
                                [TextContext, {
                                    size: "xs"
                                }]
                            ]}
                            >
                                {children(tooltipRenderProps)}
                            </SlotProvider>
                        </div>
                    </HopperProvider>
                );
            }}
        </RACTooltip>
    );
}

/**
 * Displays concise information on hover or focus.
 *
 * [View Documentation](TODO)
 */
const _Tooltip = forwardRef<HTMLDivElement, TooltipProps>(Tooltip);
_Tooltip.displayName = "Tooltip";

export { _Tooltip as Tooltip };
