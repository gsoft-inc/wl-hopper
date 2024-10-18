import { ComboBox, ComboBoxItem, Header, Section } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox label="Roles">
            <ComboBoxItem id="developer">Developer</ComboBoxItem>
            <ComboBoxItem id="manager">Manager</ComboBoxItem>
            <Section>
                <Header>Operations</Header>
                <ComboBoxItem id="project-coordinator">Project Coordinator</ComboBoxItem>
                <ComboBoxItem id="qa-specialist">QA Specialist</ComboBoxItem>
            </Section>
            <Section>
                <Header>Creative Department</Header>
                <ComboBoxItem id="designer">Designer</ComboBoxItem>
                <ComboBoxItem id="copywriter">Copywriter</ComboBoxItem>
                <ComboBoxItem id="ux-researcher">UX Researcher</ComboBoxItem>
            </Section>
        </ComboBox>
    );
}
