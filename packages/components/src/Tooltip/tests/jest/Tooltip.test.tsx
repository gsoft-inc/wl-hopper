import { Button } from "@hopper-ui/components";
import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { Tooltip } from "../../src/Tooltip.tsx";
import { TooltipContext } from "../../src/TooltipContext.ts";
import { TooltipTrigger } from "../../src/TooltipTrigger.tsx";

describe("Tooltip", () => {
    const BUTTON_TEXT = "Trigger";
    const TOOLTIP_TEXT = "Tooltip text";

    it("should render with default class", () => {
        render(<TooltipTrigger defaultOpen>
            <Button>{BUTTON_TEXT}</Button>
            <Tooltip>{TOOLTIP_TEXT}</Tooltip>
        </TooltipTrigger>);

        const element = screen.getByRole("tooltip");
        expect(element).toHaveClass("hop-Tooltip");
    });

    it("should support custom class", () => {
        render(<TooltipTrigger defaultOpen>
            <Button>{BUTTON_TEXT}</Button>
            <Tooltip className="test">{TOOLTIP_TEXT}</Tooltip>
        </TooltipTrigger>);

        const element = screen.getByRole("tooltip");
        expect(element).toHaveClass("hop-Tooltip");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<TooltipTrigger defaultOpen>
            <Button>{BUTTON_TEXT}</Button>
            <Tooltip marginTop="stack-sm" style={{ marginBottom: "13px" }}>{TOOLTIP_TEXT}</Tooltip>
        </TooltipTrigger>);

        const element = screen.getByRole("tooltip");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<TooltipTrigger defaultOpen>
            <Button>{BUTTON_TEXT}</Button>
            <Tooltip data-foo="bar">{TOOLTIP_TEXT}</Tooltip>
        </TooltipTrigger>);

        const element = screen.getByRole("tooltip");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support context", () => {
        render(
            <TooltipContext.Provider value={{ "aria-label": "test" }}>
                (<TooltipTrigger defaultOpen>
                    <Button>{BUTTON_TEXT}</Button>
                    <Tooltip>{TOOLTIP_TEXT}</Tooltip>
                </TooltipTrigger>
            </TooltipContext.Provider>
        );

        const tooltip = screen.getByRole("tooltip");
        expect(tooltip).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<TooltipTrigger defaultOpen>
            <Button>{BUTTON_TEXT}</Button>
            <Tooltip ref={ref}>{TOOLTIP_TEXT}</Tooltip>
        </TooltipTrigger>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });
});
