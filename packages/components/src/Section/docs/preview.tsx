import { Header, ListBox, ListBoxItem, Section } from "@hopper-ui/components";

export default function Example() {
    return (
        <ListBox>
            <Section>
                <Header>Creative Department</Header>
                <ListBoxItem>Designer</ListBoxItem>
                <ListBoxItem>Copywriter</ListBoxItem>
                <ListBoxItem>UX Researcher</ListBoxItem>
            </Section>
        </ListBox>
    );
}
