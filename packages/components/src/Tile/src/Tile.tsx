import { CheckmarkIcon } from "@hopper-ui/icons";
import { useStyledSystem, type StyledComponentProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type CSSProperties, type ForwardedRef } from "react";
import { Provider, ToggleButton, useContextProps, type Key } from "react-aria-components";

import { Text, TextContext } from "../../typography/index.ts";
import { cssModule, type BaseComponentDOMProps } from "../../utils/index.ts";

import { TileContext } from "./TileContext.ts";

import styles from "./Tile.module.css";

export const GlobalTileCssSelector = "hop-Tile";

export type TileSize = "sm" | "md";

export interface TileProps extends
    Omit<StyledComponentProps<BaseComponentDOMProps>, "id"> {
    /**
     * The id of the Tile, matching the values used in TileGroup's `selectedKeys` prop.
     */
    id: Key;
    /**
     * Whether the Tile is disabled or not.
     */
    isDisabled?: boolean;
}

const Tile = (props: TileProps, ref: ForwardedRef<HTMLButtonElement>) => {
    [props, ref] = useContextProps(props, ref, TileContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style,
        isDisabled,
        slot,
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        GlobalTileCssSelector,
        cssModule(
            styles,
            "hop-Tile"
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
            isDisabled={isDisabled}
            ref={ref}
            className={classNames}
            style={mergedStyles}
            slot={slot ?? undefined}
        >
            <Provider
                values={[
                    [TextContext, {
                        size: "md",
                        className: styles["hop-Tile__text"]
                    }]
                ]}
            >
                {typeof children === "string" ? <Text>{children}</Text> : children}
                <CheckmarkIcon className={styles["hop-Tile__icon"]} />
            </Provider>
        </ToggleButton>
    );
};

/**
 * A tile groups information into an interactive element to let users browse and take action on a group of related items.
 *
 * [View Documentation](https://hopper.workleap.design/components/Tile)
 */
const _Tile = forwardRef<HTMLButtonElement, TileProps>(Tile);
_Tile.displayName = "Tile";

export { _Tile as Tile };

