import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { NumberFieldProps } from "./NumberField.tsx";

export const NumberFieldContext = createContext<ContextValue<NumberFieldProps, HTMLDivElement>>({});

NumberFieldContext.displayName = "NumberFieldContext";
