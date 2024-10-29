import { Header, Section, Select, SelectItem } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select aria-label="list of options">
            <SelectItem>Developer</SelectItem>
            <SelectItem>Manager</SelectItem>
            <Section>
                <Header>Creative Department</Header>
                <SelectItem>Designer</SelectItem>
                <SelectItem>Copywriter</SelectItem>
                <SelectItem>UX Researcher</SelectItem>
            </Section>
            <Section>
                <Header>Operations</Header>
                <SelectItem>Project Coordinator</SelectItem>
                <SelectItem>QA Specialist</SelectItem>
            </Section>
            <SelectItem>Product Owner</SelectItem>
        </Select>
    );
}
