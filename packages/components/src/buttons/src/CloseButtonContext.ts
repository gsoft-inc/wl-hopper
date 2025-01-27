import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { CloseButtonProps } from "./CloseButton.tsx";

export const CloseButtonContext = createContext<ContextValue<CloseButtonProps, HTMLButtonElement>>({});

CloseButtonContext.displayName = "CloseButtonContext";
