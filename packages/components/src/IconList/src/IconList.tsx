import { useContextProps } from "react-aria-components";
import styles from "./IconList.module.css";
import { IconListContext } from "./IconListContext.ts";
import { forwardRef, type ForwardedRef, type CSSProperties } from "react";
import type { BaseComponentProps } from "../../utils/index.ts";
import clsx from "clsx";
import { useStyledSystem, type StyledSystemProps, type ResponsiveProp } from "@hopper-ui/styled-system";
import { IconContext } from "@hopper-ui/icons";
import { SlotProvider } from "../../utils/index.ts";

export const GlobalIconListCssSelector = "hop-IconList";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultIconListSlot = "icon";

export interface IconListProps extends StyledSystemProps, BaseComponentProps {
    /**
    * The size of the icon.
    */
    size?: ResponsiveProp<"sm" | "md" | "lg">;
}

function IconList(props:IconListProps, ref: ForwardedRef<HTMLSpanElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultIconListSlot }, ref, IconListContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const { children, style, className, slot, size, ...otherProps } = ownProps;

    const classNames = clsx(
        className,
        GlobalIconListCssSelector,
        styles["hop-IconList"],
        stylingProps.className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    return (
        <span
            {...otherProps}
            ref={ref}
            className={classNames}
            style={mergedStyles}
            slot={slot ?? undefined}
        >
            <SlotProvider values={[
                [IconContext, {
                    size
                }]
            ]}
            >
                {children}
            </SlotProvider>
        </span>
    );
}

/**
 * A component that allows you to render a list of icons
 *
 * [View Documentation](TODO)
 */
const _IconList = forwardRef<HTMLSpanElement, IconListProps>(IconList);
_IconList.displayName = "IconList";

export { _IconList as IconList };
