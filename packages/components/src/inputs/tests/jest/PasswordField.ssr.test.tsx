/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Label } from "../../../Label/index.ts";
import { PasswordField } from "../../src/PasswordField.tsx";

describe("PasswordField", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <PasswordField>
                    <Label>Label:</Label>
                </PasswordField>
            );

        expect(renderOnServer).not.toThrow();
    });
});
