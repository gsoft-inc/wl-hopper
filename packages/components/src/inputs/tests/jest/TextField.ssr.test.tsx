/**
 * @jest-environment node
 */
import { TextField } from "../../src/TextField.tsx";
import { renderToString } from "react-dom/server";

describe("TextField", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <TextField>Text</TextField>
            );

        expect(renderOnServer).not.toThrow();
    });
});
