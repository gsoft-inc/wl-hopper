import { Header, Section, Select, SelectOption, SelectOptions } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select aria-label="list of options">
            <SelectOptions>
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
            </SelectOptions>
        </Select>
    );
}
