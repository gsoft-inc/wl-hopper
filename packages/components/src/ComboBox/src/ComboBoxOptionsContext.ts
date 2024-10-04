import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { ComboBoxOptionsProps } from "./ComboBoxOptions.tsx";
// any is what's used in RAC
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComboBoxOptionsContextProps = ComboBoxOptionsProps<any>;

export const ComboBoxOptionsContext = createContext<ContextValue<Partial<ComboBoxOptionsContextProps>, HTMLDivElement>>({});

ComboBoxOptionsContext.displayName = "ComboBoxOptionsContext";
