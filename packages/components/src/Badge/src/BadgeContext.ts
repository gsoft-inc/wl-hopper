import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { BadgeProps } from "./Badge.tsx";

export const BadgeContext = createContext<ContextValue<BadgeProps, HTMLSpanElement>>({});

BadgeContext.displayName = "BadgeContext";
