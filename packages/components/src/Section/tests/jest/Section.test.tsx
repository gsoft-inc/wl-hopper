import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";
import { ListBox } from "react-aria-components";

import { Section } from "../../src/Section.tsx";

describe("Section", () => {
    it("should render with default class", () => {
        render(<ListBox aria-label="list-box"><Section>Test</Section></ListBox>);

        const element = screen.getByRole("group");
        expect(element).toHaveClass("hop-Section");
    });

    it("should support custom class", () => {
        render(<ListBox aria-label="list-box"><Section className="test">Test</Section></ListBox>);

        const element = screen.getByRole("group");
        expect(element).toHaveClass("hop-Section");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<ListBox aria-label="list-box"><Section marginTop="stack-sm" style={{ marginBottom: "13px" }} >Test</Section></ListBox>);

        const element = screen.getByRole("group");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<ListBox aria-label="list-box"><Section data-foo="bar">Test</Section></ListBox>);

        const element = screen.getByRole("group");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<ListBox aria-label="list-box"><Section ref={ref}>Test</Section></ListBox>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLElement).toBeTruthy();
    });
});
