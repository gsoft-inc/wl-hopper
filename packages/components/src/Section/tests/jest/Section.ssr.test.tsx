/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Section } from "../../src/Section.tsx";

describe("Section", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Section>Text</Section>
            );

        expect(renderOnServer).not.toThrow();
    });
});
