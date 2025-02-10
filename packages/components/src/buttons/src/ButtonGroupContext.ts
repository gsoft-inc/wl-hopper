import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { Hiddable } from "../../utils/index.ts";

import type { ButtonGroupProps } from "./ButtonGroup.tsx";

export type ButtonGroupContextValue = ButtonGroupProps & Hiddable;

export const ButtonGroupContext = createContext<ContextValue<ButtonGroupContextValue, HTMLDivElement>>({});

ButtonGroupContext.displayName = "ButtonGroupContext";
