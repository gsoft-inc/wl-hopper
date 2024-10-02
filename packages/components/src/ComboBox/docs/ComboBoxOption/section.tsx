import { ComboBox, Header, Label, Section } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox fieldChildren={<Label>Roles</Label>}>
            <ComboBox.Option id="developer">Developer</ComboBox.Option>
            <ComboBox.Option id="manager">Manager</ComboBox.Option>
            <Section>
                <Header>Operations</Header>
                <ComboBox.Option id="project-coordinator">Project Coordinator</ComboBox.Option>
                <ComboBox.Option id="qa-specialist">QA Specialist</ComboBox.Option>
            </Section>
            <Section>
                <Header>Creative Department</Header>
                <ComboBox.Option id="designer">Designer</ComboBox.Option>
                <ComboBox.Option id="copywriter">Copywriter</ComboBox.Option>
                <ComboBox.Option id="ux-researcher">UX Researcher</ComboBox.Option>
            </Section>
        </ComboBox>
    );
}
