import { renderWithTheme, waitFor } from "@hopper-ui/test-utils";
import { AddIcon } from "../../src/index.ts";

// ***** Refs *****
test("ref is a DOM element", async () => {
    let refNode: SVGSVGElement | null = null;

    renderWithTheme(
        <AddIcon
            ref={node => {
                refNode = node;
            }}
        />
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode! instanceof SVGElement).toBeTruthy();
    expect(refNode!.tagName.toUpperCase()).toBe("SVG");
});

test("ref is set once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <AddIcon
            ref={handler}
        />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
