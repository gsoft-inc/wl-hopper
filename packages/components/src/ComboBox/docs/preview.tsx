import { ComboBox, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox fieldChildren={<Label>Roles</Label>}>
            <ComboBox.Option id="designer">Designer</ComboBox.Option>
            <ComboBox.Option id="developer">Developer</ComboBox.Option>
            <ComboBox.Option id="manager">Manager</ComboBox.Option>
        </ComboBox>
    );
}
