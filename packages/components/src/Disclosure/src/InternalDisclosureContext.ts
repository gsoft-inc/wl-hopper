import { createContext } from "react";

interface InternalDisclosureContextValue {
    hasHeader: boolean;
    setHasHeader: (value:boolean) => void;
}
  
export const InternalDisclosureContext = createContext<InternalDisclosureContextValue | null>(null);

InternalDisclosureContext.displayName = "InternalDisclosureContext";
