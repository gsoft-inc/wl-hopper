import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { CardProps } from "./Card.tsx";

export const CardContext = createContext<ContextValue<CardProps, HTMLElement>>({});

CardContext.displayName = "CardContext";
