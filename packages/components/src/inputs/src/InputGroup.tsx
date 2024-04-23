import { IconContext } from "@hopper-ui/icons";
import { useResponsiveValue, useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { useContextProps, Group as RACGroup, type GroupProps as RACGroupProps, composeRenderProps, InputContext, useSlottedContext } from "react-aria-components";

import { ButtonContext } from "../../buttons/index.ts";
import { TextContext } from "../../Text/index.ts";
import { SlotProvider, composeClassnameRenderProps, cssModule } from "../../utils/index.ts";

import { InputGroupContext } from "./InputGroupContext.ts";

import styles from "./InputGroup.module.css";

export const GlobalInputGroupCssSelector = "hop-InputGroup";

export interface InputGroupProps extends StyledComponentProps<RACGroupProps> {
    size?: ResponsiveProp<"sm" | "md">;
}

function InputGroup(props: InputGroupProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, InputGroupContext);
    const inputContext = useSlottedContext(InputContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        style: styleProp,
        children,
        size:sizeProp,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalInputGroupCssSelector,
        cssModule(
            styles,
            "hop-InputGroup",
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

    return (
        <SlotProvider values={[
            [InputContext, {
                ...inputContext,
                className: composeClassnameRenderProps(inputContext?.className, styles["hop-InputGroup__input"])
            }]
        ]}
        >
            <RACGroup
                {...otherProps}
                className={classNames}
                style={style}
            >
                {children}
            </RACGroup>
        </SlotProvider>
    );
}

/**
 * TODO: tagline
 *
 * [View Documentation](TODO)
 */
const _InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(InputGroup);
_InputGroup.displayName = "InputGroup";

export { _InputGroup as InputGroup };
