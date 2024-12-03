import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { IllustratedMessage } from "../../src/IllustratedMessage.tsx";
import { IllustratedMessageContext } from "../../src/IllustratedMessageContext.ts";

describe("IllustratedMessage", () => {
    it("should render with default class", () => {
        render(<IllustratedMessage data-testid="IllustratedMessage">12</IllustratedMessage>);

        const element = screen.getByTestId("IllustratedMessage");
        expect(element).toHaveClass("hop-IllustratedMessage");
    });

    it("should support custom class", () => {
        render(<IllustratedMessage data-testid="illustratedMessage" className="test">12</IllustratedMessage>);

        const element = screen.getByTestId("illustratedMessage");
        expect(element).toHaveClass("hop-IllustratedMessage");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<IllustratedMessage data-testid="illustratedMessage" marginTop="stack-sm" style={{ marginBottom: "13px" }} >12</IllustratedMessage>);

        const element = screen.getByTestId("illustratedMessage");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<IllustratedMessage data-testid="illustratedMessage" data-foo="bar">12</IllustratedMessage>);

        const element = screen.getByTestId("illustratedMessage");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <IllustratedMessageContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <IllustratedMessage data-testid="illustratedMessage" slot="test">12</IllustratedMessage>
            </IllustratedMessageContext.Provider>
        );

        const element = screen.getByTestId("illustratedMessage");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<IllustratedMessage ref={ref}>12</IllustratedMessage>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });
});
