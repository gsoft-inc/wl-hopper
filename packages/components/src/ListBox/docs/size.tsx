import { Inline, ListBox, ListBoxItem } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline alignY="flex-start">
            <ListBox size="lg" selectionMode="single" aria-label="list of options">
                <ListBoxItem>Item 1</ListBoxItem>
                <ListBoxItem>Item 2</ListBoxItem>
                <ListBoxItem>Item 3</ListBoxItem>
            </ListBox>
            <ListBox size="md" selectionMode="single" aria-label="list of options">
                <ListBoxItem>Item 1</ListBoxItem>
                <ListBoxItem>Item 2</ListBoxItem>
                <ListBoxItem>Item 3</ListBoxItem>
            </ListBox>
            <ListBox size="sm" selectionMode="single" aria-label="list of options">
                <ListBoxItem>Item 1</ListBoxItem>
                <ListBoxItem>Item 2</ListBoxItem>
                <ListBoxItem>Item 3</ListBoxItem>
            </ListBox>
            <ListBox size="xs" selectionMode="single" aria-label="list of options">
                <ListBoxItem>Item 1</ListBoxItem>
                <ListBoxItem>Item 2</ListBoxItem>
                <ListBoxItem>Item 3</ListBoxItem>
            </ListBox>
        </Inline>
    );
}
