import { ListBox, ListBoxItem } from "@hopper-ui/components";

export default function Example() {
    return (
        <ListBox
            selectionMode="single"
            disabledKeys={["2"]}
            aria-label="list of options"
        >
            <ListBoxItem id="1">Item 1</ListBoxItem>
            <ListBoxItem id="2">Item 2</ListBoxItem>
            <ListBoxItem id="3">Item 3</ListBoxItem>
        </ListBox>
    );
}
