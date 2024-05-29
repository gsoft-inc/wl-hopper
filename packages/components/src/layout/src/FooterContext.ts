import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { FooterProps } from "./Footer.tsx";

export const FooterContext = createContext<ContextValue<FooterProps, HTMLElement>>({});

FooterContext.displayName = "FooterContext";
