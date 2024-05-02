import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { SwitchFieldProps } from "./SwitchField.tsx";

export const SwitchFieldContext = createContext<ContextValue<SwitchFieldProps, HTMLDivElement>>({});

SwitchFieldContext.displayName = "SwitchFieldContext";
