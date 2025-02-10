import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { Hiddable } from "../../utils/index.ts";

import type { FooterProps } from "./Footer.tsx";

export type FooterContextValue = FooterProps & Hiddable;

export const FooterContext = createContext<ContextValue<FooterContextValue, HTMLElement>>({});

FooterContext.displayName = "FooterContext";
