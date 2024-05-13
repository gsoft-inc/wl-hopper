/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { TextField } from "../../src/TextField.tsx";

describe("TextField", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <TextField>Text</TextField>
            );

        expect(renderOnServer).not.toThrow();
    });
});
