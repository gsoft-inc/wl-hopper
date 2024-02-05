import { createContext } from "react";
import type { ContextValue } from "react-aria-components";
import type { ButtonProps } from "./Button.tsx";

export const ButtonContext = createContext<ContextValue<ButtonProps, HTMLButtonElement>>({});

ButtonContext.displayName = "ButtonContext";
