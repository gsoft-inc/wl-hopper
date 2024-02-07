import { SpinnerContext } from "../../src/SpinnerContext.ts";
import { Spinner } from "../../src/Spinner.tsx";
import { createRef } from "react";
import { render, screen } from "@hopper-ui/test-utils";

describe("Spinner", () => {
    it("should render a spinner with default class", () => {
        render(<Spinner aria-label="Loading…" />);

        const element = screen.getByRole("progressbar");
        expect(element).toHaveClass("hop-Spinner-component");
    });

    it("should render a spinner with custom class", () => {
        render(<Spinner aria-label="Loading…" className="test" />);

        const element = screen.getByRole("progressbar");
        expect(element).toHaveClass("hop-Spinner-component");
        expect(element).toHaveClass("test");
    });

    it("should render a spinner with custom style", () => {
        render(<Spinner aria-label="Loading…" marginTop="stack-sm" style={{ marginBottom: "13px" }} />);

        const element = screen.getByRole("progressbar");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<Spinner aria-label="Loading…" data-foo="bar" />);

        const element = screen.getByRole("progressbar");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slot", () => {
        render(
            <SpinnerContext.Provider value={{ slots: { test: { "aria-label": "test label" } } }}>
                <Spinner slot="test" />
            </SpinnerContext.Provider>
        );

        const element = screen.getByRole("progressbar");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test label");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<Spinner ref={ref}>Test</Spinner>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });
});
