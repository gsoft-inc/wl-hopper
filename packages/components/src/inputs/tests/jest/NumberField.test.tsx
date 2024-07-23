import { render, screen } from "@hopper-ui/test-utils";
import { createRef, type MutableRefObject } from "react";

import { Label } from "../../../typography/index.ts";
import { NumberField } from "../../src/NumberField.tsx";
import { NumberFieldContext } from "../../src/NumberFieldContext.ts";

describe("NumberField", () => {
    it("should render with default class", () => {
        render(
            <NumberField data-testid="field">
                <Label>Label:</Label>
            </NumberField>
        );

        const element = screen.getByTestId("field");
        expect(element).toHaveClass("hop-NumberField");
    });

    it("should support custom class", () => {
        render(
            <NumberField className="test" data-testid="field">
                <Label>Label:</Label>
            </NumberField>
        );

        const element = screen.getByTestId("field");
        expect(element).toHaveClass("hop-NumberField");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(
            <NumberField data-testid="field" marginTop="stack-sm" style={{ marginBottom: "13px" }}>
                <Label>Label:</Label>
            </NumberField>
        );

        const element = screen.getByTestId("field");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(
            <NumberField data-testid="field" data-foo="bar">
                <Label>Label:</Label>
            </NumberField>
        );

        const element = screen.getByTestId("field");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <NumberFieldContext.Provider value={{ slots: { test: { "aria-label" : "test label" } } }}>
                <NumberField data-testid="field" slot="test" />
            </NumberFieldContext.Provider>
        );
        const element = screen.getByTestId("field");
        expect(element).toHaveAttribute("slot", "test");

        const input = screen.getByRole("textbox");
        expect(input).toHaveAttribute("aria-label", "test label");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(
            <NumberField ref={ref} data-testid="field">
                <Label>Label:</Label>
            </NumberField>
        );

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });

    it("should support input refs", () => {
        const ref = createRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
        render(
            <NumberField inputRef={ref} data-testid="field">
                <Label>Label:</Label>
            </NumberField>
        );

        expect(ref.current).toBe(screen.getByRole("textbox"));
        expect(ref.current instanceof HTMLInputElement).toBeTruthy();
    });

    it("should support and merge input ref on context", () => {
        const inputRef = createRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
        const contextInputRef = createRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
        render(
            <NumberFieldContext.Provider value={{ inputRef: contextInputRef }}>
                <NumberField inputRef={inputRef}>
                    <Label>Label:</Label>
                </NumberField>
            </NumberFieldContext.Provider>
        );

        const element = screen.getByRole("textbox");
        expect(inputRef.current).toBe(element);
        expect(contextInputRef.current).toBe(element);
    });
});
