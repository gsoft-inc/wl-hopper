import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { ListBoxItem } from "../../src/index.ts";
import { ListBox } from "../../src/ListBox.tsx";
import { ListBoxContext } from "../../src/ListBoxContext.ts";

describe("ListBox", () => {
    it("should render with default class", () => {
        render(<ListBox aria-label="list of options">
            <ListBoxItem>Item 1</ListBoxItem>
            <ListBoxItem>Item 2</ListBoxItem>
            <ListBoxItem>Item 3</ListBoxItem>
        </ListBox>);

        const element = screen.getByRole("listbox");
        expect(element).toHaveClass("hop-ListBox");
    });

    it("should support custom class", () => {
        render(<ListBox aria-label="list of options" className="test">
            <ListBoxItem>Item 1</ListBoxItem>
            <ListBoxItem>Item 2</ListBoxItem>
            <ListBoxItem>Item 3</ListBoxItem>
        </ListBox>);

        const element = screen.getByRole("listbox");
        expect(element).toHaveClass("hop-ListBox");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<ListBox aria-label="list of options" marginTop="stack-sm" style={{ marginBottom: "13px" }}>
            <ListBoxItem>Item 1</ListBoxItem>
            <ListBoxItem>Item 2</ListBoxItem>
            <ListBoxItem>Item 3</ListBoxItem>
        </ListBox>);

        const element = screen.getByRole("listbox");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<ListBox aria-label="list of options" data-foo="bar">
            <ListBoxItem>Item 1</ListBoxItem>
            <ListBoxItem>Item 2</ListBoxItem>
            <ListBoxItem>Item 3</ListBoxItem>
        </ListBox>);

        const element = screen.getByRole("listbox");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <ListBoxContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <ListBox slot="test">
                    <ListBoxItem>Item 1</ListBoxItem>
                    <ListBoxItem>Item 2</ListBoxItem>
                    <ListBoxItem>Item 3</ListBoxItem>
                </ListBox>
            </ListBoxContext.Provider>
        );

        const element = screen.getByRole("listbox");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<ListBox ref={ref} aria-label="list of options">
            <ListBoxItem>Item 1</ListBoxItem>
            <ListBoxItem>Item 2</ListBoxItem>
            <ListBoxItem>Item 3</ListBoxItem>
        </ListBox>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });
});
