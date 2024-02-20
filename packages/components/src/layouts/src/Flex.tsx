import { Div, type DivProps } from "@hopper-ui/styled-system";
import { forwardRef, type Ref } from "react";

export interface FlexProps
    extends Omit<DivProps,
    | "flexDirection"
    | "flexWrap"
    | "alignItems"
    | "justifyContent"
    | "flexBasis"
    | "flexGrow"
    | "flexShrink"
    > {
    /**
     * The flex direction of the container. Can be row, column, row-reverse or column-reverse.
     */
    direction?: DivProps["flexDirection"];

    /**
     * Whether to wrap the flex items. The value is a boolean.
     */
    wrap?: DivProps["flexWrap"];

    /**
     * An alias for the css align-items property.
     */
    align?: DivProps["alignItems"];

    /**
     * An alias for the css justify-content property.
     */
    justify?: DivProps["justifyContent"];

    /**
     * An alias for the css flex-basis property.
     */
    basis?: DivProps["flexBasis"];

    /**
     * An alias for the css flex-grow property.
     */
    grow?: DivProps["flexGrow"];

    /**
     * An alias for the css flex-shrink property.
     */
    shrink?: DivProps["flexShrink"];
}

function Flex(props: FlexProps, ref: Ref<HTMLDivElement>) {
    const {
        display = "flex",
        gap = "stack-md",
        direction,
        wrap,
        align,
        justify,
        basis,
        grow,
        shrink,
        ...otherProps
    } = props;

    return (
        <Div
            ref={ref}
            display={display}
            flexDirection={direction}
            flexWrap={wrap}
            alignItems={align}
            justifyContent={justify}
            flexBasis={basis}
            flexGrow={grow}
            flexShrink={shrink}
            gap={gap}
            {...otherProps}
        />
    );
}

/**
 * The Flex component is used to create a flex container and provides some shortcuts for the flex properties.
 *
 * [View Documentation](TODO)
 */
const _Flex = forwardRef<HTMLDivElement, FlexProps>(Flex);
_Flex.displayName = "Flex";

export { _Flex as Flex };
