/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Chip } from "../../src/Chip.tsx";

describe("Chip", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Chip>Text</Chip>
            );

        expect(renderOnServer).not.toThrow();
    });
});
