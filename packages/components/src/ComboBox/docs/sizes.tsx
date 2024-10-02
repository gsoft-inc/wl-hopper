import { ComboBox, Label, Stack } from "@hopper-ui/components";

export default function Example() {
    return (
        <Stack>
            <ComboBox size="sm" fieldChildren={<Label>Roles</Label>}>
                <ComboBox.Option id="designer">Designer</ComboBox.Option>
                <ComboBox.Option id="developer">Developer</ComboBox.Option>
                <ComboBox.Option id="manager">Manager</ComboBox.Option>
            </ComboBox>
            <ComboBox size="md">
                <ComboBox.Option id="designer">Designer</ComboBox.Option>
                <ComboBox.Option id="developer">Developer</ComboBox.Option>
                <ComboBox.Option id="manager">Manager</ComboBox.Option>
            </ComboBox>
        </Stack>
    );
}
