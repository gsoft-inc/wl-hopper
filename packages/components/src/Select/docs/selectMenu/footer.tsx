import { Button, Select, Text } from "@hopper-ui/components";
import { AddIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Select 
            footer={<Button variant="ghost-secondary" isFluid><AddIcon /><Text>Add</Text></Button>}
            aria-label="list of options with a description"
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
