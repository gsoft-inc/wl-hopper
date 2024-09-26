import { useStyledSystem, type StyledSystemProps } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { mergeProps } from "react-aria";
import { composeRenderProps } from "react-aria-components";

import { useLocalizedString } from "../../i18n/index.ts";
import { Text } from "../../typography/index.ts";
import { composeClassnameRenderProps, cssModule, useRenderProps, type RenderProps } from "../../utils/index.ts";

import styles from "./RemainingCharacterCount.module.css";


interface RemainingCharacterCountRenderProps {
    isDisabled: boolean;
    isInvalid: boolean;
}

export interface RemainingCharacterCountProps extends
    StyledSystemProps,
    Omit<RenderProps<RemainingCharacterCountRenderProps>, "children">
{
    count: number;
    isDisabled?: boolean;
    isInvalid?: boolean;
    slot?: string;
}

export const GlobalRemainingCharacterCountCssSelector = "hop-RemainingCharacterCount";

function RemainingCharacterCount(props: RemainingCharacterCountProps, ref: ForwardedRef<HTMLElement>) {
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const { className, style, count, isDisabled, isInvalid, ...textProps } = ownProps;
    const stringFormatter = useLocalizedString();

    const accessibilityString = stringFormatter.format("Input.charactersLeft", { charLeft: count });

    const classNames = composeClassnameRenderProps(
        className,
        GlobalRemainingCharacterCountCssSelector,
        cssModule(styles, "hop-RemainingCharacterCount")
    );

    const mergedStyles = composeRenderProps(style, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const renderProps = useRenderProps<RemainingCharacterCountRenderProps>({
        ...props,
        className: classNames,
        style: mergedStyles,
        values: {
            isDisabled: isDisabled || false,
            isInvalid: isInvalid || false
        }
    });

    return (
        <Text
            {...mergeProps(textProps, renderProps)}
            ref={ref}
            aria-label={accessibilityString}
            data-disabled={isDisabled || undefined}
            data-invalid={isInvalid || undefined}
            role="status"
            size="xs"
        >
            {count}
        </Text>
    );
}

/**
 * The RemainingCharacterCount component displays the number of characters remaining.
 *
 * [View Documentation](TODO)
 */
const _RemainingCharacterCount = forwardRef<HTMLElement, RemainingCharacterCountProps>(RemainingCharacterCount);
_RemainingCharacterCount.displayName = "RemainingCharacterCount";

export { _RemainingCharacterCount as RemainingCharacterCount };
