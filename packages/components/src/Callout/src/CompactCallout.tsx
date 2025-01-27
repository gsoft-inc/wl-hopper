import { useStyledSystem, type StyledComponentProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type CSSProperties, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import { ButtonContext, CloseButton } from "../../buttons/index.ts";
import { ContentContext } from "../../layout/index.ts";
import { LinkContext } from "../../Link/index.ts";
import { cssModule, SlotProvider, type BaseComponentDOMProps } from "../../utils/index.ts";

import type { CalloutProps } from "./Callout.tsx";
import { CompactCalloutContext } from "./CompactCalloutContext.ts";

import styles from "./CompactCallout.module.css";

export const GlobalCompactCalloutCssSelector = "hop-CompactCallout";

export interface CompactCalloutProps extends StyledComponentProps<BaseComponentDOMProps>, Pick<CalloutProps, "variant" | "fillStyle" | "onClose"> {}

const CompactCallout = (props: CompactCalloutProps, ref: ForwardedRef<HTMLDivElement>) => {
    [props, ref] = useContextProps(props, ref, CompactCalloutContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style,
        slot,
        onClose,
        fillStyle = "border",
        variant = "information",
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        GlobalCompactCalloutCssSelector,
        cssModule(
            styles,
            "hop-CompactCallout",
            variant,
            fillStyle === "subtleFill" && "subtle-fill"
        ),
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...style,
        ...stylingProps.style
    };

    return (
        <div
            ref={ref}
            className={classNames}
            style={mergedStyles}
            slot={slot ?? undefined}
            {...otherProps}
        >
            <SlotProvider
                values={[
                    [ContentContext, {
                        className: styles["hop-CompactCallout__content"]
                    }],
                    [ButtonContext, {
                        className: styles["hop-CompactCallout__button"]
                    }],
                    [LinkContext, {
                        className: styles["hop-CompactCallout__link"]
                    }]
                ]}
            >
                {children}
                {onClose && <CloseButton className={styles["hop-CompactCallout__dismiss"]} onPress={onClose} />}
            </SlotProvider>
        </div>
    );
};

/**
 * A more streamlined version of the Callout component that is designed to be used in more compact spaces.
 *
 * [View Documentation](https://hopper.workleap.design/components/Callout)
 */
const _CompactCallout = forwardRef<HTMLDivElement, CompactCalloutProps>(CompactCallout);
_CompactCallout.displayName = "CompactCallout";

export { _CompactCallout as CompactCallout };
