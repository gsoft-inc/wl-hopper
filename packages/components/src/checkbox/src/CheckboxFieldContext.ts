import { createContext } from "react";
import type { ContextValue } from "react-aria-components";
import type { CheckboxFieldProps } from "./CheckboxField.tsx";

export const CheckboxFieldContext = createContext<ContextValue<CheckboxFieldProps, HTMLDivElement>>({});

CheckboxFieldContext.displayName = "CheckboxFieldContext";
