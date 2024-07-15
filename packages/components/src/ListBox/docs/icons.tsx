import { IconList, ListBox, ListBoxItem, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <ListBox selectionMode="single" aria-label="list of options">
            <ListBoxItem textValue="Item 1">
                <Text slot="label">Item 1</Text>
                <IconList>
                    <SparklesIcon /><SparklesIcon /><SparklesIcon />
                </IconList>
            </ListBoxItem>
            <ListBoxItem textValue="Item 2">
                <SparklesIcon /><Text slot="label">Item 2</Text>
            </ListBoxItem>
            <ListBoxItem>Item 3</ListBoxItem>
        </ListBox>
    );
}
