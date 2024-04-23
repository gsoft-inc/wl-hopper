import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { RadioProps } from "./Radio.tsx";

export const RadioContext = createContext<ContextValue<Partial<RadioProps>, HTMLLabelElement>>({});

RadioContext.displayName = "RadioContext";
