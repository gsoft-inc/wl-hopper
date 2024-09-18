import clsx from "clsx";
import { forwardRef, type ComponentProps, type ForwardedRef } from "react";

import { useLocalizedString } from "../../i18n/index.ts";
import { Text } from "../../typography/index.ts";
import { cssModule } from "../../utils/index.ts";

import styles from "./RemainingCharacterCount.module.css";

export interface RemainingCharacterCountProps extends ComponentProps<typeof Text> {
    count: number;
    isDisabled?: boolean;
    isInvalid?: boolean;
}

function RemainingCharacterCount(props: RemainingCharacterCountProps, ref: ForwardedRef<HTMLElement>) {
    const { count, isDisabled, isInvalid, ...textProps } = props;
    const stringFormatter = useLocalizedString();

    const accessibilityString = stringFormatter.format("Input.charactersLeft", { charLeft: count });

    const { className, ...otherTextProps } = textProps;

    const classNames = clsx(cssModule(styles, "hop-RemainingCharacterCount"), className);

    return (
        <Text
            {...otherTextProps}
            ref={ref}
            aria-label={accessibilityString}
            className={classNames}
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
 * The RemainingCharacterCount component displays the number of characters remaining within a Text component.
 *
 * [View Documentation](TODO)
 */
const _RemainingCharacterCount = forwardRef<HTMLElement, RemainingCharacterCountProps>(RemainingCharacterCount);
_RemainingCharacterCount.displayName = "Footer";

export { _RemainingCharacterCount as RemainingCharacterCount };
