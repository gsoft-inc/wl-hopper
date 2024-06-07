import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { SearchFieldProps } from "./SearchField.tsx";

export const SearchFieldContext = createContext<ContextValue<SearchFieldProps, HTMLDivElement>>({});

SearchFieldContext.displayName = "TextFieldContext";
