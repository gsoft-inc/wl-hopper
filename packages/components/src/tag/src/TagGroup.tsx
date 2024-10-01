import {
    type ResponsiveProp,
    type StyledComponentProps,
    useResponsiveValue,
    useStyledSystem
} from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, type ForwardedRef, forwardRef } from "react";
import {
    FieldErrorContext as RACFieldErrorContext,
    TagGroup as RACTagGroup,
    type TagGroupProps as RACTagGroupProps,
    useContextProps
} from "react-aria-components";

import { ErrorMessageContext } from "../../ErrorMessage/index.ts";
import { HelperMessageContext } from "../../HelperMessage/index.ts";
import { LabelContext } from "../../typography/Label/index.ts";
import { type NecessityIndicator, SlotProvider, cssModule } from "../../utils/index.ts";

import type { TagSize, TagVariant } from "./Tag.tsx";
import { TagContext } from "./TagContext.ts";
import { TagGroupContext } from "./TagGroupContext.ts";
import { TagListContext } from "./TagListContext.ts";

import styles from "./TagGroup.module.css";

export const GlobalTagGroupCssSelector = "hop-TagGroup";

export interface TagGroupProps extends StyledComponentProps<RACTagGroupProps> {
    /**
     * Whether the tags are invalid or not.
     */
    isInvalid?: boolean;
    /**
     * Whether the required state should be shown as an asterisk or a label, which would display (Optional) on all non required field labels.
     */
    necessityIndicator?: NecessityIndicator;
    /**
     * A tag can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<TagSize>;
    /**
     * The visual style of the TagGroup.
     * @default "neutral"
     */
    variant?: TagVariant;
}

function TagGroup(props: TagGroupProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, TagGroupContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        isInvalid = false,
        necessityIndicator,
        style: styleProp,
        size: sizeProp,
        variant,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = clsx(
        className,
        GlobalTagGroupCssSelector,
        stylingProps.className,
        cssModule(
            styles,
            "hop-TagGroup",
            size
        )
    );

    const style: CSSProperties = {
        ...stylingProps.style,
        ...styleProp
    };

    return (
        <SlotProvider
            values={[
                [LabelContext, {
                    className: styles["hop-TagGroup__label"],
                    necessityIndicator
                }],
                [TagListContext, {
                    className: styles["hop-TagGroup__list"]
                }],
                [TagContext, {
                    className: styles["hop-TagGroup__tag"],
                    isInvalid,
                    size: size,
                    variant: variant
                }],
                [ErrorMessageContext, {
                    className: styles["hop-TagGroup__error-message"],
                    hideIcon: true
                }],
                [HelperMessageContext, {
                    className: styles["hop-TagGroup__helper-message"],
                    hideIcon: true
                }],
                [RACFieldErrorContext, {
                    isInvalid: isInvalid,
                    validationErrors: [] as never[],
                    validationDetails: {} as never
                }]
            ]}
        >
            <RACTagGroup
                {...otherProps}
                ref={ref}
                className={classNames}
                style={style}
            >
                {children}
            </RACTagGroup>
        </SlotProvider>
    );
}

/**
 * A versatile TagGroup component for categorizing items.
 *
 * [View Documentation](TODO)
 */
const _TagGroup = forwardRef<HTMLDivElement, TagGroupProps>(TagGroup);
_TagGroup.displayName = "TagGroup";

export { _TagGroup as TagGroup };
