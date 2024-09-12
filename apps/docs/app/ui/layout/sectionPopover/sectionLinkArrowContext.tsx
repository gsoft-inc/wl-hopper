import { createContext, useContext } from "react";

interface arrowContextProps {
    isOpen: boolean;
}

export const ArrowContext = createContext<arrowContextProps | undefined>(undefined);

export const UseArrowContext = () => {
    const context = useContext(ArrowContext);
    if (!context) {
        throw new Error("UseArrowContext must be used within a sectionLinkProvider");
    }

    return context;
};
