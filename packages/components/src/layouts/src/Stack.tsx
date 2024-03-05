import { forwardRef, type Ref } from "react";
import { Flex, type FlexProps } from "./Flex.tsx";

export interface StackProps extends Omit<FlexProps, "direction"> {
    /**
     * Whether or not to reverse the order of the elements.
     */
    reverse?: boolean;
}

function Stack(props: StackProps, ref: Ref<HTMLDivElement>) {
    const {
        reverse,
        gap = "stack-md",
        ...rest
    } = props;

    return (
        <Flex
            ref={ref}
            direction={reverse ? "column-reverse" : "column"}
            gap={gap}
            {...rest}
        />
    );
}

/**
 * The Stack pattern is a layout primitive that can be used to stack elements in the vertical direction and apply a space between them.
 *
 * [View Documentation](TODO)
 */
const _Stack = forwardRef<HTMLDivElement, StackProps>(Stack);
_Stack.displayName = "Stack";

export { _Stack as Stack };
