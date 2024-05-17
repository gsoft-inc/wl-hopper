/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Label } from "../../../Label/index.ts";
import { SearchField } from "../../src/SearchField.tsx";

describe("SearchField", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <SearchField>
                    <Label>Label:</Label>
                </SearchField>
            );

        expect(renderOnServer).not.toThrow();
    });
});
