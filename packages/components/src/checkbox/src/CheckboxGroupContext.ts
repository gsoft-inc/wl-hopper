import { createContext } from "react";
import type { ContextValue } from "react-aria-components";
import type { CheckboxGroupProps } from "./CheckboxGroup.tsx";

export const CheckboxGroupContext = createContext<ContextValue<CheckboxGroupProps, HTMLDivElement>>({});

CheckboxGroupContext.displayName = "CheckboxGroupContext";
