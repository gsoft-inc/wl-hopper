import { Select } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select
            aria-label="list of options"
            listBoxProps={{ isLoading: true }}
        >
            {[]}
        </Select>
    );
}
