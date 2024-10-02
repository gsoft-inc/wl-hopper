import { Select, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select isAutoMenuWidth
            aria-label="list of options with a description"
        >
            <Select.Option textValue="Designer">
                <Text>Designer</Text>
                <Text slot="description">Builds and maintains software.</Text>
            </Select.Option>
            <Select.Option textValue="Developer">
                <Text>Developer</Text>
                <Text slot="description">Creates visual design solutions.</Text>
            </Select.Option>
            <Select.Option textValue="Manager">
                <Text>Manager</Text>
                <Text slot="description">Leads teams and projects.</Text>
            </Select.Option>
        </Select>
    );
}
