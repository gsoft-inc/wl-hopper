import { Select } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select
            disabledKeys={["2"]}
            aria-label="list of options"
        >
            <Select.Option id="1">Item 1</Select.Option>
            <Select.Option id="2">Item 2</Select.Option>
            <Select.Option id="3">Item 3</Select.Option>
        </Select>
    );
}
