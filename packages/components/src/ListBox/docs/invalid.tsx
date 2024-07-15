import { ListBox, ListBoxItem, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <ListBox
            isInvalid
            selectionMode="multiple"
            disabledKeys={["2"]}
            aria-label="list of options with a description"
        >
            <ListBoxItem textValue="Item 1">
                <Text>Item 1</Text>
                <Text slot="description">Description of item 1</Text>
            </ListBoxItem>
            <ListBoxItem textValue="Item 2">
                <Text>Item 2</Text>
                <Text slot="description">Description of item 2</Text>
            </ListBoxItem>
            <ListBoxItem textValue="Item 3">
                <Text>Item 3</Text>
                <Text slot="description">Description of item 3 will be a long one to show wrapping.</Text>
            </ListBoxItem>
        </ListBox>
    );
}
