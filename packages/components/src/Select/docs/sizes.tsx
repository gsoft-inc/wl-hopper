import { Label, Select, Stack } from "@hopper-ui/components";

export default function Example() {
    return (
        <Stack>
            <Select fieldChildren={<Label>Roles</Label>}>
                <Select.Option id="designer">Designer</Select.Option>
                <Select.Option id="developer">Developer</Select.Option>
                <Select.Option id="manager">Manager</Select.Option>
            </Select>
            <Select
                fieldChildren={<Label>Roles</Label>}
                size="md"
            >
                <Select.Option id="designer">Designer</Select.Option>
                <Select.Option id="developer">Developer</Select.Option>
                <Select.Option id="manager">Manager</Select.Option>
            </Select>
        </Stack>
    );
}
