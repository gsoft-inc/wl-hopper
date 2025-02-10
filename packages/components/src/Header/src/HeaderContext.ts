import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { Hiddable } from "../../utils/index.ts";

import type { HeaderProps } from "./Header.tsx";

export type HeaderContextValue = HeaderProps & Hiddable;

export const HeaderContext = createContext<ContextValue<HeaderContextValue, HTMLElement>>({});

HeaderContext.displayName = "HeaderContext";
