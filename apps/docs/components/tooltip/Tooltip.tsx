import type { ReactNode } from "react";
import { Tooltip as RACTooltip, type TooltipProps as RACTooltipProps } from "react-aria-components";

import "./Tooltip.css";

interface TooltipProps extends RACTooltipProps {
    children: ReactNode;
}

const Tooltip = ({ children, ...rest }: TooltipProps) => {
    return (
        <RACTooltip {...rest} className="hd-tooltip">
            {children}
        </RACTooltip>
    );
};

export default Tooltip;
