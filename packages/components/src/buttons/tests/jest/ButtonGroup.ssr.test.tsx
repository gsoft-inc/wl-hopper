/**
 * @jest-environment node
 */
import { ButtonGroup } from "../../src/ButtonGroup.tsx";
import { Button } from "../../src/Button.tsx";
import { renderToString } from "react-dom/server";

describe("ButtonGroup", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <ButtonGroup>
                    <Button variant="secondary">Cancel</Button>
                    <Button variant="primary">Save</Button>
                </ButtonGroup>
            );

        expect(renderOnServer).not.toThrow();
    });
});

