import { Select, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select isAutoMenuWidth
            aria-label="list of options with a description"
            popoverProps={{
                placement: "bottom start"
            }}
        >
            <Select.Option textValue="Item 1">
                <Text>Item 1</Text>
                <Text slot="description">Description of item 1</Text>
            </Select.Option>
            <Select.Option textValue="Item 2">
                <Text>Item 2</Text>
                <Text slot="description">Description of item 2</Text>
            </Select.Option>
            <Select.Option textValue="Item 3">
                <Text>Item 3</Text>
                <Text slot="description">Description of item 3 will be a long one to show overflow.</Text>
            </Select.Option>
        </Select>
    );
}
