import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { SwitchProps } from "./Switch.tsx";

export const SwitchContext = createContext<ContextValue<SwitchProps, HTMLLabelElement>>({});

SwitchContext.displayName = "SwitchContext";
