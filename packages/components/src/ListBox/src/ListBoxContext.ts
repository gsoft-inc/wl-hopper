import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { ListBoxProps } from "./ListBox.tsx";

export const ListBoxContext = createContext<ContextValue<ListBoxProps<object>, HTMLDivElement>>({});

ListBoxContext.displayName = "ListBoxContext";
