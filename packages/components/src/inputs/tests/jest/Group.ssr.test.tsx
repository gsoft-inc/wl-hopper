/**
 * @jest-environment node
 */
import { Group } from "../../src/Group.tsx";
import { renderToString } from "react-dom/server";

describe("Group", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Group>Text</Group>
            );

        expect(renderOnServer).not.toThrow();
    });
});
