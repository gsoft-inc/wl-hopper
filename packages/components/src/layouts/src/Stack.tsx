import { Div, type DivProps } from "@hopper-ui/styled-system";
import { forwardRef, type Ref } from "react";

export interface StackProps
    extends Omit<DivProps,
    | "flexDirection"
    | "alignItems"
    | "justifyContent"
    > {
    /**
     * The flex direction of the container. Can be row, column, row-reverse or column-reverse.
     */
    direction?: DivProps["flexDirection"];

    /**
     * An alias for the css align-items property.
     */
    align?: DivProps["alignItems"];

    /**
     * An alias for the css justify-content property.
     */
    justify?: DivProps["justifyContent"];
}

function Stack(props: StackProps, ref: Ref<HTMLDivElement>) {
    const {
        display = "flex",
        direction = "column",
        gap = "stack-md",
        ...rest
    } = props;

    return (
        <Div
            ref={ref}
            display={display}
            flexDirection={direction}
            gap={gap}
            {...rest}
        />
    );
}

/**
 * The Stack pattern is a layout primitive that can be used to create a vertical or horizontal stack of elements.
 *
 * [View Documentation](TODO)
 */
const _Stack = forwardRef<HTMLDivElement, StackProps>(Stack);
_Stack.displayName = "Stack";

export { _Stack as Stack };
