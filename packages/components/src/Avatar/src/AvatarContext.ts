import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { AvatarProps } from "./Avatar.tsx";

export const AvatarContext = createContext<ContextValue<AvatarProps, HTMLElement>>({});

AvatarContext.displayName = "AvatarContext";
