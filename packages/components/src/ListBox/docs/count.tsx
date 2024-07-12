import { Badge, ListBox, ListBoxItem, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <ListBox selectionMode="single" aria-label="list of options">
            <ListBoxItem textValue="Item 1">
                <Text slot="label">Item 1</Text>
                <SparklesIcon slot="end-icon" />
                <Badge>50</Badge>
            </ListBoxItem>
            <ListBoxItem textValue="Item 2">
                <Badge variant="secondary">99+</Badge>
                <Text slot="label">Item 2</Text>
            </ListBoxItem>
            <ListBoxItem>Item 3</ListBoxItem>
        </ListBox>
    );
}
