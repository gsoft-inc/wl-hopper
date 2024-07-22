import { forwardRef, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import { FormContext } from "./FormContext.ts";

import styles from "./Form.module.css";

export const GlobalFormCssSelector = "hop-Form";

export interface FormProps {
}

function Form(props:FormProps, ref: ForwardedRef<any>) {
    [props, ref] = useContextProps(props, ref, FormContext);

    return (
        <div></div>
    );
}

/**
 * TODO: tagline
 *
 * [View Documentation](TODO)
 */
const _Form = forwardRef<any, FormProps>(Form);
_Form.displayName = "Form";

export { _Form as Form };
