import { Select, SelectField } from "@hopper-ui/components";

export default function Example() {
    return (
        <SelectField
            aria-label="list of options"
        >
            <Select
                listBoxProps={{ isLoading: true }}
            >
                {[]}
            </Select>
        </SelectField>
    );
}
