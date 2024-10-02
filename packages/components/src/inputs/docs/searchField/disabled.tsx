import { Label, SearchField } from "@hopper-ui/components";

export default function Example() {
    return (
        <SearchField placeholder="New York, NY" isDisabled>
            <Label>Filter by location</Label>
        </SearchField>
    );
}
