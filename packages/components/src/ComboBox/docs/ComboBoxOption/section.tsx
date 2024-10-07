import { ComboBox, ComboBoxOption, ComboBoxOptions, Header, Label, Section } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox>
            <Label>Roles</Label>
            <ComboBoxOptions>
                <ComboBoxOption id="developer">Developer</ComboBoxOption>
                <ComboBoxOption id="manager">Manager</ComboBoxOption>
                <Section>
                    <Header>Operations</Header>
                    <ComboBoxOption id="project-coordinator">Project Coordinator</ComboBoxOption>
                    <ComboBoxOption id="qa-specialist">QA Specialist</ComboBoxOption>
                </Section>
                <Section>
                    <Header>Creative Department</Header>
                    <ComboBoxOption id="designer">Designer</ComboBoxOption>
                    <ComboBoxOption id="copywriter">Copywriter</ComboBoxOption>
                    <ComboBoxOption id="ux-researcher">UX Researcher</ComboBoxOption>
                </Section>
            </ComboBoxOptions>
        </ComboBox>
    );
}
