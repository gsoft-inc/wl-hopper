import { SearchField, Label, HelperMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <SearchField placeholder="Enter a keyword">
            <Label>Search:</Label>
            <HelperMessage>Type keywords and press Enter to search</HelperMessage>
        </SearchField>
    );
}
