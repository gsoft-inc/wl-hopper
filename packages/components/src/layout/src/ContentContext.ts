import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { Hiddable } from "../../utils/index.ts";

import type { ContentProps } from "./Content.tsx";

export type ContentContextValue = ContentProps & Hiddable;

export const ContentContext = createContext<ContextValue<ContentContextValue, HTMLDivElement>>({});

ContentContext.displayName = "ContentContext";
