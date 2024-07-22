import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { FormProps } from "./Form.tsx";

export const FormContext = createContext<ContextValue<FormProps, any>>({});

FormContext.displayName = "FormContext";
