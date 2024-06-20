import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { Avatar } from "../../src/Avatar.tsx";
import { AvatarContext } from "../../src/AvatarContext.ts";

describe("Avatar", () => {
    it("should render with default class", () => {
        render(<Avatar name="John Doe" />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveClass("hop-Avatar");
    });

    it("should support custom class", () => {
        render(<Avatar name="John Doe" className="test" />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveClass("hop-Avatar");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<Avatar name="John Doe" marginTop="stack-sm" style={{ marginBottom: "13px" }} />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<Avatar name="John Doe" data-foo="bar" />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <AvatarContext.Provider value={{ slots: { test: { "aria-label": "test", "name": "test" } } }}>
                <Avatar name="John Doe" slot="test" />
            </AvatarContext.Provider>
        );

        const element = screen.getByRole("img", { name: "John Doe" });
        expect(element).not.toHaveAttribute("slot", "test"); // svg doesn't have slot attribute
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<Avatar name="John Doe" ref={ref} />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(ref.current).toBe(element);
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
        expect(ref.current?.tagName.toUpperCase()).toBe("div");
    });

    it("should apply default displayName", () => {
        expect(Avatar.displayName).toBe("Avatar");
    });

    it("should apply aria-label and aria-hidden attributes", () => {
        render(<Avatar name="John Doe" aria-label="Test Icon" />);

        const icon = screen.getByRole("img", { name: "John Doe" });

        expect(icon).toHaveAttribute("aria-label", "Test Icon");
        expect(icon).not.toHaveAttribute("aria-hidden");
    });

    it("should apply aria-hidden attributes when no aria-label is provided", () => {
        render(<Avatar name="John Doe" />);

        const icon = screen.getByRole("img", { name: "John Doe" });

        expect(icon).not.toHaveAttribute("aria-label");
        expect(icon).toHaveAttribute("aria-hidden", "true");
    });
});
