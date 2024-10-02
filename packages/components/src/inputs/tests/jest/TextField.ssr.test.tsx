/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Label } from "../../../typography/index.ts";
import { TextField } from "../../src/TextField.tsx";

describe("TextField", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <TextField>
                    <Label>Label</Label>
                </TextField>
            );

        expect(renderOnServer).not.toThrow();
    });
});
