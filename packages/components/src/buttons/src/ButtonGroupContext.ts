import { createContext } from "react";
import type { ContextValue } from "react-aria-components";
import type { ButtonGroupProps } from "./ButtonGroup.tsx";

export const ButtonGroupContext = createContext<ContextValue<ButtonGroupProps, HTMLDivElement>>({});

ButtonGroupContext.displayName = "ButtonGroupContext";
