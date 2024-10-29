import { TooltipTrigger as RACTooltipTrigger, type TooltipProps as RACTooltipProps, type TooltipTriggerComponentProps as RACTooltipTriggerProps } from "react-aria-components";

import { TooltipTriggerContext } from "./TooltipTriggerContext.ts";

export type TooltipPlacement = "start" | "end" | "right" | "left" | "top" | "bottom";

type PropsToPick = "shouldFlip" | "containerPadding" | "offset" | "crossOffset" | "isOpen" | "defaultOpen" | "onOpenChange";

export interface TooltipTriggerProps extends RACTooltipTriggerProps, Pick<RACTooltipProps, PropsToPick> {
    /**
   * The placement of the element with respect to its anchor element.
   *
   * @default 'top'
   */
    placement?: TooltipPlacement;
}

/**
 * A TooltipTrigger wraps a trigger element and Tooltip, handling visibility and positioning.
 *
 * [View Documentation](TODO)
 */
export function TooltipTrigger(props: TooltipTriggerProps) {
    const {
        children,
        containerPadding = 16, /* Should this be on the trigger or the actual tooltip component? */
        crossOffset,
        delay = 1000,
        offset = 4,
        placement = "top",
        shouldFlip,
        ...otherProps
    } = props;

    return (
        <RACTooltipTrigger
            delay={delay}
            {...otherProps}
        >
            <TooltipTriggerContext.Provider
                value={{
                    containerPadding: containerPadding,
                    crossOffset: crossOffset,
                    offset: offset,
                    placement: placement,
                    shouldFlip: shouldFlip
                }}
            >
                {children}
            </TooltipTriggerContext.Provider>
        </RACTooltipTrigger>
    );
}

TooltipTrigger.displayName = "TooltipTrigger";
