import { render, screen } from "@hopper-ui/test-utils";

import { Popover } from "../../src/Popover.tsx";

describe("Popover", () => {
    it("should render with default class", () => {
        render(<Popover>Test</Popover>);

        const element = screen.getByText("Test");
        expect(element).toHaveClass("hop-Popover");
    });
});
