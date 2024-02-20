import { forwardRef, type Ref } from "react";
import { Stack, type StackProps } from "./Stack.tsx";

export type InlineProps = StackProps;

function Inline(props: InlineProps, ref: Ref<HTMLDivElement>) {
    const {
        align = "center",
        direction = "row",
        ...rest
    } = props;

    return (
        <Stack
            ref={ref}
            align={align}
            direction={direction}
            {...rest}
        />
    );
}

/**
 * The Inline component is a wrapper around the stack component that sets the direction property to horizontal, and centers the elements vertically.
 *
 * [View Documentation](TODO)
 */
const _Inline = forwardRef<HTMLDivElement, InlineProps>(Inline);
_Inline.displayName = "Inline";

export { _Inline as Inline };
