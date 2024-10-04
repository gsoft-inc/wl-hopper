import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { SelectOptionsProps } from "./SelectOptions.tsx";

// any is what's used in RAC
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SelectContextProps = SelectOptionsProps<any>;

export const SelectOptionsContext = createContext<ContextValue<Partial<SelectContextProps>, HTMLDivElement>>({});

SelectOptionsContext.displayName = "SelectOptionsContext";
