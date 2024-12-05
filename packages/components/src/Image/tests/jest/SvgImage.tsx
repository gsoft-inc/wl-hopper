/**
 * @jest-environment node
 */
import { forwardRef, type ComponentProps } from "react";
import { renderToString } from "react-dom/server";

import { SvgImage } from "../../src/SvgImage.tsx";

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

describe("SvgImage", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <SvgImage src={BasicSvg} aria-label="Basic SVG" />
            );

        expect(renderOnServer).not.toThrow();
    });
});
