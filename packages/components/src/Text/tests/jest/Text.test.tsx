import { Text, TextContext } from "../../src/Text.tsx";
import { createRef } from "react";
import { render, screen } from "@hopper-ui/test-utils";

describe("Text", () => {
    it("should render a span with default class", () => {
        render(<Text>Test</Text>);

        const text = screen.getByText("Test");
        expect(text).toHaveClass("hop-Text-component");
    });

    it("should render a span with custom class", () => {
        render(<Text className="test">Test</Text>);

        const text = screen.getByText("Test");
        expect(text).toHaveClass("hop-Text-component");
        expect(text).toHaveClass("test");
    });

    it("should support DOM props", () => {
        render(<Text data-foo="bar">Test</Text>);

        const text = screen.getByText("Test");
        expect(text).toHaveAttribute("data-foo", "bar");
    });

    it("should support slot", () => {
        render(
            <TextContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Text slot="test">Test</Text>
            </TextContext.Provider>
        );

        const text = screen.getByText("Test");
        expect(text).toHaveAttribute("slot", "test");
        expect(text).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLSpanElement>();
        render(<Text ref={ref}>Test</Text>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLSpanElement).toBeTruthy();
    });
});
