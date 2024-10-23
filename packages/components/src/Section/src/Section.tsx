import { useStyledSystem, type StyledComponentProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type CSSProperties, type ForwardedRef, type NamedExoticComponent } from "react";
import { Section as RACSection, useContextProps, type SectionProps as RACSectionProps } from "react-aria-components";

import { SectionContext } from "./SectionContext.ts";

export const GlobalSectionCssSelector = "hop-Section";

export interface SectionProps<T> extends StyledComponentProps<RACSectionProps<T>> {}

function Section<T extends object>(props: SectionProps<T>, ref: ForwardedRef<HTMLElement>) {
    [props, ref] = useContextProps(props, ref, SectionContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style,
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        GlobalSectionCssSelector,
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    return (
        <RACSection
            ref={ref}
            className={classNames}
            style={mergedStyles}
            {...otherProps}
        >
            {children}
        </RACSection>
    );
}

/**
 * A Section serves as a versatile container component, encapsulating an HTML section element to facilitate the organization and grouping of content.
 *
 * [View Documentation](TODO)
 */
const _Section = forwardRef(Section) as <T>(
    props: SectionProps<T> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof Section>;
(_Section as NamedExoticComponent).displayName = "Section";

export { _Section as Section };
