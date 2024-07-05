import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { Chip } from "../../src/Chip.tsx";
import { ChipContext } from "../../src/ChipContext.ts";

describe("Chip", () => {
    it("should render with default class", () => {
        render(
            <Chip data-testid="chip">
                Chip
            </Chip>
        );

        const element = screen.getByTestId("chip");
        expect(element).toHaveClass("hop-Chip");
    });

    it("should support custom class", () => {
        render(
            <Chip data-testid="chip" className="test">
                Chip
            </Chip>
        );

        const element = screen.getByTestId("chip");
        expect(element).toHaveClass("hop-Chip");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(
            <Chip data-testid="chip" marginTop="stack-sm" style={{ marginBottom: "13px" }}>
                Chip
            </Chip>
        );

        const element = screen.getByTestId("chip");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(
            <Chip data-testid="chip" data-foo="bar">
                Chip
            </Chip>
        );

        const element = screen.getByTestId("chip");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <ChipContext.Provider value={{ slots: { test: { "aria-label": "test label" } } }}>
                <Chip data-testid="chip" slot="test">
                    Chip
                </Chip>
            </ChipContext.Provider>
        );

        const element = screen.getByTestId("chip");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test label");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLSpanElement>();
        render(
            <Chip data-testid="chip" ref={ref}>
                Chip
            </Chip>
        );

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLSpanElement).toBeTruthy();
    });
});
