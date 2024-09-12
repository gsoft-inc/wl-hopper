import { createContext, useContext } from "react";

interface sectionLinkContextProps {
    onClick: () => void;
}

export const SectionLinkContext = createContext<sectionLinkContextProps | undefined>(undefined);

export const UseSectionLinkContext = () => {
    const context = useContext(SectionLinkContext);
    if (!context) {
        throw new Error("UseSectionLinkContext must be used within a sectionLinkProvider");
    }

    return context;
};
