import { DismissIcon } from "@hopper-ui/icons";
import {
    type StyledComponentProps,
    useStyledSystem
} from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef } from "react";
import {
    Button as RACButton,
    type ButtonProps as RACButtonProps,
    composeRenderProps,
    useContextProps
} from "react-aria-components";

import { useLocalizedString } from "../../i18n/index.ts";
import {
    composeClassnameRenderProps,
    cssModule
} from "../../utils/index.ts";

import { ClearButtonContext } from "./ClearButtonContext.ts";

import styles from "./ClearButton.module.css";

export const GlobalClearButtonCssSelector = "hop-ClearButton";

export interface ClearButtonProps extends StyledComponentProps<Omit<RACButtonProps, "children">> {}

function ClearButton(props: ClearButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
    [props, ref] = useContextProps(props, ref, ClearButtonContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const stringFormatter = useLocalizedString();

    const {
        "aria-label": ariaLabel = stringFormatter.format("ClearButton.clearAriaLabel"),
        className,
        isDisabled,
        style: styleProp,
        ...otherProps
    } = ownProps;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalClearButtonCssSelector,
        cssModule(
            styles,
            "hop-ClearButton"
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
        <RACButton
            ref={ref}
            className={classNames}
            style={style}
            isDisabled={isDisabled}
            aria-label={ariaLabel}
            {...otherProps}
        >
            <DismissIcon size="sm" />
        </RACButton>
    );
}

/**
 * ClearButtons are used to initialize an action. ClearButton labels express what action will occur when the user interacts with it.
 *
 * [View Documentation](TODO)
 */
const _ClearButton = forwardRef<HTMLButtonElement, ClearButtonProps>(ClearButton);

_ClearButton.displayName = "ClearButton";

export { _ClearButton as ClearButton };
