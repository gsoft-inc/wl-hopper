import { createContext } from "react";
import type { ContextValue } from "react-aria-components";
import type { ButtonProps } from "./Button.tsx";

export interface ButtonContextValue extends ButtonProps {
    isPressed?: boolean;
}
export const ButtonContext = createContext<ContextValue<ButtonContextValue, HTMLElement>>({});

ButtonContext.displayName = "ButtonContext";
