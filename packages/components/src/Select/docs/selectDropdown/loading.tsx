import { Select, SelectOptions } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select
            aria-label="list of options"
        >
            <SelectOptions
                listBoxProps={{ isLoading: true }}
            >
                {[]}
            </SelectOptions>
        </Select>
    );
}
