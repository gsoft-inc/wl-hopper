import { SearchField, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <SearchField placeholder="Enter a keyword" isClearable={false}>
            <Label>Search:</Label>
        </SearchField>
    );
}
