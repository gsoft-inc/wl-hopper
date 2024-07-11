import { SearchField, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <SearchField placeholder="Enter a keyword" isReadOnly>
            <Label>Search:</Label>
        </SearchField>
    );
}
