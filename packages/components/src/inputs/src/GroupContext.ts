import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { GroupProps } from "./Group.tsx";

export const GroupContext = createContext<ContextValue<GroupProps, HTMLDivElement>>({});

GroupContext.displayName = "GroupContext";
