import { useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, useEffect, useMemo, useState, type CSSProperties, type ForwardedRef } from "react";
import { Provider, ToggleButtonGroup, useContextProps, type Key } from "react-aria-components";

import { cssModule, type BaseComponentDOMProps } from "../../utils/index.ts";

import { SegmentedControlContext } from "./SegmentedControlContext.ts";
import type { SegmentedControlItemSize } from "./SegmentedControlItem.tsx";
import { SegmentedControlItemContext } from "./SegmentedControlItemContext.ts";

import styles from "./SegmentedControl.module.css";

export const GlobalSegmentedControlCssSelector = "hop-SegmentedControl";

export interface SegmentedControlProps extends StyledComponentProps<BaseComponentDOMProps> {
    /**
    *  Whether the segmented control is disabled.
    */
    isDisabled?: boolean;
    /**
     * The id of the currently selected item (controlled).
     */
    selectedKey?: Key;
    /**
     * The id of the initial selected item (uncontrolled).
     */
    defaultSelectedKey?: Key;
    /**
     * Handler that is called when the selection changes.
     */
    onSelectionChange?: (id: Key) => void;
    /**
     * The size of the controls.
     * * @default "sm"
     */
    size?: ResponsiveProp<SegmentedControlItemSize>;
}

const SegmentedControl = (props: SegmentedControlProps, ref: ForwardedRef<HTMLDivElement>) => {
    [props, ref] = useContextProps(props, ref, SegmentedControlContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style,
        slot,
        defaultSelectedKey,
        selectedKey,
        onSelectionChange,
        ...otherProps
    } = ownProps;

    const [selected, setSelected] = useState<Key | undefined>(defaultSelectedKey ?? selectedKey);

    const classNames = clsx(
        GlobalSegmentedControlCssSelector,
        cssModule(
            styles,
            "hop-SegmentedControl"
        ),
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...style,
        ...stylingProps.style
    };

    const onChange = (values: Set<Key>) => {
        const [firstKey] = values;

        if (!firstKey) {
            return;
        }

        setSelected(firstKey);
        onSelectionChange?.(firstKey);
    };

    const selectedKeys = useMemo(() => {
        if (onSelectionChange) {
            return selectedKey != null ? [selectedKey] : undefined;
        }

        return selected ? [selected] : undefined;
    }, [onSelectionChange, selectedKey, selected]);

    useEffect(() => {
        const container = ref.current;

        // Code to create sliding animation background between buttons when selecting a new value
        if (container && (selectedKeys || defaultSelectedKey)) {
            const { childNodes } = container;

            const childNodesArray = Array.from(childNodes) as HTMLElement[];

            const [firstKey] = selectedKeys ?? [];
            const key = firstKey ?? defaultSelectedKey;
            const selectedNode = childNodesArray.find(x => x.getAttribute("data-key") === key);

            if (!selectedNode) {
                return;
            }

            container.style.setProperty("--hop-SegmentedControl-item-width", `${selectedNode.offsetWidth}px`);
            container.style.setProperty("--hop-SegmentedControl-item-offset", `${selectedNode.offsetLeft}px`);
        }
    }, [ref, selectedKeys, defaultSelectedKey]);

    return (
        <ToggleButtonGroup
            ref={ref}
            className={classNames}
            style={mergedStyles}
            slot={slot ?? undefined}
            selectedKeys={selectedKeys}
            defaultSelectedKeys={defaultSelectedKey != null ? [defaultSelectedKey] : undefined}
            orientation="horizontal"
            onSelectionChange={onChange}
            {...otherProps}
        >
            <Provider
                values={[
                    [SegmentedControlItemContext, otherProps]
                ]}
            >
                {children}
            </Provider>
        </ToggleButtonGroup>
    );
};

/**
 * Segmented control displays multiple contextually or conceptually related action or option stacked in a horizontal row.
 *
 * [View Documentation](TODO)
 */
const _SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(SegmentedControl);
_SegmentedControl.displayName = "SegmentedControl";

export { _SegmentedControl as SegmentedControl };
