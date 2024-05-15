/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { ClearButton } from "../../src/ClearButton.tsx";

describe("ClearButton", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <ClearButton />
            );

        expect(renderOnServer).not.toThrow();
    });
});

