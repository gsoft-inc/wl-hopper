import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { SegmentedControlProps } from "./SegmentedControl.tsx";

export const SegmentedControlContext = createContext<ContextValue<SegmentedControlProps, HTMLDivElement>>({});

SegmentedControlContext.displayName = "SegmentedControlContext";
