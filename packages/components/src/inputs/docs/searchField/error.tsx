import { SearchField, Label, ErrorMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <SearchField placeholder="Enter a keyword" isInvalid>
            <Label>Search:</Label>
            <ErrorMessage>No results were found</ErrorMessage>
        </SearchField>
    );
}
