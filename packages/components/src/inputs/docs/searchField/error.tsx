import { ErrorMessage, Label, SearchField } from "@hopper-ui/components";

export default function Example() {
    return (
        <SearchField placeholder="New York, NY" isInvalid>
            <Label>Filter by location</Label>
            <ErrorMessage>No results were found</ErrorMessage>
        </SearchField>
    );
}
