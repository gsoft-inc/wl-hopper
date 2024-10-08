import { Select, SelectOption, SelectOptions } from "@hopper-ui/components";
import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { SelectContext } from "../../src/SelectContext.ts";

describe("SelectOptions", () => {
    it("should render with default class", () => {
        render(<Select aria-label="Animals" data-testid="select">
            <SelectOptions>
                <SelectOption>Item 1</SelectOption>
                <SelectOption>Item 2</SelectOption>
                <SelectOption>Item 3</SelectOption>
            </SelectOptions>
        </Select>);

        const element = screen.getByTestId("select");
        expect(element).toHaveClass("hop-Select");
    });

    it("should support custom class", () => {
        render(<Select aria-label="Animals" className="test" data-testid="select">
            <SelectOptions>
                <SelectOption>Item 1</SelectOption>
                <SelectOption>Item 2</SelectOption>
                <SelectOption>Item 3</SelectOption>
            </SelectOptions>
        </Select>);

        const element = screen.getByTestId("select");
        expect(element).toHaveClass("hop-Select");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<Select aria-label="Animals" marginTop="stack-sm" style={{ marginBottom: "13px" }} data-testid="select">
            <SelectOptions>
                <SelectOption>Item 1</SelectOption>
                <SelectOption>Item 2</SelectOption>
                <SelectOption>Item 3</SelectOption>
            </SelectOptions>
        </Select>);

        const element = screen.getByTestId("select");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<Select aria-label="Animals" data-foo="bar" data-testid="select">
            <SelectOptions>
                <SelectOption>Item 1</SelectOption>
                <SelectOption>Item 2</SelectOption>
                <SelectOption>Item 3</SelectOption>
            </SelectOptions>
        </Select>);

        const element = screen.getByTestId("select");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <SelectContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Select slot="test" data-testid="select">
                    <SelectOptions>
                        <SelectOption>Item 1</SelectOption>
                        <SelectOption>Item 2</SelectOption>
                        <SelectOption>Item 3</SelectOption>
                    </SelectOptions>
                </Select>
            </SelectContext.Provider>
        );

        const element = screen.getByTestId("select");
        const selectTrigger = screen.getByRole("button");
        expect(element).toHaveAttribute("slot", "test");
        expect(selectTrigger).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<Select ref={ref} aria-label="Animals">
            <SelectOptions>
                <SelectOption>Item 1</SelectOption>
                <SelectOption>Item 2</SelectOption>
                <SelectOption>Item 3</SelectOption>
            </SelectOptions>
        </Select>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });
});
