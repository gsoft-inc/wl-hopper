import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { TagGroupProps } from "./TagGroup.tsx";

export const TagGroupContext = createContext<ContextValue<TagGroupProps, HTMLDivElement>>({});

TagGroupContext.displayName = "TagGroupContext";
