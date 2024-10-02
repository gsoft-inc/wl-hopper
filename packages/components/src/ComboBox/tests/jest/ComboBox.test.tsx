import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { ComboBox } from "../../src/ComboBox.tsx";
import { ComboBoxContext } from "../../src/ComboBoxContext.ts";

describe("ComboBox", () => {
    it("should render with default class", () => {
        render(<ComboBox aria-label="Roles" data-testid="select">
            <ComboBox.Option>Item 1</ComboBox.Option>
            <ComboBox.Option>Item 2</ComboBox.Option>
            <ComboBox.Option>Item 3</ComboBox.Option>
        </ComboBox>);

        const element = screen.getByTestId("select");
        expect(element).toHaveClass("hop-ComboBox");
    });

    it("should support custom class", () => {
        render(<ComboBox aria-label="Roles" className="test" data-testid="select">
            <ComboBox.Option>Item 1</ComboBox.Option>
            <ComboBox.Option>Item 2</ComboBox.Option>
            <ComboBox.Option>Item 3</ComboBox.Option>
        </ComboBox>);

        const element = screen.getByTestId("select");
        expect(element).toHaveClass("hop-ComboBox");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<ComboBox aria-label="Roles" marginTop="stack-sm" style={{ marginBottom: "13px" }} data-testid="select">
            <ComboBox.Option>Item 1</ComboBox.Option>
            <ComboBox.Option>Item 2</ComboBox.Option>
            <ComboBox.Option>Item 3</ComboBox.Option>
        </ComboBox>);

        const element = screen.getByTestId("select");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<ComboBox aria-label="Roles" data-foo="bar" data-testid="select">
            <ComboBox.Option>Item 1</ComboBox.Option>
            <ComboBox.Option>Item 2</ComboBox.Option>
            <ComboBox.Option>Item 3</ComboBox.Option>
        </ComboBox>);

        const element = screen.getByTestId("select");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <ComboBoxContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <ComboBox slot="test" data-testid="select">
                    <ComboBox.Option>Item 1</ComboBox.Option>
                    <ComboBox.Option>Item 2</ComboBox.Option>
                    <ComboBox.Option>Item 3</ComboBox.Option>
                </ComboBox>
            </ComboBoxContext.Provider>
        );

        const element = screen.getByTestId("select");
        const selectTrigger = screen.getByRole("combobox");
        expect(element).toHaveAttribute("slot", "test");
        expect(selectTrigger).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<ComboBox ref={ref} aria-label="Roles">
            <ComboBox.Option>Item 1</ComboBox.Option>
            <ComboBox.Option>Item 2</ComboBox.Option>
            <ComboBox.Option>Item 3</ComboBox.Option>
        </ComboBox>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });
});
