import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { Hiddable } from "../../../utils/index.ts";

import type { HeadingProps } from "./Heading.tsx";

export type HeadingContextValue = HeadingProps & Hiddable;

export const HeadingContext = createContext<ContextValue<HeadingContextValue, HTMLHeadingElement>>({});

HeadingContext.displayName = "HeadingContext";
