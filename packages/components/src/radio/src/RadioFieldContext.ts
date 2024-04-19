import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { RadioFieldProps } from "./RadioField.tsx";

export const RadioFieldContext = createContext<ContextValue<Partial<RadioFieldProps>, HTMLDivElement>>({});

RadioFieldContext.displayName = "RadioFieldContext";
