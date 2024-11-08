import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { PopoverContextProps } from "./Popover.tsx";

export const PopoverContext = createContext<ContextValue<PopoverContextProps, HTMLElement>>({});

PopoverContext.displayName = "PopoverContext";
