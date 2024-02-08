/**
 * @jest-environment node
 */
import { IconList } from "../../src/IconList.tsx";
import { renderToString } from "react-dom/server";
import { AddIcon, PlusIcon } from "@hopper-ui/icons";

describe("IconList", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <IconList>
                    <AddIcon />
                    <PlusIcon />
                </IconList>
            );

        expect(renderOnServer).not.toThrow();
    });
});
