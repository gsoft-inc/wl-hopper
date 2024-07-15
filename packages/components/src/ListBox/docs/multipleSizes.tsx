import { ListBox, ListBoxItem } from "@hopper-ui/components";

export default function Example() {
    return (
        <ListBox selectionMode="single" aria-label="list of options">
            <ListBoxItem size="xs">XS Item</ListBoxItem>
            <ListBoxItem size="sm">SM Item</ListBoxItem>
            <ListBoxItem size="md">MD Item</ListBoxItem>
            <ListBoxItem size="lg">LG Item</ListBoxItem>
        </ListBox>
    );
}
