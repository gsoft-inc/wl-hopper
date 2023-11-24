import { AddIcon } from "@hopper-ui/icons";
import { render, screen, waitFor } from "@hopper-ui/test-utils";
import { createRef } from "react";

// ***** Refs *****
test("ref is a DOM element", async () => {
    const ref = createRef<SVGSVGElement>();

    render(
        <AddIcon
            ref={ref}
        />
    );

    const icon = screen.getByRole("img", { hidden: true });

    expect(ref.current).toBe(icon);
    expect(ref.current instanceof SVGElement).toBeTruthy();
    expect(ref.current?.tagName.toUpperCase()).toBe("SVG");
});

test("ref is set once", async () => {
    const handler = jest.fn();

    render(
        <AddIcon
            ref={handler}
        />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("applies default displayName", () => {
    expect(AddIcon.displayName).toBe("AddIcon");
});

test("applies aria-label and aria-hidden attributes", () => {
    render(<AddIcon aria-label="Test Icon" />);

    const icon = screen.getByRole("img");

    expect(icon).toHaveAttribute("aria-label", "Test Icon");
    expect(icon).not.toHaveAttribute("aria-hidden");
});

test("applies aria-hidden attributes when no aria-label is provided", () => {
    render(<AddIcon />);

    const icon = screen.getByRole("img", { hidden: true });

    expect(icon).not.toHaveAttribute("aria-label");
    expect(icon).toHaveAttribute("aria-hidden", "true");
});
