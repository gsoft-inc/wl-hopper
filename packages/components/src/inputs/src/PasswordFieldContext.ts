import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { PasswordFieldProps } from "./PasswordField.tsx";

export const PasswordFieldContext = createContext<ContextValue<PasswordFieldProps, HTMLDivElement>>({});

PasswordFieldContext.displayName = "PasswordFieldContext";
