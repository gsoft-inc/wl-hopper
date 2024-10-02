import { Header, Section, Select } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select aria-label="list of options">
            <Select.Option>Developer</Select.Option>
            <Select.Option>Manager</Select.Option>
            <Section>
                <Header>Creative Department</Header>
                <Select.Option>Designer</Select.Option>
                <Select.Option>Copywriter</Select.Option>
                <Select.Option>UX Researcher</Select.Option>
            </Section>
            <Section>
                <Header>Operations</Header>
                <Select.Option>Project Coordinator</Select.Option>
                <Select.Option>QA Specialist</Select.Option>
            </Section>
            <Select.Option>Product Owner</Select.Option>
        </Select>
    );
}
