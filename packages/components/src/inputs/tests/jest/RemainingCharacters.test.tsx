import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { TextContext } from "../../../typography/index.ts";
import { RemainingCharacterCount } from "../../src/RemainingCharacterCount.tsx";

describe("RemainingCharacterCount", () => {
    it("should render with default class", () => {
        render(<RemainingCharacterCount count={3} data-testid="char-count" />);

        const element = screen.getByTestId("char-count");
        expect(element).toHaveClass("hop-RemainingCharacterCount");
    });

    it("should support custom class", () => {
        render(<RemainingCharacterCount count={3} className="test" data-testid="char-count" />);

        const element = screen.getByTestId("char-count");
        expect(element).toHaveClass("hop-RemainingCharacterCount");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<RemainingCharacterCount count={3} marginTop="stack-sm" style={{ marginBottom: "13px" }} data-testid="char-count" />);

        const element = screen.getByTestId("char-count");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<RemainingCharacterCount count={3} data-foo="bar" data-testid="char-count" />);

        const element = screen.getByTestId("char-count");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <TextContext.Provider value={{ slots: { test: { "aria-description": "test" } } }}>
                <RemainingCharacterCount count={3} slot="test" data-testid="char-count" />
            </TextContext.Provider>
        );

        const element = screen.getByTestId("char-count");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-description", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLElement>();
        render(<RemainingCharacterCount count={3} ref={ref} />);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLElement).toBeTruthy();
    });

    it("should support disabled", () => {
        render(<RemainingCharacterCount count={3} data-testid="char-count" isDisabled />);

        const element = screen.getByTestId("char-count");
        expect(element).toHaveAttribute("data-disabled", "true");
    });

    it("should support invalid", () => {
        render(<RemainingCharacterCount count={3} data-testid="char-count" isInvalid />);

        const element = screen.getByTestId("char-count");
        expect(element).toHaveAttribute("data-invalid", "true");
    });
});
