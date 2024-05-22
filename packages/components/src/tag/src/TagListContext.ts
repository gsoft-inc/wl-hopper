import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { TagListProps } from "./TagList.tsx";

export const TagListContext = createContext<ContextValue<TagListProps<object>, HTMLDivElement>>({});

TagListContext.displayName = "TagListContext";
