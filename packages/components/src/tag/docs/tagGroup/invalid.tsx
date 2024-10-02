import { ErrorMessage, HelperMessage, Tag, TagGroup, TagList, type Selection } from "@hopper-ui/components";
import { useState } from "react";

export default function Example() {
    const [isInvalid, setIsInvalid] = useState(true);

    function onChange(keys: Selection) {
        // if value is empty, then it is invalid
        if (typeof keys === "object") {
            setIsInvalid(keys.size === 0);
        }
    }

    return (
        <TagGroup aria-label="Jobs" selectionMode="multiple" onSelectionChange={onChange} isInvalid={isInvalid}>
            <TagList>
                <Tag id="designer">Designer</Tag>
                <Tag id="developer">Developer</Tag>
                <Tag id="manager">Manager</Tag>
            </TagList>
            <HelperMessage>Unselect all to show the error message</HelperMessage>
            <ErrorMessage>Select a job and the description will appear</ErrorMessage>
        </TagGroup>
    );
}
