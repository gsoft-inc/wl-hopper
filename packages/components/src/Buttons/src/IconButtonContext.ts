import { createContext } from "react";
import type { ContextValue } from "react-aria-components";
import type { IconButtonProps } from "./IconButton.tsx";

export const IconButtonContext = createContext<ContextValue<IconButtonProps, HTMLButtonElement>>({});

IconButtonContext.displayName = "IconButtonContext";
