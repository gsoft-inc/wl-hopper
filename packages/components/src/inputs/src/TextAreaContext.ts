import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { TextAreaProps } from "./TextArea.tsx";

export const TextAreaContext = createContext<ContextValue<TextAreaProps, HTMLDivElement>>({});

TextAreaContext.displayName = "TextAreaContext";
