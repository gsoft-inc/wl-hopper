import { IconContext } from "@hopper-ui/icons";
import { useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type CSSProperties, type ForwardedRef } from "react";
import { Provider, ToggleButton, useContextProps, type Key } from "react-aria-components";

import { Text, TextContext } from "../../typography/index.ts";
import { cssModule, type BaseComponentDOMProps } from "../../utils/index.ts";

import { SegmentedControlItemContext } from "./SegmentedControlItemContext.ts";

import styles from "./SegmentedControlItem.module.css";

export const GlobalSegmentedControlItemCssSelector = "hop-SegmentedControlItem";

export type SegmentedControlItemSize = "sm" | "md";

export interface SegmentedControlItemProps extends Omit<StyledComponentProps<BaseComponentDOMProps>, "id"> {
    /**
     * The id of the item, matching the value used in SegmentedControl's `selectedKey` prop.
     */
    id: Key;
    /**
     * Whether the item is disabled or not.
     */
    isDisabled?: boolean;
    /**
     * The size of the item.
     * * @default "sm"
     */
    size?: ResponsiveProp<SegmentedControlItemSize>;
}

const SegmentedControlItem = (props: SegmentedControlItemProps, ref: ForwardedRef<HTMLButtonElement>) => {
    [props, ref] = useContextProps(props, ref, SegmentedControlItemContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style,
        slot,
        size = "sm",
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        GlobalSegmentedControlItemCssSelector,
        cssModule(
            styles,
            "hop-SegmentedControlItem",
            size
        ),
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...style,
        ...stylingProps.style
    };

    return (
        <ToggleButton
            {...otherProps}
            ref={ref}
            className={classNames}
            style={mergedStyles}
            slot={slot ?? undefined}
            data-key={props.id}
        >
            <Provider
                values={[
                    [IconContext, {
                        size
                    }],
                    [TextContext, {
                        size: "sm"
                    }]
                ]}
            >
                {typeof children === "string" ? <Text>{children}</Text> : children}
            </Provider>
        </ToggleButton>
    );
};

/**
 * A SegmentedControlItem represents an option within a SegmentedControl.
 *
 * [View Documentation](TODO)
 */
const _SegmentedControlItem = forwardRef<HTMLButtonElement, SegmentedControlItemProps>(SegmentedControlItem);
_SegmentedControlItem.displayName = "SegmentedControlItem";

export { _SegmentedControlItem as SegmentedControlItem };

