import { Header, ListBox, ListBoxItem, Section } from "@hopper-ui/components";

export default function Example() {
    return (
        <ListBox selectionMode="single" aria-label="list of options">
            <ListBoxItem>Item 1</ListBoxItem>
            <ListBoxItem>Item 2</ListBoxItem>
            <Section>
                <Header>More Items</Header>
                <ListBoxItem>Item 3</ListBoxItem>
                <ListBoxItem>Item 4</ListBoxItem>
                <ListBoxItem>Item 5</ListBoxItem>
            </Section>
            <Section>
                <Header>Even More Items</Header>
                <ListBoxItem>Item 6</ListBoxItem>
                <ListBoxItem>Item 7</ListBoxItem>
            </Section>
            <ListBoxItem>Item 8</ListBoxItem>
        </ListBox>
    );
}
