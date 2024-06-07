import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { TextFieldProps } from "./TextField.tsx";

export const TextFieldContext = createContext<ContextValue<TextFieldProps, HTMLDivElement>>({});

TextFieldContext.displayName = "TextFieldContext";
