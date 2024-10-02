import { Header, Section, Select, SelectField, SelectOption } from "@hopper-ui/components";

export default function Example() {
    return (
        <SelectField aria-label="list of options">
            <Select>
                <SelectOption>Developer</SelectOption>
                <SelectOption>Manager</SelectOption>
                <Section>
                    <Header>Creative Department</Header>
                    <SelectOption>Designer</SelectOption>
                    <SelectOption>Copywriter</SelectOption>
                    <SelectOption>UX Researcher</SelectOption>
                </Section>
                <Section>
                    <Header>Operations</Header>
                    <SelectOption>Project Coordinator</SelectOption>
                    <SelectOption>QA Specialist</SelectOption>
                </Section>
                <SelectOption>Product Owner</SelectOption>
            </Select>
        </SelectField>
    );
}
