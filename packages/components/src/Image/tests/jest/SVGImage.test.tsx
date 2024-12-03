import { render, screen } from "@hopper-ui/test-utils";
import { type ComponentProps, createRef, forwardRef } from "react";

import { SVGImage } from "../../src/SVGImage.tsx";
import { SVGImageContext } from "../../src/SVGImageContext.ts";

const BasicSvg = forwardRef<SVGSVGElement, ComponentProps<"svg">>((props, ref) => {
    return (
        <svg
            {...props}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
        >
            <path d="M16 6.25a.75.75 0 01.75.75v8.25H25a.75.75 0 010 1.5h-8.25V25a.75.75 0 01-1.5 0v-8.25H7a.75.75 0 010-1.5h8.25V7a.75.75 0 01.75-.75z" />
            <path d="M16 6.25a.75.75 0 01.75.75v8.25H25a.75.75 0 010 1.5h-8.25V25a.75.75 0 01-1.5 0v-8.25H7a.75.75 0 010-1.5h8.25V7a.75.75 0 01.75-.75z" />
            <path d="M16 6.25a.75.75 0 01.75.75v8.25H25a.75.75 0 010 1.5h-8.25V25a.75.75 0 01-1.5 0v-8.25H7a.75.75 0 010-1.5h8.25V7a.75.75 0 01.75-.75z" />
        </svg>
    );
});


describe("SVGImage", () => {
    it("should render with default class", () => {
        render(<SVGImage data-testid="SVGImage" src={BasicSvg} />);

        const element = screen.getByTestId("SVGImage");
        expect(element).toHaveClass("hop-SVGImage");
    });

    it("should support custom class", () => {
        render(<SVGImage data-testid="SVGImage" className="test" src={BasicSvg} />);

        const element = screen.getByTestId("SVGImage");
        expect(element).toHaveClass("hop-SVGImage");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<SVGImage data-testid="SVGImage" marginTop="stack-sm" style={{ marginBottom: "13px" }} src={BasicSvg} />);

        const element = screen.getByTestId("SVGImage");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<SVGImage data-testid="SVGImage" data-foo="bar" src={BasicSvg} />);

        const element = screen.getByTestId("SVGImage");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <SVGImageContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <SVGImage data-testid="SVGImage" slot="test" src={BasicSvg} />
            </SVGImageContext.Provider>
        );

        const element = screen.getByTestId("SVGImage");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<SVGSVGElement>();
        render(<SVGImage ref={ref} src={BasicSvg} />);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof SVGSVGElement).toBeTruthy();
    });
});
