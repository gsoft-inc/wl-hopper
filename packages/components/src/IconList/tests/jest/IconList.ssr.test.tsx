/**
 * @jest-environment node
 */
import { AddIcon, PlusIcon } from "@hopper-ui/icons";
import { renderToString } from "react-dom/server";

import { IconList } from "../../src/IconList.tsx";

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
