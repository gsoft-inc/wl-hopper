import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { TagProps } from "./Tag.tsx";

export const TagContext = createContext<ContextValue<TagProps, HTMLDivElement>>({});

TagContext.displayName = "TagContext";
