import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { ClearButtonProps } from "./ClearButton.tsx";

export const ClearButtonContext = createContext<ContextValue<ClearButtonProps, HTMLButtonElement>>({});

ClearButtonContext.displayName = "ClearButtonContext";
