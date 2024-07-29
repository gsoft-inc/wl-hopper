/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Label } from "../../../typography/index.ts";
import { TextArea } from "../../src/TextArea.tsx";

describe("TextArea", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <TextArea>
                    <Label>Label:</Label>
                </TextArea>
            );

        expect(renderOnServer).not.toThrow();
    });
});
