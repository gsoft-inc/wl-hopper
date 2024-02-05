import { act, screen, waitFor, render } from "@hopper-ui/test-utils";
import { Button } from "../../../Button/src/Button.tsx";
import { createRef } from "react";
import userEvent from "@testing-library/user-event";

// TODO: fix test names
// TODO: check react-aria-tests

// ***** Behaviors *****
test("when loading is true, the button should prevent onClick", async () => {
    const handler = jest.fn();
    const user = userEvent.setup();

    render(
        <Button
            isLoading
            onClick={handler}
            data-testid="button"
        >
            Loading Button
        </Button>
    );

    await user.click(screen.getByTestId("button"));

    await waitFor(() => expect(handler).not.toHaveBeenCalled());
});

// ***** Aria *****

test("when no type is specified, the type is default to \"button\"", async () => {
    render(
        <Button
            variant="secondary"
            data-testid="button"
        >Cutoff</Button>
    );

    await waitFor(() => expect(screen.getByTestId("button")).toHaveAttribute("type", "button"));
});

test("when type is specified, the type is forwarded", async () => {
    render(
        <Button
            type="submit"
            variant="secondary"
            data-testid="button"
        >Cutoff</Button>
    );

    await waitFor(() => expect(screen.getByTestId("button")).toHaveAttribute("type", "submit"));
});

// ***** Api *****

test("can focus the button with the focus api", async () => {
    let refNode: HTMLElement | null = null;

    render(
        <Button
            variant="secondary"
            ref={node => {
                refNode = node;
            }}
        >Cutoff</Button>
    );

    act(() => {
        refNode?.focus();
    });

    await waitFor(() => expect(refNode).toHaveFocus());
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLButtonElement>();

    render(
        <Button variant="secondary" ref={ref}>Cutoff</Button>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current!.tagName).toBe("BUTTON"));
});
