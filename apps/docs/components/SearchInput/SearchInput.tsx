import React from "react";
import "./searchInput.css";

export const SearchInput = () => {
    // when the user click the input wrapper, focus the input
    const inputWrapper = document.querySelector(".hd-search-input");
    inputWrapper?.addEventListener("click", () => {
        const input = document.querySelector(".hd-search-input__input") as HTMLInputElement;
        input?.focus();
    });

    return (
        <form className="hd-search-input">
            <input type="text" className="hd-search-input__input" placeholder="search or jump to..." />
            <kbd className="hd-search-input__shortcut">/</kbd>
        </form>
    );
}