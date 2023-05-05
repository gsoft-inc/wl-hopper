import * as React from "react";
import * as Toggle from "@radix-ui/react-toggle";

import { Icon } from "@/components/Icons/Icons";

import "./iconButton.css";

export const IconButton = () => {
    function hasLocalStoragePreference() {
        if (typeof window !== "undefined" && window.localStorage) {
            if (localStorage.getItem("hdTheme") !== null) {
                return true;
            }
        }
    }

    function getTheme() {
        if (hasLocalStoragePreference()) {
            if (typeof window !== "undefined" && window.localStorage) {
                return localStorage.getItem("hdTheme");
            }
        } else {
            if (typeof window !== "undefined") {
                return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            }
        }
    }

    const [ theme, setTheme ] = React.useState(getTheme());

    function setBodyDataAttribute() {
        const rootElement = document.getElementById("App");

        if (theme !== null && theme !== undefined) {
            rootElement?.setAttribute("data-theme", theme);
        }
    }

    function handlePress() {
        if (theme === "light") {
            setTheme("dark");
            if (typeof window !== "undefined" && window.localStorage) {
                localStorage.setItem("hdTheme", "dark");
            }
        } else if (theme === "dark") {
            setTheme("light");
            if (typeof window !== "undefined" && window.localStorage) {
                localStorage.setItem("hdTheme", "light");
            }
        }
    }

    React.useEffect(() => {
        if (theme !== null) {
            setBodyDataAttribute();
        }
    }, [theme]);

    if (typeof window !== "undefined") {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
            if (!hasLocalStoragePreference()) {
                setTheme(e.matches ? "dark" : "light");
            }
        });
    }

    return (
        <Toggle.Root
            defaultPressed={theme === "light"}
            onPressedChange={() => handlePress()}
            aria-label="Toggle dark/light mode"
            className="hd-iconButton"
        >
            <Icon icon={ theme === "light" ? "moon" : "sun"}/>
        </Toggle.Root>
    );
};
