import { useResponsiveValue, useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { mergeRefs } from "@react-aria/utils";
import { forwardRef, useCallback, useRef, type ForwardedRef, type MouseEventHandler } from "react";
import { useContextProps, Group as RACGroup, type GroupProps as RACGroupProps, composeRenderProps, InputContext, useSlottedContext } from "react-aria-components";

import { SlotProvider, composeClassnameRenderProps, cssModule } from "../../utils/index.ts";

import { InputGroupContext } from "./InputGroupContext.ts";

import styles from "./InputGroup.module.css";

export const GlobalInputGroupCssSelector = "hop-InputGroup";

export interface InputGroupProps extends StyledComponentProps<RACGroupProps> {
    /**
     * The size of the input group.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;
    /**
     * Whether or not the button takes up the width of its container.
     */
    isFluid?: ResponsiveProp<boolean>;
}

function InputGroup(props: InputGroupProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, InputGroupContext);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputContext = useSlottedContext(InputContext);
    const mergedRefs = inputContext?.ref ? mergeRefs(inputRef, inputContext?.ref) : inputRef;

    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        style: styleProp,
        children,
        size:sizeProp,
        isFluid: isFluidProp,
        onMouseDown,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";
    const isFluid = useResponsiveValue(isFluidProp) ?? false;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalInputGroupCssSelector,
        cssModule(
            styles,
            "hop-InputGroup",
            isFluid && "fluid",
            size
        ),
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const handleMouseDown: MouseEventHandler<HTMLElement> = useCallback(e => {
        onMouseDown?.(e);

        if (inputRef.current) {
            // forwards the focus to the input element when clicking on the input group.
            inputRef.current.focus();
        }

        // This ensure that the input does not lose focus when clicking on the input group.
        e.preventDefault();
    }, [onMouseDown]);

    return (
        <SlotProvider values={[
            [InputContext, {
                ...inputContext,
                ref: mergedRefs,
                className: composeClassnameRenderProps(inputContext?.className, styles["hop-InputGroup__input"])
            }]
        ]}
        >
            <RACGroup
                {...otherProps}
                onMouseDown={handleMouseDown}
                ref={ref}
                className={classNames}
                style={style}
            >
                {children}
            </RACGroup>
        </SlotProvider>
    );
}

/**
 * An input group combines an input component with addons.
 *
 * [View Documentation](TODO)
 */
const _InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(InputGroup);
_InputGroup.displayName = "InputGroup";

export { _InputGroup as InputGroup };
