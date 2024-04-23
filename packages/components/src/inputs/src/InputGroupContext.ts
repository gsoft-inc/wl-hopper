import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { InputGroupProps } from "./InputGroup.tsx";

export const InputGroupContext = createContext<ContextValue<InputGroupProps, HTMLDivElement>>({});

InputGroupContext.displayName = "InputGroupContext";
