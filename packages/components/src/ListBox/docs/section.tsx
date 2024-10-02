import { Header, ListBox, ListBoxItem, Section } from "@hopper-ui/components";

export default function Example() {
    return (
        <ListBox selectionMode="single" aria-label="list of options">
            <ListBoxItem>Developer</ListBoxItem>
            <ListBoxItem>Manager</ListBoxItem>
            <Section>
                <Header>Creative Department</Header>
                <ListBoxItem>Designer</ListBoxItem>
                <ListBoxItem>Copywriter</ListBoxItem>
                <ListBoxItem>UX Researcher</ListBoxItem>
            </Section>
            <Section>
                <Header>Operations</Header>
                <ListBoxItem>Project Coordinator</ListBoxItem>
                <ListBoxItem>QA Specialist</ListBoxItem>
            </Section>
            <ListBoxItem>Product Owner</ListBoxItem>
        </ListBox>
    );
}
