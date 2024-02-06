import { SpinnerContext } from "../../src/SpinnerContext.ts";
import { Spinner } from "../../src/Spinner.tsx";
import { createRef } from "react";
import { render, screen } from "@hopper-ui/test-utils";

describe("Spinner", () => {
    it("should render a span with default class", () => {
        render(<Spinner aria-label="Loading…" />);

        const text = screen.getByRole("progressbar");
        expect(text).toHaveClass("hop-Spinner-component");
    });

    it("should render a span with custom class", () => {
        render(<Spinner aria-label="Loading…" className="test" />);

        const text = screen.getByRole("progressbar");
        expect(text).toHaveClass("hop-Spinner-component");
        expect(text).toHaveClass("test");
    });

    it("should support DOM props", () => {
        render(<Spinner aria-label="Loading…" data-foo="bar" />);

        const text = screen.getByRole("progressbar");
        expect(text).toHaveAttribute("data-foo", "bar");
    });

    it("should support slot", () => {
        render(
            <SpinnerContext.Provider value={{ slots: { test: { "aria-label": "test label" } } }}>
                <Spinner slot="test" />
            </SpinnerContext.Provider>
        );

        const text = screen.getByRole("progressbar");
        expect(text).toHaveAttribute("slot", "test");
        expect(text).toHaveAttribute("aria-label", "test label");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<Spinner ref={ref}>Test</Spinner>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });
});

// TODO: test styles?
