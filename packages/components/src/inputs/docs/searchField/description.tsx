import { HelperMessage, Label, SearchField } from "@hopper-ui/components";

export default function Example() {
    return (
        <SearchField placeholder="New York, NY">
            <Label>Filter by location</Label>
            <HelperMessage>Search by city, state, or postal code</HelperMessage>
        </SearchField>
    );
}
