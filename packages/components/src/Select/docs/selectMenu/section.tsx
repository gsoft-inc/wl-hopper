import { Header, Select, Section } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select aria-label="list of options">
            <Select.Option>Item 1</Select.Option>
            <Select.Option>Item 2</Select.Option>
            <Section>
                <Header>More Items</Header>
                <Select.Option>Item 3</Select.Option>
                <Select.Option>Item 4</Select.Option>
                <Select.Option>Item 5</Select.Option>
            </Section>
            <Section>
                <Header>Even More Items</Header>
                <Select.Option>Item 6</Select.Option>
                <Select.Option>Item 7</Select.Option>
            </Section>
            <Select.Option>Item 8</Select.Option>
        </Select>
    );
}
