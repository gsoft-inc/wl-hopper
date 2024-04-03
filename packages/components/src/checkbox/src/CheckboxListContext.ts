import { createContext } from "react";
import type { ContextValue } from "react-aria-components";
import type { CheckboxListProps } from "./CheckboxList.tsx";

export const CheckboxListContext = createContext<ContextValue<CheckboxListProps, HTMLDivElement>>({});

CheckboxListContext.displayName = "CheckboxListContext";
