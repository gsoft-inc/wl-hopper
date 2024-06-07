import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { ContentProps } from "./Content.tsx";

export const ContentContext = createContext<ContextValue<ContentProps, HTMLElement>>({});

ContentContext.displayName = "ContentContext";
