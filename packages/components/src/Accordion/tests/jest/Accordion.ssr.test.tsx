/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Accordion } from "../../src/Accordion.tsx";

describe("Accordion", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Accordion>Text</Accordion>
            );

        expect(renderOnServer).not.toThrow();
    });
});
