import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { EmbeddedButtonProps } from "./EmbeddedButton.tsx";

export const EmbeddedButtonContext = createContext<ContextValue<EmbeddedButtonProps, HTMLButtonElement>>({});

EmbeddedButtonContext.displayName = "EmbeddedButtonContext";
