import { useResponsiveValue, useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { mergeRefs } from "@react-aria/utils";
import { forwardRef, useCallback, useRef, type ForwardedRef, type MouseEventHandler } from "react";
import { useContextProps, Group as RACGroup, type GroupProps as RACGroupProps, composeRenderProps, InputContext, useSlottedContext, TextAreaContext } from "react-aria-components";

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
    /**
     * The class name of the input element.
     */
    inputClassName?: string;
}

function InputGroup(props: InputGroupProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, InputGroupContext);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputContext = useSlottedContext(InputContext);
    const mergedRefs = inputContext?.ref ? mergeRefs(inputRef, inputContext?.ref) : inputRef;
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const textAreaContext = useSlottedContext(TextAreaContext);
    const mergedTextAreaRefs = textAreaContext?.ref ? mergeRefs(textAreaRef, textAreaContext?.ref) : textAreaRef;

    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        style: styleProp,
        children,
        size:sizeProp,
        isFluid: isFluidProp,
        inputClassName,
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

        // If the input is the one that is clicked, we don't want to focus it.
        if (inputRef.current && e.target !== inputRef.current) {
            // forwards the focus to the input element when clicking on the input group.
            inputRef.current.focus();
            // This ensures that the input does not lose focus when clicking on the input group.
            e.preventDefault();
        }
    }, [onMouseDown]);

    return (
        <SlotProvider values={[
            [InputContext, {
                ...inputContext,
                ref: mergedRefs,
                className: composeClassnameRenderProps(inputContext?.className, inputClassName, styles["hop-InputGroup__input"])
            }],
            [TextAreaContext, {
                ...textAreaContext,
                ref: mergedTextAreaRefs,
                className: composeClassnameRenderProps(textAreaContext?.className, inputClassName, styles["hop-InputGroup__textarea"])
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
