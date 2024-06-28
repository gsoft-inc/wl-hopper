import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { SectionProps } from "./Section.tsx";

export const SectionContext = createContext<ContextValue<SectionProps<object>, HTMLElement>>({});

SectionContext.displayName = "SectionContext";
