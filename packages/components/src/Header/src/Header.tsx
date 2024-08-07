import { useStyledSystem, type StyledComponentProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, forwardRef, type ForwardedRef } from "react";
import { Header as RACHeader, useContextProps } from "react-aria-components";

import type { BaseComponentProps } from "../../utils/index.ts";

import { HeaderContext } from "./HeaderContext.ts";

export const GlobalHeaderCssSelector = "hop-Header";

export interface HeaderProps extends StyledComponentProps<BaseComponentProps> {}

function Header(props: HeaderProps, ref: ForwardedRef<HTMLElement>) {
    [props, ref] = useContextProps(props, ref, HeaderContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style,
        slot,
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        GlobalHeaderCssSelector,
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    return (
        <RACHeader
            {...otherProps}
            ref={ref}
            className={classNames}
            style={mergedStyles}
            slot={slot || undefined}
        >
            {children}
        </RACHeader>
    );
}

/**
 * The Header component represents a header within a Hopper container such as a Modal or Section.
 *
 * [View Documentation](TODO)
 */
const _Header = forwardRef<HTMLElement, HeaderProps>(Header);
_Header.displayName = "Header";

export { _Header as Header };
