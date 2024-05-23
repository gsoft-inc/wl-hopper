import { forwardRef, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import { HeadingContext } from "./HeadingContext.ts";

import styles from "./Heading.module.css";

export const GlobalHeadingCssSelector = "hop-Heading";

export interface HeadingProps {
}

function Heading(props:HeadingProps, ref: ForwardedRef<any>) {
    [props, ref] = useContextProps(props, ref, HeadingContext);

    return (
        <div></div>
    );
}

/**
 * TODO: tagline
 *
 * [View Documentation](TODO)
 */
const _Heading = forwardRef<any, HeadingProps>(Heading);
_Heading.displayName = "Heading";

export { _Heading as Heading };
