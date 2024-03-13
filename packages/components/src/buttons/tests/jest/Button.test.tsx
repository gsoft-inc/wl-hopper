import { act, screen, waitFor, render } from "@hopper-ui/test-utils";
import { Button } from "../../src/Button.tsx";
import { ButtonContext } from "../../src/ButtonContext.ts";
import { createRef } from "react";
import { userEvent } from "@testing-library/user-event";

// ***** Behaviors *****
describe("Button", () => {
    it("should render with default class", () => {
        render(<Button>Cutoff</Button>);

        const element = screen.getByRole("button");
        expect(element).toHaveClass("hop-Button");
    });

    it("should support custom class", () => {
        render(<Button className="test">Cutoff</Button>);

        const element = screen.getByRole("button");
        expect(element).toHaveClass("hop-Button");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<Button marginTop="stack-sm" style={{ marginBottom: "13px" }} >Cutoff</Button>);

        const element = screen.getByRole("button");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<Button data-foo="bar">Cutoff</Button>);

        const element = screen.getByRole("button");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <ButtonContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Button slot="test">Cutoff</Button>
            </ButtonContext.Provider>
        );

        const element = screen.getByRole("button");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLButtonElement>();
        render(<Button ref={ref}>Cutoff</Button>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLButtonElement).toBeTruthy();
    });

    it("should be focused on render when autofocus is true", async () => {
        render(<Button autoFocus >Cutoff</Button>);

        const element = screen.getByRole("button");
        await waitFor(() => expect(element).toHaveFocus());
    });

    it("should not be focused on render when autofocus is true and the button is disabled", async () => {
        render(<Button isDisabled autoFocus >Cutoff</Button>);

        const element = screen.getByRole("button");
        await waitFor(() => expect(element).not.toHaveFocus());
    });

    it("should prevent onClick when the button is disabled", async () => {
        const handler = jest.fn();
        const user = userEvent.setup();

        render(
            <Button
                isLoading
                onClick={handler}
            >
            Loading Button
            </Button>
        );

        const element = screen.getByRole("button");
        await user.click(element);

        expect(handler).not.toHaveBeenCalled();
    });

    // ***** Aria *****

    it("should have the type attribute set to \"button\" when no type is specified", () => {
        render(
            <Button>Cutoff</Button>
        );

        const element = screen.getByRole("button");
        expect(element).toHaveAttribute("type", "button");
    });

    it("should forward the type attribute", () => {
        render(
            <Button type="submit">Cutoff</Button>
        );

        const element = screen.getByRole("button");
        expect(element).toHaveAttribute("type", "submit");
    });

    // ***** Api *****

    it("should be focused on render when the focus api is called", async () => {
        const ref = createRef<HTMLButtonElement>();

        render(<Button ref={ref}>Cutoff</Button>);

        act(() => {
            ref.current?.focus();
        });

        await waitFor(() => expect(ref.current).toHaveFocus());
    });
});
