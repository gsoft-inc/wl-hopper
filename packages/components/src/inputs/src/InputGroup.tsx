import {
    type ResponsiveProp,
    type StyledComponentProps,
    useResponsiveValue,
    useStyledSystem
} from "@hopper-ui/styled-system";
import { mergeRefs } from "@react-aria/utils";
import { type ForwardedRef, type MouseEventHandler, forwardRef, useCallback, useContext, useRef } from "react";
import {
    InputContext,
    FieldErrorContext as RACFieldErrorContext,
    Group as RACGroup,
    type GroupProps as RACGroupProps,
    TextAreaContext,
    composeRenderProps,
    useContextProps,
    useSlottedContext
} from "react-aria-components";

import { EmbeddedButtonContext } from "../../buttons/index.ts";
import { type FieldSize, SlotProvider, composeClassnameRenderProps, cssModule } from "../../utils/index.ts";

import { InputGroupContext } from "./InputGroupContext.ts";

import styles from "./InputGroup.module.css";

export const GlobalInputGroupCssSelector = "hop-InputGroup";

export type InputType = "text" | "password" | "search" | "number" | "textarea";

export interface InputGroupProps extends StyledComponentProps<RACGroupProps> {
    /**
     * The size of the input group.
     * @default "md"
     */
    size?: ResponsiveProp<FieldSize>;

    /**
     * Whether the button takes up the width of its container.
     * @default false
     */
    isFluid?: ResponsiveProp<boolean>;

    /**
     * The class name of the input element.
     */
    inputClassName?: string;
    /**
     * The type of the input element.
     * @default "text"
     */
    inputType?: InputType;
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
        size: sizeProp,
        isFluid: isFluidProp,
        isInvalid,
        inputClassName,
        inputType = "text",
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

    const validation = useContext(RACFieldErrorContext);

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
            }],
            [EmbeddedButtonContext, {
                className: styles["hop-InputGroup__embedded-button"],
                isSquare: true
            }]
        ]}
        >
            <RACGroup
                {...otherProps}
                isInvalid={validation?.isInvalid || isInvalid}
                onMouseDown={handleMouseDown}
                ref={ref}
                className={classNames}
                style={style}
                data-input-type={inputType}
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
