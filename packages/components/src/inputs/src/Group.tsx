import { useStyledSystem, type StyledComponentProps } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { useContextProps, Group as RACGroup, type GroupProps as RACGroupProps, composeRenderProps, InputContext } from "react-aria-components";

import { ButtonContext } from "../../buttons/index.ts";
import { SlotProvider, composeClassnameRenderProps, cssModule } from "../../utils/index.ts";

import { GroupContext } from "./GroupContext.ts";

import styles from "./Group.module.css";

export const GlobalGroupCssSelector = "hop-Group";

export interface GroupProps extends StyledComponentProps<RACGroupProps> {
    size?: "sm" | "md";
}

function Group(props: GroupProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, GroupContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        style: styleProp,
        children,
        size = "md",
        ...otherProps
    } = ownProps;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalGroupCssSelector,
        cssModule(
            styles,
            "hop-Group",
            size
        ),
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    return (
        <SlotProvider values={[
            [InputContext, { className: styles["hop-Group__input"] }],
            [ButtonContext, { variant: "ghost-secondary", className: styles["hop-Group__button"], size }]
        ]}
        >
            <RACGroup
                {...otherProps}
                className={classNames}
                style={style}
            >
                {children}
            </RACGroup>
        </SlotProvider>
    );
}

/**
 * TODO: tagline
 *
 * [View Documentation](TODO)
 */
const _Group = forwardRef<HTMLDivElement, GroupProps>(Group);
_Group.displayName = "Group";

export { _Group as Group };
