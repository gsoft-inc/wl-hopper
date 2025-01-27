import { useResponsiveValue, type ResponsiveProp } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { createContext, forwardRef, type ForwardedRef } from "react";
import { Input as RACInput, useContextProps, type ContextValue, type InputProps as RACInputProps } from "react-aria-components";

import { cssModule } from "../../utils/index.ts";

import styles from "./Input.module.css";

export interface InputProps extends Omit<RACInputProps, "size"> {
    /**
     * The size of the input.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;
}

export const InputContext = createContext<ContextValue<InputProps, HTMLInputElement>>({});


export const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
    [props, ref] = useContextProps(props, ref, InputContext);
    const { className, size: sizeProp, ...otherProps } = props;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = clsx(
        className,
        cssModule(
            styles,
            "hop-Input",
            size
        )
    );

    return (
        <RACInput
            {...otherProps}
            ref={ref}
            className={classNames}
        />
    );
});
