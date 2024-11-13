import type { ReactNode } from "react";
import { Tooltip as RACTooltip, TooltipTrigger } from "react-aria-components";

import "./Tooltip.css";

interface TooltipProps {
    children: ReactNode;
    title: string;
}

const Tooltip = ({ title, children }: TooltipProps) => {
    return (
        <TooltipTrigger>
            {children}
            <RACTooltip className="hd-tooltip">
                <p className="hd-tooltip_title">{title}</p>
            </RACTooltip>
        </TooltipTrigger>
    );
};

export default Tooltip;
