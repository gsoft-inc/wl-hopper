import { Label } from "../../src/Label.tsx";
import { LabelContext } from "../../src/LabelContext.ts";
import { createRef } from "react";
import { render, screen } from "@hopper-ui/test-utils";

describe("Label", () => {
    it("should render a span with default class", () => {
        render(<Label>Test</Label>);

        const element = screen.getByText("Test");
        expect(element).toHaveClass("hop-Label");
    });

    it("should render a span with custom class", () => {
        render(<Label className="test">Test</Label>);

        const element = screen.getByText("Test");
        expect(element).toHaveClass("hop-Label");
        expect(element).toHaveClass("test");
    });

    it("should support DOM props", () => {
        render(<Label data-foo="bar">Test</Label>);

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slot", () => {
        render(
            <LabelContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Label slot="test">Test</Label>
            </LabelContext.Provider>
        );

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLLabelElement>();
        render(<Label ref={ref}>Test</Label>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLLabelElement).toBeTruthy();
    });
});
