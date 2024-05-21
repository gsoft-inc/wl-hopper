import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { ButtonGroupContext } from "../../../buttons/src/ButtonGroupContext.ts";
import { OverlineText } from "../../src/OverlineText.tsx";
import { OverlineTextContext } from "../../src/OverlineTextContext.ts";

describe("OverlineText", () => {
    it("should render with default class", () => {
        render(<OverlineText>Test</OverlineText>);

        const element = screen.getByText("Test");
        expect(element).toHaveClass("hop-OverlineText");
    });

    it("should support custom class", () => {
        render(<OverlineText className="test">Test</OverlineText>);

        const element = screen.getByText("Test");
        expect(element).toHaveClass("hop-OverlineText");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<OverlineText marginTop="stack-sm" style={{ marginBottom: "13px" }} >Test</OverlineText>);

        const element = screen.getByText("Test");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<OverlineText data-foo="bar">Test</OverlineText>);

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <OverlineTextContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <OverlineText slot="test">Test</OverlineText>
            </OverlineTextContext.Provider>
        );

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLSpanElement>();
        render(<OverlineText ref={ref}>Test</OverlineText>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLSpanElement).toBeTruthy();
    });

    it("should stop context propagation on nested text", () => {
        render(
            <ButtonGroupContext.Provider value={{ className: "testClass" }}>
                <OverlineText>Test <OverlineText>Nested</OverlineText></OverlineText>
            </ButtonGroupContext.Provider>
        );

        const element = screen.getByText("Nested");
        expect(element).not.toHaveClass("testClass");
    });
});
