import { createContext } from "react";
import type { ContextValue } from "react-aria-components";
import type { CheckboxProps } from "./Checkbox.tsx";

export const CheckboxContext = createContext<ContextValue<CheckboxProps, any>>({});

CheckboxContext.displayName = "CheckboxContext";
