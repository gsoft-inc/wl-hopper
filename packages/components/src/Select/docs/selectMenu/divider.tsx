import { Divider, Select } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select aria-label="list of options">
            <Select.Option>Item 1</Select.Option>
            <Select.Option>Item 2</Select.Option>
            <Select.Option>Item 3</Select.Option>
            <Divider />
            <Select.Option>Item 4</Select.Option>
            <Select.Option>Item 5</Select.Option>
        </Select>
    );
}
