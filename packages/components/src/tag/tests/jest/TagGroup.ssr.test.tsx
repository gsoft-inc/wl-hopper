/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Tag, TagGroup, TagList } from "../../index.ts";

describe("TagGroup", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <TagGroup aria-label="tag-group">
                    <TagList>
                        <Tag id="1">Tag 1</Tag>
                        <Tag id="2">Tag 2</Tag>
                        <Tag id="3">Tag 3</Tag>
                    </TagList>
                </TagGroup>
            );

        expect(renderOnServer).not.toThrow();
    });
});
