import { ComboBox } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox aria-label="Roles">
            <ComboBox.Option id="designer">Designer</ComboBox.Option>
            <ComboBox.Option id="developer">Developer</ComboBox.Option>
            <ComboBox.Option id="manager">Manager</ComboBox.Option>
        </ComboBox>
    );
}
