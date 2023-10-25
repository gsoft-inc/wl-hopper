import { useCallback, useState } from "react";

const useSidebarState = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const toggleOpenState = useCallback(() => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }, []);

    return { isOpen, toggleOpenState };
};

export default useSidebarState;
