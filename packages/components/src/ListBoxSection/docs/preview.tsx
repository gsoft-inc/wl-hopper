import { Header, ListBox, ListBoxItem, ListBoxSection } from "@hopper-ui/components";

export default function Example() {
    return (
        <ListBox>
            <ListBoxSection>
                <Header>Creative Department</Header>
                <ListBoxItem>Designer</ListBoxItem>
                <ListBoxItem>Copywriter</ListBoxItem>
                <ListBoxItem>UX Researcher</ListBoxItem>
            </ListBoxSection>
        </ListBox>
    );
}
