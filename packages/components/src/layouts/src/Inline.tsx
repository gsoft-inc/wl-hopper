import { forwardRef, type Ref } from "react";
import { Flex, type FlexProps } from "./Flex.tsx";

export interface InlineProps extends Omit<FlexProps, "direction"> {
    /**
     * Whether or not to reverse the order of the elements.
     */
    reverse?: boolean;
}

function Inline(props: InlineProps, ref: Ref<HTMLDivElement>) {
    const {
        alignItems = "center",
        gap = "stack-md",
        wrap = true,
        reverse,
        ...rest
    } = props;

    return (
        <Flex
            ref={ref}
            alignItems={alignItems}
            direction={reverse ? "row-reverse" : "row"}
            gap={gap}
            wrap={wrap}
            {...rest}
        />
    );
}

/**
 * The Inline pattern is a layout primitive that can be used to stack elements in the horizontal direction and apply a space between them.
 *
 * [View Documentation](TODO)
 */
const _Inline = forwardRef<HTMLDivElement, InlineProps>(Inline);
_Inline.displayName = "Inline";

export { _Inline as Inline };
