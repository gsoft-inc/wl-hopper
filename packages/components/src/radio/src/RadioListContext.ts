import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { RadioListProps } from "./RadioList.tsx";

export const RadioListContext = createContext<ContextValue<RadioListProps, HTMLDivElement>>({});

RadioListContext.displayName = "RadioListContext";
