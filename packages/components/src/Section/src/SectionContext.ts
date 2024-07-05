import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { SectionProps } from "./Section.tsx";

// any is what's used in RAC
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SectionContext = createContext<ContextValue<SectionProps<any>, HTMLElement>>({});

SectionContext.displayName = "SectionContext";
