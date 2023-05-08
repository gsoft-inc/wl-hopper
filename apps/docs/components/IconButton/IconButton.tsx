import * as React from "react";
import * as Toggle from "@radix-ui/react-toggle";

import { Icon } from "@/components/Icons/Icons";

import "./iconButton.css";

export const IconButton = () => {
    const [ theme, setTheme ] = React.useState("light");

    return (
        <Toggle.Root
            defaultPressed={theme === "light"}
            onPressedChange={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle dark/light mode"
            className="hd-iconButton"
        >
            <Icon icon={ theme === "light" ? "moon" : "sun"} />
        </Toggle.Root>
    );
};
