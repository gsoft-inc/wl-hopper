import { Select, SelectField, SelectOption } from "@hopper-ui/components";
import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { SelectFieldContext } from "../../src/SelectFieldContext.ts";

describe("Select", () => {
    it("should render with default class", () => {
        render(<SelectField aria-label="Animals" data-testid="select">
            <Select>
                <SelectOption>Item 1</SelectOption>
                <SelectOption>Item 2</SelectOption>
                <SelectOption>Item 3</SelectOption>
            </Select>
        </SelectField>);

        const element = screen.getByTestId("select");
        expect(element).toHaveClass("hop-SelectField");
    });

    it("should support custom class", () => {
        render(<SelectField aria-label="Animals" className="test" data-testid="select">
            <Select>
                <SelectOption>Item 1</SelectOption>
                <SelectOption>Item 2</SelectOption>
                <SelectOption>Item 3</SelectOption>
            </Select>
        </SelectField>);

        const element = screen.getByTestId("select");
        expect(element).toHaveClass("hop-SelectField");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<SelectField aria-label="Animals" marginTop="stack-sm" style={{ marginBottom: "13px" }} data-testid="select">
            <Select>
                <SelectOption>Item 1</SelectOption>
                <SelectOption>Item 2</SelectOption>
                <SelectOption>Item 3</SelectOption>
            </Select>
        </SelectField>);

        const element = screen.getByTestId("select");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<SelectField aria-label="Animals" data-foo="bar" data-testid="select">
            <Select>
                <SelectOption>Item 1</SelectOption>
                <SelectOption>Item 2</SelectOption>
                <SelectOption>Item 3</SelectOption>
            </Select>
        </SelectField>);

        const element = screen.getByTestId("select");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <SelectFieldContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <SelectField slot="test" data-testid="select">
                    <Select>
                        <SelectOption>Item 1</SelectOption>
                        <SelectOption>Item 2</SelectOption>
                        <SelectOption>Item 3</SelectOption>
                    </Select>
                </SelectField>
            </SelectFieldContext.Provider>
        );

        const element = screen.getByTestId("select");
        const selectTrigger = screen.getByRole("button");
        expect(element).toHaveAttribute("slot", "test");
        expect(selectTrigger).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<SelectField ref={ref} aria-label="Animals">
            <Select>
                <SelectOption>Item 1</SelectOption>
                <SelectOption>Item 2</SelectOption>
                <SelectOption>Item 3</SelectOption>
            </Select>
        </SelectField>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });
});
