import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { LinkButtonProps } from "./LinkButton.tsx";

export const LinkButtonContext = createContext<ContextValue<LinkButtonProps, HTMLAnchorElement>>({});

LinkButtonContext.displayName = "LinkButtonContext";
