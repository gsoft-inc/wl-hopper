import { ComboBox, Label } from "@hopper-ui/components";
import { OrgChartIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <ComboBox
            fieldChildren={<Label>Roles</Label>}
            prefix={<OrgChartIcon />}
        >
            <ComboBox.Option id="designer">Designer</ComboBox.Option>
            <ComboBox.Option id="developer">Developer</ComboBox.Option>
            <ComboBox.Option id="manager">Manager</ComboBox.Option>
        </ComboBox>
    );
}
