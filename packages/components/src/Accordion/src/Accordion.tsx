import { forwardRef, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import { AccordionContext } from "./AccordionContext.ts";

import styles from "./Accordion.module.css";

export const GlobalAccordionCssSelector = "hop-Accordion";

export interface AccordionProps {
}

function Accordion(props:AccordionProps, ref: ForwardedRef<any>) {
    [props, ref] = useContextProps(props, ref, AccordionContext);

    return (
        <div></div>
    );
}

/**
 * TODO: tagline
 *
 * [View Documentation](TODO)
 */
const _Accordion = forwardRef<any, AccordionProps>(Accordion);
_Accordion.displayName = "Accordion";

export { _Accordion as Accordion };
