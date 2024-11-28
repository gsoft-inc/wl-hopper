import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { PassiveTriggerProps } from "./PassiveTrigger.tsx";

export const PassiveTriggerContext = createContext<ContextValue<PassiveTriggerProps, HTMLDivElement>>({});

PassiveTriggerContext.displayName = "PassiveTriggerContext";
