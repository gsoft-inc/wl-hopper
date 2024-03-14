import { forwardRef, type ForwardedRef } from "react";
import { CheckboxContext } from "./CheckboxContext.ts";
import { useContextProps } from "react-aria-components";

import styles from "./Checkbox.module.css";

export const GlobalCheckboxCssSelector = "hop-Checkbox";

export interface CheckboxProps {
}

function Checkbox(props:CheckboxProps, ref: ForwardedRef<any>) {
    [props, ref] = useContextProps(props, ref, CheckboxContext);

    return (
        <div></div>
    );
}

/**
 * TODO: tagline
 *
 * [View Documentation](TODO)
 */
const _Checkbox = forwardRef<any, CheckboxProps>(Checkbox);
_Checkbox.displayName = "Checkbox";

export { _Checkbox as Checkbox };
