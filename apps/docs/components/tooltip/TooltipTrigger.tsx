import type { ReactNode } from "react";
import { TooltipTrigger as RACTooltipTrigger, type TooltipTriggerComponentProps as RACTooltipTriggerProps } from "react-aria-components";

import "./Tooltip.css";

interface TooltipProps extends RACTooltipTriggerProps {
    children: ReactNode;
}

const TooltipTrigger = ({ children, ...rest }: TooltipProps) => {
    return (
        <RACTooltipTrigger {...rest}>
            {children}
        </RACTooltipTrigger>
    );
};

export default TooltipTrigger;
