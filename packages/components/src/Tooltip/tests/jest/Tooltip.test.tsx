import { Button } from "@hopper-ui/components";
import { render, screen } from "@hopper-ui/test-utils";
import { userEvent } from "@testing-library/user-event";
import { createRef } from "react";

import { Tooltip } from "../../src/Tooltip.tsx";
import { TooltipContext } from "../../src/TooltipContext.ts";
import { TooltipTrigger } from "../../src/TooltipTrigger.tsx";

describe("Tooltip", () => {
    const buttonText = "Trigger";
    const tooltipText = "Tooltip text";

    it("should render with default class", () => {
        render(<TooltipTrigger defaultOpen>
            <Button>{buttonText}</Button>
            <Tooltip>{tooltipText}</Tooltip>
        </TooltipTrigger>);

        const element = screen.getByRole("tooltip");
        expect(element).toHaveClass("hop-Tooltip");
    });

    it("should support custom class", () => {
        render(<TooltipTrigger defaultOpen>
            <Button>{buttonText}</Button>
            <Tooltip className="test">{tooltipText}</Tooltip>
        </TooltipTrigger>);

        const element = screen.getByRole("tooltip");
        expect(element).toHaveClass("hop-Tooltip");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<TooltipTrigger defaultOpen>
            <Button>{buttonText}</Button>
            <Tooltip marginTop="stack-sm" style={{ marginBottom: "13px" }}>{tooltipText}</Tooltip>
        </TooltipTrigger>);

        const element = screen.getByRole("tooltip");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<TooltipTrigger defaultOpen>
            <Button>{buttonText}</Button>
            <Tooltip data-foo="bar">{tooltipText}</Tooltip>
        </TooltipTrigger>);

        const element = screen.getByRole("tooltip");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support context", () => {
        render(
            <TooltipContext.Provider value={{ "aria-label": "test" }}>
                (<TooltipTrigger defaultOpen>
                    <Button>{buttonText}</Button>
                    <Tooltip>{tooltipText}</Tooltip>
                </TooltipTrigger>
            </TooltipContext.Provider>
        );

        const tooltip = screen.getByRole("tooltip");
        expect(tooltip).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<TooltipTrigger defaultOpen>
            <Button>{buttonText}</Button>
            <Tooltip ref={ref}>{tooltipText}</Tooltip>
        </TooltipTrigger>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });

    it("should render a visible tooltip that won't disappear", async () => {
        render(
            <TooltipTrigger defaultOpen isDisabled>
                <Button>{buttonText}</Button>
                <Tooltip>{tooltipText}</Tooltip>
            </TooltipTrigger>
        );
        const user = userEvent.setup();

        await user.tab();

        const tooltip = screen.queryByRole("tooltip");
        expect(tooltip).toBeVisible();
    });

    it("should render a tooltip that will not appear", async () => {
        render(
            <TooltipTrigger isDisabled>
                <Button>{buttonText}</Button>
                <Tooltip>{tooltipText}</Tooltip>
            </TooltipTrigger>
        );
        const user = userEvent.setup();

        await user.tab();

        const tooltip = screen.queryByRole("tooltip");
        expect(tooltip).toBeNull(); 
    });
});
