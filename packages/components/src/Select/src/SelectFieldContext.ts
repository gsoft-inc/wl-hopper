import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { SelectFieldProps } from "./SelectField.tsx";
// any is what's used in RAC
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SelectFieldContextProps = SelectFieldProps<any>;

export const SelectFieldContext = createContext<ContextValue<Partial<SelectFieldContextProps>, HTMLDivElement>>({});

SelectFieldContext.displayName = "SelectFieldContext";
