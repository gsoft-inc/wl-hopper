import { useStyledSystem, type StyledComponentProps } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { composeRenderProps, UNSTABLE_DisclosurePanel as RACDisclosurePanel, useContextProps, type DisclosurePanelProps as RACDisclosurePanelProps } from "react-aria-components";

import { FormStyleContext } from "../../Form/index.ts";
import { TextContext } from "../../typography/index.ts";
import { composeClassnameRenderProps, cssModule, ensureTextWrapper, SlotProvider } from "../../utils/index.ts";

import { DisclosurePanelContext } from "./DisclosurePanelContext.ts";

import styles from "./DisclosurePanel.module.css";

export const GlobalDisclosurePanelCssSelector = "hop-DisclosurePanel";

export interface DisclosurePanelProps extends StyledComponentProps<RACDisclosurePanelProps> {
}

function DisclosurePanel(props: DisclosurePanelProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, DisclosurePanelContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style: styleProp,
        ...otherProps
    } = ownProps;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalDisclosurePanelCssSelector,
        cssModule(
            styles,
            "hop-DisclosurePanel"
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
        <RACDisclosurePanel
            ref={ref}
            className={classNames}
            style={style}
            {...otherProps}
        >
            <SlotProvider values={[
                [TextContext, { size: "sm", className: styles["hop-DisclosurePanel__text"] }],
                [FormStyleContext, { size: "sm" }]
            ]}
            >
                {ensureTextWrapper(children)}
            </SlotProvider>
        </RACDisclosurePanel>
    );
}

/**
 * The DisclosurePanel is a collapsible container that displays detailed content when expanded, helping organize information efficiently.
 *
 * [View Documentation](TODO)
 */
const _DisclosurePanel = forwardRef<HTMLDivElement, DisclosurePanelProps>(DisclosurePanel);
_DisclosurePanel.displayName = "DisclosurePanel";

export { _DisclosurePanel as DisclosurePanel };
