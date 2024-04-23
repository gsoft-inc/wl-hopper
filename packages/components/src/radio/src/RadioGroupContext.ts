import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { RadioGroupProps } from "./RadioGroup.tsx";

export const RadioGroupContext = createContext<ContextValue<RadioGroupProps, HTMLDivElement>>({});

RadioGroupContext.displayName = "RadioGroupContext";
