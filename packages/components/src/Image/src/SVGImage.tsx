import { type ResponsiveProp, type StyledSystemProps, useResponsiveValue, useStyledSystem } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, type ElementType, type ForwardedRef, forwardRef, type HTMLProps } from "react";
import { useContextProps } from "react-aria-components";

import type { AccessibleSlotProps, BaseComponentDOMProps } from "../../utils/index.ts";

import { SVGImageContext } from "./SVGImageContext.ts";

export const GlobalSVGImageCssSelector = "hop-SVGImage";

export interface SVGImageProps extends
    StyledSystemProps,
    AccessibleSlotProps,
    Omit<BaseComponentDOMProps, "children">,
    Omit<HTMLProps<SVGSVGElement>, "color" | "slot" | "content" | "height" | "width" | "src"> {
    /**
     * An SVG as a component.
     */
    src?: ResponsiveProp<ElementType>;
}

function SVGImage(props: SVGImageProps, ref: ForwardedRef<SVGSVGElement>) {
    [props, ref] = useContextProps(props, ref, SVGImageContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        style,
        src,
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        className,
        GlobalSVGImageCssSelector,
        stylingProps.className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    const SvgComponent = useResponsiveValue(src);

    if (!SvgComponent) {
        console.error("SVGImage component expects src");

        return null;
    }

    return <SvgComponent
        {...otherProps}
        className={classNames}
        style={mergedStyles}
        ref={ref}
    />;
}

/**
 * An SVGImage component that can be used to display SVGImages.
 *
 * [View Documentation](TODO)
 */
const _SVGImage = forwardRef<SVGSVGElement, SVGImageProps>(SVGImage);
_SVGImage.displayName = "SVGImage";

export { _SVGImage as SVGImage };
