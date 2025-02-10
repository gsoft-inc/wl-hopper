import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { Hiddable } from "../../utils/index.ts";

import type { ButtonProps } from "./Button.tsx";

export type ButtonContextValue = ButtonProps & Hiddable;

export const ButtonContext = createContext<ContextValue<ButtonContextValue, HTMLButtonElement>>({});

ButtonContext.displayName = "ButtonContext";
