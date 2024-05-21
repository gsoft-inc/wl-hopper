import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { Badge } from "../../src/Badge.tsx";
import { BadgeContext } from "../../src/BadgeContext.ts";

describe("Badge", () => {
    it("should render with default class", () => {
        render(<Badge>12</Badge>);

        const element = screen.getByText("12");
        expect(element).toHaveClass("hop-Badge");
    });

    it("should support custom class", () => {
        render(<Badge className="test">12</Badge>);

        const element = screen.getByText("12");
        expect(element).toHaveClass("hop-Badge");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<Badge marginTop="stack-sm" style={{ marginBottom: "13px" }} >12</Badge>);

        const element = screen.getByText("12");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<Badge data-foo="bar">12</Badge>);

        const element = screen.getByText("12");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <BadgeContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Badge slot="test">12</Badge>
            </BadgeContext.Provider>
        );

        const element = screen.getByText("12");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLSpanElement>();
        render(<Badge ref={ref}>12</Badge>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLSpanElement).toBeTruthy();
    });

    it("should add proper attributes when disabled", () => {
        render(<Badge isDisabled>12</Badge>);

        const element = screen.getByText("12");
        expect(element).toHaveAttribute("data-disabled");
        expect(element).toHaveAttribute("aria-disabled");
    });
});
